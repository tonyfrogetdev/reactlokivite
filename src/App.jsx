import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import DishDetails from "./pages/DishDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [countCart, setCountCart] = useState([]);

  const addToCart = (item) => {
    setCountCart([...countCart, item]);
  };

  return (
    <Routes>
      <Route element={<Layout countCart={countCart} addToCart={addToCart} />}>
        <Route index element={<Home />} />
        <Route
          path="/plat/:slug"
          element={<DishDetails addToCart={addToCart} />}
        />
        <Route path="/a-propos" element={<About />} />
        <Route path="/panier" element={<Cart countCart={countCart} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
