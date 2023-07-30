import Register from "./Pages/Register.page";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login.page";
import Homepage from "./Pages/Home.page";
import ProductPage from "./Pages/Product.page";
import EachProduct from "./Pages/One.Product.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/eachproduct" element={<EachProduct />} />
    </Routes>
  );
};

export default App;
