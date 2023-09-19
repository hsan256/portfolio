import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      Navbar
      {children}
      Footer
    </>
  );
};

export default Layout;
