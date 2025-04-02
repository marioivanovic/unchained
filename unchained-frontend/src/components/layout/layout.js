import React from "react";
import { useLocation } from "react-router-dom";

import Nav from "../organisms/navigation/navigation";
// import Footer from "../organisms/footer/footer";

const Layout = ({ children }) => {
  let location = useLocation();

  return (
    <>
      {!location.pathname.includes("/donation") &&
        !location.pathname.includes("/items/add") &&
        !location.pathname.includes("/items/create") && <Nav />}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
