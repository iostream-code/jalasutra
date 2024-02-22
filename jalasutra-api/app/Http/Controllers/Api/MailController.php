<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\MailResource;
use App\Models\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mails = Mail::all();

        return new MailResource(true, "List of Mail", $mails);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'pk_service_id' => 'required',
            'name' => 'required|max:20',
            'form' => 'required'
        ], [
            // error message here..
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $mail = Mail::create([
            'pk_service_id' => $request->pk_service_id,
            'name' => $request->name,
            'form' => $request->form,
        ]);

        return new MailResource(true, 'New Mail successfully added !', $mail);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mail $mail)
    {
        return new MailResource(true, 'Mail details !', $mail);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mail $mail)
    {
        $validator = Validator::make($request->all(), [
            'pk_service_id' => 'required',
            'name' => 'required|max:20',
            'form' => 'required'
        ], [
            // error message here..
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $mail->update([
            'pk_service_id' => $request->pk_service_id,
            'name' => $request->name,
            'form' => $request->form,
        ]);

        return new MailResource(true, 'Mail successfully updated !', $mail);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mail $mail)
    {
        $mail->delete();

        return new MailResource(true, 'Mail successfull deleted !', null);
    }
}
