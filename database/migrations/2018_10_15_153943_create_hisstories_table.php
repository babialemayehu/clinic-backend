<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHisstoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hisstories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('patient_queue_id'); 
            $table->integer('diagnosis_id')->nullable(); 
            $table->text('chief_complaint')->nullable(); 
            $table->decimal('temprature')->nullable(); 
            $table->decimal('BP')->nullable(); 
            $table->decimal('puls_rate')->nullable(); 
            $table->decimal('respiratory_rate')->nullable(); 
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
        Schema::dropIfExists('hisstories');
    }
}
