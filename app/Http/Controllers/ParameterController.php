<?php

namespace App\Http\Controllers;

use App\Models\Parameter;
use Illuminate\Http\Request;

class ParameterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $parameters = Parameter::all()
            ->pluck('value', 'name');
        return response()->json($parameters);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Parameter $parameter)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Parameter $parameter)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Parameter $parameter)
    {
        //
    }
}
