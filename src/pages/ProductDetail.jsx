import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
const ProductDetail = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);
  return (
    <>
      <Container>
        <BreadCrumb currentPageTitle="Product Detail" />
        <div className="border border-black p-10">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1">
              <img
                src={currentProduct.image}
                className="w-3/4 block mx-auto"
                alt={currentProduct.title}
              />
            </div>
            <div className="col-span-1 flex flex-col items-start gap-5">
              <h1 className="text-3xl font-bold">{currentProduct.title}</h1>
              <p className="bg-gray-200 text-gray-700 px-5 py-1 inline-block">
                {currentProduct.category}
              </p>
              <p className="text-xl">{currentProduct.description}</p>
              <Rating rate={currentProduct.rating.rate} />
              <div className="flex justify-between w-full items-center">
                <p>Price : ({currentProduct.price})</p>
                <button className="text-sm border border-black px-4 py-2">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
