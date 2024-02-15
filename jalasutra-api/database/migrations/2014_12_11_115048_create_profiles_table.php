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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fk_user_id');
            $table->foreign('fk_user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('fk_village_id');
            $table->foreign('fk_village_id')->references('id')->on('villages')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('identity_id');
            $table->string('full_name');
            $table->date('birth');
            $table->enum('sex', ['male', 'female'])->nullable();
            $table->text('address')->nullable();
            $table->string('job')->nullable();
            $table->enum('marital_status', ['married', 'single', 'divorced']);
            $table->string('photo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
