<?php

namespace App\Http\Controllers\PharmacyManagement;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;
use App\User;

class OrderController extends Controller
{
    public function getOrders(){

    }

    public function newOrder(Request $request){
        $auth = User::find(1); 

       $this->validate([
           'orders' => 'required', 
           'supplier_id' => 'required'
       ]); 

       $orders = json_decode(json_encode($request->orders)); 

       $_orders = []; 
       foreach($orders as $order){
            $o = Order::create([
                'drug_id' => $order->drug_id, 
                'ordered_by' => $auth->id, 
                'supplier_id' => $request->supplier_id, 
                'ordered_quantity' => $request->ordered_quantity
            ]); 
            array_push($_orders, $o); 
       }

       return $_orders; 
    }

    public function autorize(Request $request){

    }

    public function ship(Request $request){
        
    }
}
