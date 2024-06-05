import "./App.css";
import PricingCard from "./Components/ReactCardPlan";
import ReactPricingCard from "./Components/ReactPricingCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Admin from "./Components/Admin";
import  Payment  from "./Components/Payment";
//import Chatdemo from "./Components/chat"
import Hero from "./Components/Hero";
import { Chat } from "@mui/icons-material";
function App() {
  return (
    <>
      {/* <PricingCard /> */}

      {/* <Chatdemo/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactPricingCard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/pay" element={<Payment />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
