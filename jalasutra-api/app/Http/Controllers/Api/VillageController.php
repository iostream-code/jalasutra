<?php

namespace App\Http\Controllers\Api;

use App\Models\Village;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\VillageResource;
use Illuminate\Support\Facades\Validator;

class VillageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $villages = Village::latest()->paginate(5);

        return new VillageResource(true, 'List of Village', $villages);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:30',
        ], [
            'name.max' => 'Kolom nama maksimal berisikan 30 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $village = Village::create([
            'name' => $request->name,
        ]);

        return new VillageResource(true, 'New Village successfully added !', $village);
    }

    /**
     * Display the specified resource.
     */
    public function show(Village $village)
    {
        return new VillageResource(true, 'Village Detail', $village);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Village $village)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:30',
        ], [
            'name.max' => 'Kolom nama maksimal berisikan 30 karakter',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $village->update([
            'name' => $request->name,
        ]);

        return new VillageResource(true, 'Village update successfully !', $village);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Village $village)
    {
        $village->delete();

        return new VillageResource(true, 'Village has successfully deleted !', null);
    }
}
