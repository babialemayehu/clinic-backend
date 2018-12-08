<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDrugOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drug_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order_id'); 
            $table->integer('autorized_by')->nullable(); 
            $table->integer('drug_id'); 
            $table->decimal('ordered_quantity'); 
            $table->decimal('adjusted_quantity')->nullable(); 
            $table->decimal('issued_quantity')->nullable(); 
            $table->integer('batch_number')->nullable(); 
            $table->integer('issued_by')->nullable(); 
            $table->date('expier_at')->nullable();
            $table->timestamp('recived_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drug_orders');
    }
}
