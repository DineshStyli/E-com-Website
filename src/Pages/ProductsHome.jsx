import { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import { productContext } from "../Context/ProductContext";

function ProductsHome() {
  // const [products, setproducts] = useState([]);
  const { products } = useContext(productContext);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => {
  //     setproducts(res.data);
  //   });
  // }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-white 2xl:px-[10rem]">
        <div className=" min-h-lvh grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-[-10rem] p-4 px-10">
          {products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsHome;
