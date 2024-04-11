import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import DishDetails from "./pages/DishDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Cart from "./pages/Cart";
import { CartProvider } from "./utils/context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/plat/:slug" element={<DishDetails />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
