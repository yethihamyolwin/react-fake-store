import React from "react";
export default function Header() {
  return (
    <header className="px-5 py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <button className="border border-black px-5 py-2 relative">
          My Cart
          <span className="inline-block text-xs bg-red-500 text-white px-3 py-1 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            1
          </span>
        </button>
      </div>
    </header>
  );
}
