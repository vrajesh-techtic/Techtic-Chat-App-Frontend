import React from "react";
import CustomHeader from "./CustomHeader";
import CustomSider from "./CustomSider";

const HomePage = ({children}) => {


  return (
    <>
      <CustomHeader />
      <CustomSider/>
      <div>

      {children}
      </div>
      {/* <div onClick={() => handleClick()}>Logout</div> */}
    </>
  );
};

export default HomePage;
