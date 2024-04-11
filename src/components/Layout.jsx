import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children, countCart }) => {
  return (
    <>
      <Header countCart={countCart} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
