import Register from "./Pages/Register.page";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
