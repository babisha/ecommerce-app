import Register from "./Pages/Register.page";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login.page";
import Homepage from "./Pages/Home.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
};

export default App;
