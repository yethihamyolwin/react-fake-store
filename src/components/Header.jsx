import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container>
      <header className="px-5 py-5">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-bold">
            Online Shop
          </Link>
          <Link
            to={"/my-cart"}
            className="border border-black px-5 py-2 relative"
          >
            My Cart
            <span className="inline-block text-xs bg-red-500 text-white px-3 py-1 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              1
            </span>
          </Link>
        </div>
      </header>
    </Container>
  );
}
