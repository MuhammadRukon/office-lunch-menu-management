import React from "react";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="font-primary">
      <Navbar />
      <div className="xl:container mx-auto px-3 xl:px-8 min-h-[calc(100vh-131px)]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
