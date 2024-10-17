import Navbar from "./Navbar";
import LayoutStyle from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyle.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
