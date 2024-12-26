import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import ProductsHome from "./Pages/ProductsHome";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Placeholder for nested route components */}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Use Layout as the root element
      children: [
        { path: "/", element: <ProductsHome /> },
        { path: "products", element: <ProductsHome /> },
        { path: "products/:productId", element: <ProductDetails /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
