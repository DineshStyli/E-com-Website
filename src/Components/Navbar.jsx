import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { productContext } from "../Context/ProductContext";

const Navbar = () => {
  const { cartCount } = useContext(productContext);
  return (
    <div>
      <nav className="flex py-0 bg-slate-800 text-white items-center sm:justify-start">
        <div className="logo py-4">
          <span className="font-bold text-2xl mx-4">E-Com</span>
        </div>
        <div>
          <ul className="flex gap-4 py-4 mx-2 text-xl">
            <NavLink to="/">
              <li className="cursor-pointer hover:font-bold transition-all">
                Home
              </li>
            </NavLink>
            <li className="cursor-pointer hover:font-bold transition-all">
              Contact Us
            </li>
            {/* <li className="flex"> */}

            {/* <div className="w-3 h-3 rounded-full bg-red-700 right-5 -top-1 absolute items-center">
                <p>1</p>
              </div> */}
            {/* </li> */}
          </ul>
        </div>
        <NavLink to="/cart">
          <div className=" mx-3 flex">
            <BsCart2 size={40} />
            <div className="flex rounded-full w-1/2 h-1/4 text-[0.5rem] bg-red-500 justify-center items-center">
              {cartCount}
            </div>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
