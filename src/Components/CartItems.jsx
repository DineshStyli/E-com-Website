import React, { useContext } from "react";
import { productContext } from "../Context/ProductContext";
import { IoTrashBinOutline } from "react-icons/io5";

const CartItems = () => {
  const { cartItems, cartTotal, removeFromCart } = useContext(productContext);

  if (!cartItems) {
    return <div>Loading</div>;
  }
  return (
    <div className="cartItems mx-[6rem] my-[8rem]">
      <h1 className="font-semibold text-3xl mb-6 ">Shopping Cart</h1>
      <hr className="h-1 border-spacing-0 bg-[#e2e2e2]" />
      <div className=" cartItems-format-main grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-16 py-5 items-center text-[#454545] font-semibold text-lg ">
        <p className="flex justify-center">Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 border-spacing-0 bg-[#e2e2e2]" />
      {cartItems.map((p) => {
        return (
          <div key={p.id}>
            <div className="cart-items-format grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] gap-16 py-5 items-center text-[#454545] font-semibold text-lg">
              <img
                src="public/images/ronaldo1.jpg"
                alt=""
                className=" carticon-product-icon h-14"
              />
              <p>{p.name}</p>
              <p>{p.price}</p>
              <button className="cartitems-quantity w-16 h-12 border-solid border-2 border-[#ebebeb] bg-white ">
                {p.count}
              </button>
              <p>{p.price * p.count}</p>
              <button
                className="w-4 mx-10 cursor-pointer"
                onClick={() => removeFromCart(p)}
              >
                <IoTrashBinOutline />
              </button>
            </div>
            <hr className="h-1 border-spacing-0 bg-[#e2e2e2]" />
          </div>
        );
      })}
      {/* <div className="cartitems-down flex my-24 "> */}
      <div className="cartitems-total flex-col flex-1 mr-48 gap-10 my-24">
        <h1 className="text-3xl font-bold">Cart Total</h1>
        <div>
          <div className="cartitems-total-item flex justify-between py-4 ">
            <p>Subtotal</p>
            <p>₹{cartTotal}</p>
          </div>
          <hr />
          <div className="cartitems-total-item flex justify-between py-4">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item  flex justify-between py-4 text-xl font-bold">
            <h3>Total</h3>
            <h3>₹{cartTotal}</h3>
          </div>
        </div>
        <button className="w-64 h-14 outline-0 border-0 bg-[#ff5a5a] text-[#fff] text-lg font-semibold cursor-pointer ">
          Proceed to Checkout
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CartItems;
