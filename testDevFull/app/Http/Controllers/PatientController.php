<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Patient;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $patients = Patient::paginate(10);
        return response()->json($patients);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $patient= new Patient();
        $patient->fill($request->all());
        $patient->save();

        return response()->json($patient, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $patient = Patient::find($id);

        if(!$patient) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        return response()->json($patient);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $patient = Patient::find($id);

        if(!$patient) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $patient->fill($request->all());
        $patient->save();

        return response()->json($patient);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       $patient = Patient::find($id);
        if(!$patient) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }
        $patient->delete();
    }
}