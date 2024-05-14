import React, { useState } from "react";
import CustomSignupLoginHeader from "../components/CustomSignupLoginHeader";
import { Divider } from "antd";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import axios from "axios";
import notificationProvider from "../utils/notificationProvider";
import { Link, useNavigate } from "react-router-dom";
import WithoutAuth from "../routerProtector/WithoutAuth";
const ForgotPassword = () => {
    const [email, setEmail] = useState({email: ""});
    const { contextHolder, openNotification } = notificationProvider();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleEmail=(e) =>{
        // console.log(e.target.value);
        // setEmail(e.target.value);
        const {name, value} = e.target;
        setEmail({...email, [name]: value});
    }
    const submitEmail = async(e)=>{
        
        try {
            e.preventDefault();
            console.log("email -->", email);
            const response = await axios.post("http://localhost:5000/api/user/send-forgot-password-email", 
            email,
        {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        console.log("response --> ", response);
        if(response.data.status == true){
            setLoading(true);
            openNotification(response.data.message, "success");
            setTimeout(()=>{
            navigate("/login");
            setLoading(false);
            }, 1700)
        }
        if(response.data.succes == false){
            openNotification(response.data.message, "error");
            setLoading(false);
        }
        } catch (error) {
            console.log("Error in forgot password catch -->", error);
            openNotification(error.response.data.message || error.response.data.error, "error");
            setLoading(false);
        }
       

    }
  return ( 
    <>
          <CustomSignupLoginHeader />
    {contextHolder}

      <form className="flex flex-col mt-[-5%] bg-white w-[35%] z-10 shadow-xl  p-[2%] mx-auto rounded-lg">
      <div className="text-center font-bold text-xl text-zinc-500">Forgot Password</div>
        <Divider style={{ border: "1px solid #e5e7eb" }} className="my-2" />
        <CustomInput
              onChange={handleEmail}
              type="text"
              placeholder="Enter the email"
              label="Email:"
              name="email"
              value={email.email}
            />
            <CustomButton onClick={(e)=>submitEmail(e)} className=" p-[1.5%] mt-[2%] w-[100%] shadow-xl  rounded-lg text-center bg-green-400 text-white text-lg font-semibold"
              text={loading ? "Redirecting to Login..." : "Submit Password"}/>
              <Link to={"/login"} className="text-sm font-semibold text-slate-500 mt-[2%]">Back to Login</Link>
      </form>
    </>
  );
};

export default WithoutAuth(ForgotPassword);
