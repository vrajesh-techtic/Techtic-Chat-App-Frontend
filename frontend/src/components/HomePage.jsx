import React from "react";
import CustomHeader from "./CustomHeader";

const HomePage = ({ children }) => {
  return (
    <>
      <CustomHeader />
      {/* <CustomSider /> */}

      {children}

      {/* <div onClick={() => handleClick()}>Logout</div> */}
    </>
  );
};

export default HomePage;
