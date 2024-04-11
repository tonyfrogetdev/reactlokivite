import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children, countCart, addToCart }) => {
  return (
    <>
      <Header countCart={countCart} />
      <main>
        <Outlet addToCart={addToCart} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
