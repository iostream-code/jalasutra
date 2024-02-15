<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Profile;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::with('profile')->latest()->paginate(10);

        return new UserResource(true, 'List of User', $users);
    }

    /**
     * store
     *
     * @param mixed $request
     * @return void
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:30',
            'email' => 'required',
            'password' => 'required|min:8',
            'role' => 'required',
            'fk_village_id' => 'required',
            'identity_id' => 'required|numeric|min:16',
            'full_name' => 'required|max:50',
            'birth' => 'required',
            'address' => 'required|max:255',
            'photo' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ], [
            // Required error message doesn't need to show on User, just adding required attribute on Input Field
            'username.max' => 'Username maksimal terdiri dari 30 karakter.',
            'password.min' => 'Password minimal terdiri dari 8 karakter.',
            'identity_id.min' => 'NIK kurang tepat, silahkan periksa kembali.',
            'identity_id.numeric' => 'NIK harus berisikan angka, silahkan periksa kembali.',
            'full_name.min' => 'Nama Lengkap maksimal terdiri dari 50 karakter.',
            'address.max' => 'Alamat maksimal terdiri dari 200 karakter.',
            'photo.mimes' => 'Foto harus memiliki format jpeg, png, jpg, atau webp.',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $photo = $request->file('photo');
        $photo->storeAs('public/profiles', $photo->hashName());

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        $user_profile = Profile::create([
            'fk_user_id' => $user->id,
            'fk_village_id' => $request->fk_village_id,
            'identity_id' => $request->identity_id,
            'full_name' => $request->full_name,
            'birth' => $request->birth,
            'sex' => $request->sex,
            'address' => $request->alamat,
            'job' => $request->job,
            'marital_status' => $request->marital_status,
            'photo' => $photo->hashName(),
        ]);

        return new UserResource(true, 'New User successfully added !', $user_profile);
    }

    /**
     * show
     *
     * @param mixed $user
     * @return void
     */
    public function show(User $user) /* Try to solve this bug */
    {
        // $user = User::findOrFail($id)->first();
        $user_profile = Profile::with(['user', 'village'])->where('fk_user_id', $user->id)->with('village')->first();

        return new UserResource(true, 'User Detail', $user_profile);
    }

    /**
     * update
     *
     * @param mixed $user
     * @param mixed $request
     * @return void
     */
    public function update(User $user, Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|max:30',
            'email' => 'required',
            'password' => 'required|min:8',
            'role' => 'required',
            'identity_id' => 'required|numeric|min:16',
            'full_name' => 'required|max:50',
            'birth' => 'required',
            'address' => 'required|max:255',
            'photo' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
        ], [
            // Required error message doesn't need to show on User, just adding required attribute on Input Field
            'username.max' => 'Username maksimal terdiri dari 30 karakter.',
            'password.min' => 'Password minimal terdiri dari 8 karakter.',
            'identity_id.min' => 'NIK kurang tepat, silahkan periksa kembali.',
            'identity_id.numeric' => 'NIK harus berisikan angka, silahkan periksa kembali.',
            'full_name.min' => 'Nama Lengkap maksimal terdiri dari 50 karakter.',
            'address.max' => 'Alamat maksimal terdiri dari 200 karakter.',
            'photo.mimes' => 'Foto harus memiliki format jpeg, png, jpg, atau webp.',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        // $user = User::findOrFail($id)->first();

        $user->update([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]);

        $user_profile = Profile::where('fk_user_id', $user->id)->first();

        if ($request->hasFile('photo')) {
            $photo = $request->file('photo');
            $photo->storeAs('public/profiles', $photo->hashName());

            Storage::delete('public/profiles/' . basename($user_profile->photo));

            $user_profile->update([
                'fk_user_id' => $user->id,
                'fk_village_id' => $request->fk_village_id,
                'nik' => $request->nik,
                'nama_lengkap' => $request->nama_lengkap,
                'tanggal_lahir' => $request->tanggal_lahir,
                'gender' => $request->gender,
                'alamat' => $request->alamat,
                'pekerjaan' => $request->pekerjaan,
                'status' => $request->status,
                'photo' => $photo->hashName(),
            ]);
        } else {
            $user_profile->update([
                'fk_user_id' => $user->id,
                'fk_village_id' => $request->fk_village_id,
                'identity_id' => $request->identity_id,
                'full_name' => $request->full_name,
                'birth' => $request->birth,
                'sex' => $request->sex,
                'address' => $request->address,
                'job' => $request->job,
                'marital_status' => $request->marital_status,
            ]);
        }

        return new UserResource(true, 'User update successfully !', $user_profile);
    }

    /**
     * destroy
     *
     * @param mixed $user
     * @return void
     */
    public function destroy(User $user)
    {
        // $user = User::findOrFail($id)->with('role')->first();
        $user_profile = Profile::with('user')->where('fk_user_id', $user->id)->first();

        $user_profile->delete();
        $user->delete();

        return new UserResource(true, 'User has successfully deleted !', null);
    }
}
