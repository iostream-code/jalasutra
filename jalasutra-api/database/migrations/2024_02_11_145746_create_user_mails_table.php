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
        Schema::create('user_mails', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fk_user_id')->nullable();
            $table->foreign('fk_user_id')->references('id')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('fk_mail_id');
            $table->foreign('fk_mail_id')->references('id')->on('mails')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('number')->nullable();
            $table->string('content')->nullable();
            $table->string('signature')->nullable();
            $table->enum('status', ['waiting', 'processed', 'rejected', 'accepted'])->default('waiting');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_mails');
    }
};
