//EditUserProfile.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../components/HomePage";
import axios from "axios";
import WithAuth from "../routerProtector/WithAuth";
import { useFormik } from "formik";
import { customEditProfileValidation } from "../utils/editProfileValidator";
import CustomEditProfileLayout from "../components/CustomEditProfileLayout";
import notificationProvider from "../utils/notificationProvider";
import { saveUserProfile } from "../redux-toolkit-persist/slice/userSlice";
import { useNavigate } from "react-router-dom";

const EditUserProfile = () => {
  const { contextHolder, openNotification } = notificationProvider();
  const userProfileData = useSelector((state) => state.userObj);
  // console.log("profile pic -->", userProfileData.profilePic);
  //   const [image, setImage] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [isUploadImage, setIsUploadImage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const callCountryCode = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/get-country-codes"
      );
      if (response.status) {
        setCountryData(response.data.data);
        return;
      }
    } catch (error) {
      console.log("Error in catch -->", error);
      return;
    }
  };

  useEffect(() => {
    callCountryCode();
  }, []);

  const initialValues = {
    name: userProfileData.name,
    username: userProfileData.username,
    phoneNumber: userProfileData.phoneNumber,
    profilePic: userProfileData.profilePic,
    gender: userProfileData.gender,
    countryCode: userProfileData.countryCode,
    dob: userProfileData.dob,
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    values,
    setValues,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: customEditProfileValidation,
    onSubmit: async (values) => {
      try {
        const formData = {
          name: values.name,
          username: values.username,
          phoneNumber: values.phoneNumber,
          profilePic: values.profilePic,
          gender: values.gender,
          countryCode: values.countryCode,
          dob: values.dob,
        };

        console.log("formData -->", formData);

        const response = await axios.post(
          `http://localhost:5000/api/user/update-user`,
          formData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.data.status) {
          dispatch(saveUserProfile(response.data.data));
          // navigate("/");
          openNotification(response.data.message, "success");
          setIsUploadImage(false);
          // console.log("Response -->", response);
        }
      } catch (error) {
        console.log("Error in edit user profile page -->", error);
        openNotification(error.message, "error");
        return;
      }
    },
  });

  return (
    <>
      <HomePage>
        {contextHolder}
        {/* ------- Edit profile form --------*/}
        <CustomEditProfileLayout
          userProfileData={userProfileData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          setValues={setValues}
          errors={errors}
          touched={touched}
          values={values}
          countryData={countryData}
          handleSubmit={handleSubmit}
          isUploadImage={isUploadImage}
          setIsUploadImage={setIsUploadImage}
        />
      </HomePage>
    </>
  );
};

export default WithAuth(EditUserProfile);
