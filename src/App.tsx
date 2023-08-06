import Register from "./Pages/Register.page";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login.page";
import Homepage from "./Pages/Home.page";
import ProductPage from "./Pages/Product.page";
import EachProduct from "./Pages/One.Product.page";
import CartPage from "./Pages/cart.page";
import ErrorPage from "./Pages/404.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:id" element={<EachProduct />} />
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
