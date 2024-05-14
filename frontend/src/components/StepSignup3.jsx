import React, { useEffect, useState } from "react";
import CustomInput from "./CustomInput";
import axios from "axios";

const StepSignup3 = ({ handleChange, handleBlur, errors, touched, values, setValues }) => {
  const [countryData, setCountryData] = useState([]);
  
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

  const imageChange = (e) => {
        // console.log("file length -->", e.target.files.length);
          setValues((prev) => {
            let newObj = { ...prev };
            newObj["profilePic"] = e.target.files[0];
            return newObj;
          });
  };


  useEffect(()=>{
    callCountryCode();
  },[])

  return (
    <>
      <CustomInput
        onChange={handleChange}
        onBlur={handleBlur}
        errors={errors.phoneNumber}
        touched={touched.phoneNumber}
        value={values.phoneNumber}
        dropdown_value={values.countryCode}
        default_select_value="country code"
        type="number"
        countryData={countryData}
        dropdown_name="countryCode"
        dropdown_error={errors.countryCode}
        dropdown_touched={touched.countryCode}
        dropdown_onChange={handleChange}
        dropdown_onBlur={handleBlur}
        placeholder="Enter the phone number"
        label="Phone Number:"
        name="phoneNumber"
      />
      <CustomInput
        onChange={imageChange}
        onBlur={handleBlur}
        type="file"
        accept="image/*"
        label="Upload your profile picture"
        name="profilePic"
        optionalLabel='(Optional)'
      />
    </>
  );
};

export default StepSignup3;
