<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientQueuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_queues', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('clurk_id'); 
            $table->integer('physician_id')->nullable(); 
            $table->integer('patient_id');
            $table->boolean('status')->default(0); 
            $table->boolean('prescription_status')->default(0); 
            $table->integer('queue_number')->default(1); 
            $table->integer('hisstory_id')->nullable(); 
            $table->integer('_call')->default(1); 
            $table->boolean('isClosed')->default(false); 
            $table->softDeletes();
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
        Schema::dropIfExists('patient_queues');
    }
}
