<?php

use App\Enums\ParameterName;
use App\Models\Parameter;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parameters', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('value');
            $table->timestamps();
        });

        DB::transaction(function () {
            Parameter::create([
                'name' => ParameterName::BRAND,
                'value' => 'Finter',
            ]);
            Parameter::create([
                'name' => ParameterName::LOCATION,
                'value' => 'Moscow, RU',
            ]);
            Parameter::create([
                'name' => ParameterName::PHONE,
                'value' => '+7 900 777 77 77',
            ]);
            Parameter::create([
                'name' => ParameterName::EMAIL,
                'value' => 'test@ya.ru',
            ]);
            Parameter::create([
                'name' => ParameterName::FACEBOOK,
                'value' => '',
            ]);
            Parameter::create([
                'name' => ParameterName::TWITTER,
                'value' => '',
            ]);
            Parameter::create([
                'name' => ParameterName::LINKEDIN,
                'value' => '',
            ]);
            Parameter::create([
                'name' => ParameterName::INSTAGRAM,
                'value' => '',
            ]);
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parameters');
    }
};
