<?php

namespace App\Http\Controllers\DrugOrderManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Order; 
use App\Drug; 
use App\User; 
use Carbon\Carbon; 
use App\Drug_order; 

class OrderController extends Controller
{
    private function setupOrder(\App\Order &$order){
        $order->order = $order->orderedBy()->first(); 
        $order->supplier = $order->supplier()->first(); 
    }
    public function new(Request $request){
        $this->validate($request, [
            'orders' => 'required'
        ]); 

        $request = json_decode(json_encode($request->all())); 
        $auth = User::find(1); 
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
        $auth = User::find(1); 
        $orders = $auth->orders()->where("supplier_id", 1)->get(); 
        
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

    public function orderedDrugs(\App\Order $order){
        $drug_orders = $order->drug_orders()->get(); 

        foreach($drug_orders as $drug_order){
            $durg_order->drug = $drug_order->drug()->get(); 
        }
        return $drug_orders; 
    }
    
    public function getOrderStore(){
        $auth = User::find(1); 
        $orders = $auth->orders()->where("supplier_id", 1)->get(); 
        
        foreach($orders as $order){
           $order->drugs = $order->drug()->get();
        }
        return $orders; 
    }

    public function autorize(\App\Drug_order $order, Request $request){
        $auth = User::find(1); 
        $this->validate($request, [
            "adjusted_quantity" => "required"
        ]); 

        $order->update([
            "autorized_by" => $auth, 
            "adjusted_quantity" => $request->adjusted_quantity
        ]); 

        return $order; 
    }

    public function isssue(\App\Drug_order $order, Request $request){
        $auth = User::find(1); 

        $this->validate($request, [
            "issued_quantity" => 'required', 
            "batch_number" => 'required', 
            "expier_at" => 'required'
        ]); 

        $order->update([
            "issued_quantity" => $request->issued_quantity, 
            "batch_number" => $request->batch_number, 
            "expier_at" => $request->expier_at
        ]); 
        
        return $order; 
    }

    public function recive(\App\Drug_order $order){
        return $order->update(["recived_at" => Carbon::now()]); 
    }

    public function getOrders(){
        $orders = Order::orderedBy('updated_at', 'DESC')->get(); 
        foreach($orders as $order){
            $this->setupOrder($order); 
        }
        return $orders; 
    }
}
