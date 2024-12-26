import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { productContext } from "../Context/ProductContext";
import ProductService from "../Service/ProductService";

const ProductDetails = () => {
  const params = useParams();
  const { products, addToCart, removeFromCart } = useContext(productContext);
  // const [product, setproduct] = useState();

  console.log(params.productId);
  console.log(products);
  // useEffect(() => {
  //   ProductService.getProductById(params.productId).then((p) => {
  //     setproduct(p.data);
  //   });
  // }, []);

  if (!products.length) {
    return <p>Loading...</p>; // Assume loading if products is empty
  }

  const product = products.find(
    (p) => p.id.toString() === params.productId.toString()
  );

  const addingtoCart = (p) => {
    addToCart(p);
  };
  const removindgFromCart = (p) => {
    removeFromCart(p);
  };

  console.log(product);
  return (
    <>
      <div className="inline-flex w-full min-h-lvh px-5">
        <div className=" w-1/2 "> Yoyo</div>
        <div className=" w-1/2 flex-col p-4 text-lg px-[3rem] py-20">
          <h1 className="font-semibold leading-none text-4xl ">
            {product.name}
          </h1>
          <h2 className="font-bold text-2xl my-2 text-gray-600">
            {product.brand}
          </h2>
          <div className="text-xl">₹{product.price}</div>
          <div className="text-xl">
            <p>{product.desc}</p>
          </div>
          <button
            onClick={() => addingtoCart(product)}
            className="rounded bg-[#ff4141]"
            type="submit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
