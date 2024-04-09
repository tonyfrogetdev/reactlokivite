import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import DishDetails from "./pages/DishDetails";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/plat/:slug" element={<DishDetails />} />
          <Route path="/a-propos" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
