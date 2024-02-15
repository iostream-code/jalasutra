<?php

namespace App\Http\Controllers\Api;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $services = Service::with('type')->latest()->paginate(10);

        return new ServiceResource(true, 'List of Service', $services);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fk_type_id' => 'required',
            'name' => 'required|max:10',
            'icon' => 'required|image|mimes:png,jpg,jpeg,webp|max:2048',
            'description' => 'required|max:200',
            'information' => 'required',
            'contact' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $icon = $request->file('icon');
        $icon->storeAs('public/services', $icon->hashName());

        $service = Service::create([
            'fk_type_id' => $request->fk_type_id,
            'name' => $request->name,
            'icon' => $icon->hashName(),
            'description' => $request->description,
            'information' => $request->information,
            'contact' => $request->contact,
        ]);

        return new ServiceResource(true, 'New Service successfully added !', $service);
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        $service_detail = Service::with('type')->where('id', $service->id)->get();

        return new ServiceResource(true, 'Service Detail', $service_detail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Service $service)
    {
        $validator = Validator::make($request->all(), [
            'fk_type_id' => 'required',
            'name' => 'required|max:30',
            'icon' => 'image|mimes:png,jpg,jpeg,webp|max:2048',
            'description' => 'required',
            'information' => 'required',
            'contact' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if ($request->hasFile('icon')) {
            $icon = $request->file('icon');
            $icon->storeAs('public/services', $icon->hashName());

            Storage::delete('public/services/' . basename($service->icon));

            $service->update([
                'fk_type_id' => $request->fk_type_id,
                'name' => $request->name,
                'icon' => $icon->hashName(),
                'description' => $request->description,
                'information' => $request->information,
                'contact' => $request->contact,
            ]);
        } else {
            $service->update([
                'type_id' => $request->type_id,
                'name' => $request->name,
                'description' => $request->description,
                'information' => $request->information,
                'contact' => $request->contact,
            ]);
        }

        return new ServiceResource(true, 'Update Service Successfully!', $service);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();

        return new ServiceResource(true, 'Service has been deleted!', null);
    }
}
