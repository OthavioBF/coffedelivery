import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Delivery } from "./pages/Delivery";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/delivery" element={<Delivery />} />
    </Routes>
  );
}
