import React from "react";
import CustomHeader from "./CustomHeader";
import CustomSider from "./CustomSider";

const HomePage = ({children}) => {


  return (
    <>
      <CustomHeader />
      <div  className="">
        <div id="sider-col">
          <CustomSider/>

        </div>
        <div className="chat-col">
          {children}

        </div>
      </div>
     
      {/* <div onClick={() => handleClick()}>Logout</div> */}
    </>
  );
};

export default HomePage;
