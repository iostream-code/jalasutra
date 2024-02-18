<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fk_type_id');
            $table->foreign('fk_type_id')->references('id')->on('service_types')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('name', 20);
            $table->string('icon')->nullable();
            $table->string('description', 200);
            $table->text('information', 255);
            $table->string('contact')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
