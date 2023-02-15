import { Container } from "@mui/material";
import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
