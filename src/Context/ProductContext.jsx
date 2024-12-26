import { useState, createContext, useEffect } from "react";
import ProductService from "../Service/ProductService";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    ProductService.getProducts().then((res) => {
      setproducts(res.data);
    });
  }, []);

  const [cartItems, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [cartCount, setcartCount] = useState(() => {
    const savedCart = localStorage.getItem("cartCount");
    return savedCart ? JSON.parse(savedCart) : 0;
  });
  const [cartTotal, setcartTotal] = useState(() => {
    const savedCart = localStorage.getItem("cartTotal");
    return savedCart ? JSON.parse(savedCart) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
    localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
  }, [cartItems]);

  const addToCart = (newItem) => {
    console.log("item is", newItem);
    setcartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Update the count of the existing item
        return prevItems.map((item) =>
          item.id === newItem.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        // Add the new item with a count of 1
        return [...prevItems, { ...newItem, count: 1 }];
      }
    });
    // setcartItems((prevItems) => ({
    //   ...prevItems,
    //   [item.id]: prevItems[item.id] + 1,
    // }));
    setcartTotal(cartTotal + newItem.price);
    setcartCount(cartCount + 1);
  };
  console.log("cart  is", cartItems);
  console.log("cart total is", cartTotal);
  const removeFromCart = (item) => {
    const removeItem = cartItems.find((i) => i.id === item.id);
    setcartTotal(cartTotal - removeItem.price * removeItem.count);
    setcartCount(cartCount - removeItem.count);
    setcartItems(cartItems.filter((p) => p.id !== item.id));
  };
  // console.log("cartcount is", cartCount);

  return (
    <productContext.Provider
      value={{
        products,
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </productContext.Provider>
  );
};
