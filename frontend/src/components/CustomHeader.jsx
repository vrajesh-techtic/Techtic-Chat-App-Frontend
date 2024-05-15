import React, { useState } from "react";
import { Avatar, Dropdown, Layout, Menu, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUserProfile } from "../redux-toolkit-persist/slice/userSlice";
const { Header } = Layout;

const CustomHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userObj);
  // console.log("userData pic-->", userData.profilePic);

  const handleSignout = () => {
    localStorage.clear();
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    dispatch(clearUserProfile());
    navigate("/login");
  };
  const editUserProfile = () => {
    navigate("/edit-user-profile");
  };
  const resetPasswordForm=()=>{
    navigate("reset-password")
  }
  console.log("component re");
  const items = [
    {
      label: (
        <div
          className="text-lg font-semibold text-center"
          onClick={()=>editUserProfile()}
        >
          
          Edit Profile
        </div>
      ),
    },
    {
      label: (
        <div className="text-lg font-semibold text-center" onClick={()=>resetPasswordForm()}>
          Reset Password
        </div>
      ),
    },
    {
      label: (
        <div
          className="text-lg font-semibold text-center"
          // to={'/login'}
          onClick={() => handleSignout()}
        >
          Sign Out
        </div>
      ),
    },
  ];



  return (
    <div>
      {/* <Layout> */}
      <Header
        style={{
          display: "flex",
        }}
        className="bg-green-500 text-white items-center justify-between"
      >
        <div
          className="font-bold text-2xl flex flex-col cursor-pointer"
          onClick={()=>navigate("/")}
        >
          Techtic Chat App
        </div>

        <div className="font-bold text-xl flex flex-col">
          <div className="mr-5">
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
              className="flex"
            >
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Space size="small">
                  <Avatar
                    src={`${userData.profilePic}`}
                    className="w-[45px] h-[45px] rounded-full shadow-lg object-cover"
                  />

                  <div className="capitalize font-medium font-poppins leading-6	text-xl hover: text-white">
                    {userData.username}
                  </div>
                  {/* <<AiOutlineDown /> */}
                  <span>
                    <IoIosArrowDown className="hover: text-white" />
                  </span>
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default CustomHeader;
