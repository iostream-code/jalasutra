<?php

namespace App\Http\Controllers\Api;

use App\Models\ServiceType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ServiceTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $service_types = ServiceType::latest()->paginate(5);

        return new ServiceResource(true, 'List of Service Type', $service_types);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|max:10',
            'icon' => 'image|mimes:png,jpg,jpeg,webp|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $icon = $request->file('icon');
        $icon->storeAs('public/service-types', $icon->hashName());

        $service_type = ServiceType::create([
            'name' => $request->type,
            'icon' => $icon->hashName(),
        ]);

        return new ServiceResource(true, 'New Service Type successfully added !', $service_type);
    }

    /**
     * Display the specified resource.
     */
    public function show(ServiceType $service_type)
    {
        return new ServiceResource(true, 'Service Type detail', $service_type);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ServiceType $service_type)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|max:10',
            'icon' => 'image|mimes:png,jpg,jpeg,webp|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if ($request->hasFile('icon')) {
            $icon = $request->file('icon');
            $icon->storeAs('public/service-types', $icon->hashName());

            Storage::delete('public/service-types/' . basename($service_type->icon));

            $service_type->update([
                'type' => $request->type,
                'icon' => $icon->hashName(),
            ]);
        } else {
            $service_type->update([
                'type' => $request->type,
            ]);
        }

        return new ServiceResource(true, 'Service Type successfully updated !', $service_type);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ServiceType $service_type)
    {
        $service_type->delete();

        return new ServiceResource(true, 'Service Type has been deleted !', null);
    }
}
