<?php
namespace App\Http\Controllers\DrugOrderManagement;

use App\Drug; 
use App\Order; 
use App\Drug_order; 
use Carbon\Carbon; 

class Stock{
    public static function think(){ echo "hello world"; }
    public static function sold(\App\Drug $drug, int $ordered_by){
         $drugs = $drug->prescriptions()->where('isDeliverd', 1)->get()->count(); 
         return $drugs; 
    }

    public static function available(\App\Drug $drug, int $ordered_by){
        $sold = Stock::sold($drug, $ordered_by); 

        $totalOrders = $drug->drug_order()->where('expier_at', '>', Carbon::now())->where('recived_at', '<>', null)->get(); 
        $total = 0; 

        foreach($totalOrders as $order){
            $total+= $order->issued_quantity; 
        }
        return $total-$sold; 
    }

    public static function isAvailable(\App\Drug $drug, int $ordered_by){
        return (Stock::available($durg, $ordered_by) > 0); 
    }
}