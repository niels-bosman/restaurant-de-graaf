<?php

namespace App\Http\Controllers\Beheer;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('beheer');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $products = Product::all();

        return view('beheer/product', compact('products'));
    }

    public function getNew()
    {
        $check = User::check_privileges();

        return view('beheer/product-add', compact('check'));
    }

    public function post(Request $request, Product $product)
    {
        $this->validate($request, [
            'name' => [
                'required',
                'string',
                'max:255'
            ],
            'type' => [
                'required',
                'int'
            ],
            'price' => [
                'required',
                'numeric'
            ],
            'enabled' => [
                'required',
                'int'
            ],
            'robot' => ['required']
        ]);

        $product->name = request('name');
        $product->subtype = request('type');
        $product->price = request('price');
        $product->enabled = request('enabled');
        $product->save();

        return redirect('/beheer/producten');
    }

    // Toggles the deletion
    public function delete()
    {
        $enabled = request('enabled');
        $id = request('id');

        if ($enabled == 1)
        {
            Product::where('id', $id)->update(['enabled' => 0]);
            $msg = "Het product is succesvol gedeactiveerd!";
        } else
        {
            Product::where('id', $id)->update(['enabled' => 1]);
            $msg = "Het product is succesvol weer toegevoegd!";
        }

        $products = Product::all();
        $putSuccess = true;

        return view('/beheer/product', compact('putSuccess', 'msg', 'products'));
    }

    public function put(Request $request)
    {
        $this->validate($request, [
            'name' => [
                'required',
                'string',
                'max:255'
            ],
            'type' => [
                'required',
                'int'
            ],
            'price' => [
                'required',
                'numeric'
            ],
            'enabled' => [
                'required',
                'int'
            ],
            'robot' => ['required']
        ]);

        $name = request('name');
        $subtype = request('type');
        $price = request('price');
        $enabled = request('enabled');

        Product::where('id', \request('id'))->update([
            'name' => $name,
            'subtype' => $subtype,
            'price' => $price,
            'enabled' => $enabled
        ]);

        return redirect('/beheer/producten');
    }

    public function get()
    {
        $id = request('id');
        $product = Product::where('id', $id)->first();

        return view('beheer/product-detail', compact('product'));
    }
}
