import React, { useState } from 'react'
import { Divider } from 'antd'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import HomePage from '../components/HomePage'
import WithAuth from '../routerProtector/WithAuth'
import { useFormik } from 'formik'
import { customResetPasswordValidator } from '../utils/resetPasswordValidators'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import notificationProvider from '../utils/notificationProvider'
const { contextHolder, openNotification } = notificationProvider();

const ResetPassword = () => {  
    // const navigate = useNavigate();
    // const [loading, setLoading] = useState(false);

    // const initialValues = {
    //     currPassword: "",
    //     password: "",
    //     confirmPassword: ""
    // }
    // const {handleBlur, handleChange, errors, touched, values, handleSubmit} = useFormik(
    //     {
    //         initialValues: initialValues,
    //         validationSchema: customResetPasswordValidator,
    //         onsubmit: async(values)=>{
    //             try {
    //                 // const formData = new FormData();
    //                 const formData = {
    //                   currPassword: values?.currPassword,
    //                   password: values?.password,
    //                   confirmPassword: values?.confirmPassword
    //                 };
            
    //                 console.log("signup formData -->", formData);
            
    //                 const response = await axios.post(
    //                   `http://localhost:5000/api/user/reset-password`,
    //                   formData,
    //                   {
    //                     headers: {
    //                       "Content-Type": "application/json",
    //                     },
    //                     withCredentials: true,
    //                   }
    //                 );
                    
    //                 if (response.data.status == true) {
    //                   navigate("/");
    //                   openNotification(response.data.message, "success");
    //                   return;
    //                 }
    //                 if (response.data.status == false) {
    //                   openNotification(response.data.error, "error");
    //                   return;
    //                 }
    //               } catch (error) {
    //                 console.log("Error in signup -->", error);
    //                 openNotification(error.response.data.error, "error");
    //                 return;
    //               }
    //         }
    //     }
    // )
  return (
    <HomePage>
        {/* {contextHolder} */}
    {/* <form  onSubmit={handleSubmit} className="flex flex-col bg-white w-[35%] z-10 shadow-xl  p-[2%] mx-auto rounded-lg">
      <div className="text-center font-bold text-xl text-zinc-500">Forgot Password</div>
        <Divider style={{ border: "1px solid #e5e7eb" }} className="my-2" />
        <CustomInput
              type="text"
              placeholder="Enter the current password"
              label="Current Password:"
              name="currPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.currPassword}
              errors={errors.currPassword}
            />
        <CustomInput
              type="text"
              placeholder="Enter the new password"
              label="New Password:"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.password}
              value={values.password}
            />
        <CustomInput
              type="text"
              placeholder="Enter the confirm new password"
              label="Confirm New Password:"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.confirmPassword}
              value={values.confirmPassword}
            />
            <CustomButton className=" p-[1.5%] mt-[2%] w-[100%] shadow-xl  rounded-lg text-center bg-green-400 text-white text-lg font-semibold"
              text={"Submit Password"}/>
      </form> */}
      </HomePage>
  )
}

export default WithAuth(ResetPassword)
