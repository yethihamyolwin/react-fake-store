import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import carts from "../data/carts";

const CartSection = () => {
  return (
    <>
      <div className="flex flex-col gap-3 h-full">
        {carts.map((cart) => (
          <Cart key={cart.id} cart={cart} />
        ))}
        <div className="border-t border-black mt-40 flex justify-end gap-10">
          <div className="text-right">
            <p className="text-gray-500">Total</p>
            <p className="font-bold">123</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Tax(10%)</p>
            <p className="font-bold">123</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Net Total</p>
            <p className="text-2xl font-bold">123</p>
          </div>
        </div>
        <div className="text-end mb-3">
          <Link className="border boder-black px-4 py-2">Order Now</Link>
        </div>
      </div>
    </>
  );
};

export default CartSection;
