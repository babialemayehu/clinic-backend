<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id');
            $table->string('reg_id')->unique();
            $table->string('first_name');
            $table->string('father_name');
            $table->string('grand_father_name');
            $table->string('phone')->unique();
            $table->string('gender');
            $table->string('birth_date'); 
            $table->integer('dorm_block'); 
            $table->integer('dorm_room_number'); 
            $table->integer('accadamic_year'); 
            $table->integer('department_id'); 
            $table->integer('college_id'); 
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
        Schema::dropIfExists('patients');
    }
}
