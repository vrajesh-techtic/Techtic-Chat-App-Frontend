import React from "react";
import CustomHeader from "./CustomHeader";

const HomePage = ({ children }) => {
  return (
    <>
      <CustomHeader />
      {children}
    </>
  );
};

export default HomePage;
