<?php

namespace App\Http\Controllers\DrugOrderManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Auth\Auth;
use App\Order; 
use App\Drug; 
use App\User; 
use Carbon\Carbon; 
use App\Drug_order; 

class OrderController extends Controller
{
    private function setupOrder(\App\Order &$order){
        $order->order = $order->orderedBy()->first(); 
        $order->order->role = $order->order->role()->first(); 
        $order->supplier = $order->supplier()->first(); 
        $order->selected = true; 
    }
    public function new(Request $request){
        $this->validate($request, [
            'orders' => 'required'
        ]); 

        $request = json_decode(json_encode($request->all())); 
        $auth = Auth::user(); 
        $order = Order::create([
            "order_by" => $auth->id, 
            "supplier_id" => 1
        ]); 

        foreach($request->orders as $drug_order){
            $durg_order = new Drug_order; 
            $durg_order->drug_id = Drug::where("name", $drug_order->drug)->first()->id;  
            $durg_order->ordered_quantity = $drug_order->orderd_quantity; 
            $durg_order->order_id = $order->id;
            $durg_order->save();
        }

        return "true"; 
    }

    public function userOrders(){
        $auth = Auth::user(); 
        $orders = $auth->orders()
            ->where("supplier_id", 1)
            ->orderBy('updated_at', 'desc')->get(); 
        
        foreach($orders as $order){
            $drug_orders = $order->drug_orders()->get(); 
            $drugs = []; 

            foreach($drug_orders as $drug_order){
                array_push($drugs, Drug::find($drug_order->drug_id)->name); 
            }
            $order->drugs = $drugs; 
            //$order->created_at = Carbon::parse($order->created_at)->diffForHumans(); 
        }
        return $orders; 
    }

    public function orderedDrugs(\App\Order $order, $option = ""){
        $drug_orders = $order->drug_orders(); 
 
        switch($option){
            case 'autorized': 
                 $drug_orders = $drug_orders->where('autorized_by', '<>', null); 
            break; 
        }
        $drug_orders = $drug_orders->get(); 
        foreach($drug_orders as $drug_order){
            $drug_order->drug = Drug::find($drug_order->drug_id);  
            switch(Auth::user()->role()->first()->name){
                case 'Admin': 
                    $drug_order->selected = ($drug_order->autorized_by != null); 
                break;
                case 'Pharmacy': 
                    $drug_order->selected = ($drug_order->recived_at != null); 
                break; 
                case 'Drug_store': 
                    $drug_order->selected = ($drug_order->issued_quantity != null); 
                break; 
            } 
            
        }
        return $drug_orders; 
    }
    
    public function getOrderStore(){
        $auth = Auth::user(); 
        $orders = $auth->orders()->where("supplier_id", 1)
        ->orderBy('updated_at', 'desc')->get(); 
        
        foreach($orders as $order){
           $order->drugs = $order->drug()->get();
        }
        return $orders;  
    }

    public function autorize(\App\Drug_order $order, Request $request){
        $auth = Auth::user(); 
        // $this->validate($request, [
        //     "adjusted_quantity" => "required"
        // ]); 
        $orders = json_decode(json_encode($request->all())); 

        foreach($orders as $order){
            if($order->selected){
                Drug_order::find($order->id)->update([
                    "autorized_by" => ($order->autorized_by == null)?null: $auth->id, 
                    "adjusted_quantity" => (int)$request->adjusted_quantity
                ]);
            }  
        }
         
        return $orders ; 
    }

    public function issue(\App\Drug_order $order, Request $request){
        $auth = Auth::user(); 
        // return $request->all(); 
        // $this->validate($request, [
        //     "issued_quantity" => 'required', 
        //     "batch_number" => 'required', 
        //     "expier_at" => 'required'
        // ]); 
       /// return $request->all(); 
        $orders = json_decode(json_encode($request->all())); 
        foreach($orders as $order){
            if($order->selected){
            //return json_encode($order); 
                $o = Drug_order::find($order->id); 
                $o->issued_by = $auth->id;
                $o->issued_quantity = $order->issued_quantity;
                $o->batch_number = $order->batch_number;
                $o->expier_at= $order->expier_at;
                $o->save(); 
            }
        }
     
        return $orders; 
    }

    public function recive(Request $request){
        $orders = json_decode(json_encode($request->all())); 
        foreach($orders as $order){
            if($order->selected)
                Drug_order::find($order->id)->update(["recived_at" => Carbon::now()]);
        }
        return 'true'; 
    }

    public function getOrders(){
       $orders = Order::orderBy('created_at')->get();
       foreach($orders as $order){
           $this->setupOrder($order); 
       }
       return $orders; 
    } 

    public function orderForStore(){
        $orders = Order::where('supplier_id', 1)->orderBy('updated_at')->get(); 
        $filterd_orders = []; 
        foreach($orders as $order){
            $autorization = $order->drug_orders()->where('autorized_by', '<>', null)->get()->count() > 0; 
            if($autorization){
                $this->setupOrder($order); 
                array_push($filterd_orders, $order); 
            }
        }
        return $filterd_orders; 
    }
}
