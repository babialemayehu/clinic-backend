<?php
namespace App\Http\Controllers\DrugOrderManagement;

use App\Drug; 
use App\Order; 
use App\Drug_order; 
use Carbon\Carbon; 

class Stock{
    public static function think(){ echo "hello world"; }

    public static function sold(\App\Drug $drug){
         $drugs = $drug->prescriptions()->get()->count();
         return $drugs; 
    }

    public static function available(\App\Drug $drug){
        $sold = Stock::sold($drug);

        $totalOrders = $drug->drug_order()
            ->where('expier_at', '>', Carbon::now())
            ->where('recived_at', '<>', null)->get();
        $total = 0; 

        foreach($totalOrders as $order){
            $total+= $order->issued_quantity; 
        }
        return $total-$sold; 
    }

    public static function isAvailable(\App\Drug $drug){
        return (Stock::available($drug) > 0);
    }
}