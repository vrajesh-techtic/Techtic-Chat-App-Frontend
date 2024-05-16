import React, { useState } from "react";
import { Divider } from "antd";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import HomePage from "../components/HomePage";
import WithAuth from "../routerProtector/WithAuth";
import { useFormik } from "formik";
import { customResetPasswordValidator } from "../utils/resetPasswordValidators";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import notificationProvider from "../utils/notificationProvider";

const ResetPassword = () => {
  const { openNotification, contextHolder } = notificationProvider();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    currPassword: "",
    password: "",
    confirmPassword: "",
  };
  const { errors, values, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: customResetPasswordValidator,
      onSubmit: async (values) => {
        try {
          // const formData = new FormData();
          const formData = {
            currPassword: values?.currPassword,
            password: values?.password,
            confirmPassword: values?.confirmPassword,
          };

          console.log("signup formData -->", formData);

          const response = await axios.post(
            `http://localhost:5000/api/user/reset-password`,
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          if (response.data.status == true) {
            openNotification(response.data.message, "success");
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              navigate("/");
            }, 1000);
            return;
          }
          if (response.data.status == false) {
            setLoading(false);
            openNotification(response.data.error, "error");
            return;
          }
        } catch (error) {
          console.log("Error in signup -->", error);
          setLoading(false);
          openNotification(error.response.data.error, "error");
          return;
        }
      },
    });
  return (
    <HomePage>
      {contextHolder}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[7%] bg-white w-[35%] z-10 shadow-xl  p-[2%] mx-auto rounded-lg"
      >
        <div className="text-center font-bold text-xl text-zinc-500">
          Reset Password
        </div>
        <Divider style={{ border: "1px solid #e5e7eb" }} className="my-2" />
        <CustomInput
          type="password"
          placeholder="Enter the current password"
          label="Current Password:"
          name="currPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.currPassword}
          errors={errors.currPassword}
          touched={touched.currPassword}
        />
        <CustomInput
          type="password"
          placeholder="Enter the new password"
          label="New Password:"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.password}
          value={values.password}
          touched={touched.password}
        />
        <CustomInput
          type="password"
          placeholder="Enter the confirm new password"
          label="Confirm New Password:"
          name="confirmPassword"
          onChange={handleChange}
          onBlur={handleBlur}
          errors={errors.confirmPassword}
          value={values.confirmPassword}
          touched={touched.confirmPassword}
        />
        <CustomButton
          className=" p-[1.5%] mt-[2%] w-[100%] shadow-xl  rounded-lg text-center bg-green-400 text-white text-lg font-semibold"
          text={loading ? "Redirecting to Home..." : "Submit Password"}
        />
      </form>
    </HomePage>
  );
};

export default WithAuth(ResetPassword);
