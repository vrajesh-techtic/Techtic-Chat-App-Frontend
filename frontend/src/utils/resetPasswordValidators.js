import * as Yup from 'yup';

export const customResetPasswordValidator = ()=>Yup.object({
    currPassword: Yup.string()
    .min(7)
    .trim(true)
    .required("Current Password is required*")
    .test(
      "no-spaces",
      "Password should not contain only spaces",
      (value) => !/^\s+$/.test(value)
  ).label("Current Password"),
    password:  Yup.string()
    .min(7)
    .trim(true)
    .required("New Password is required*")
    .test(
      "no-spaces",
      "Password should not contain only spaces",
      (value) => !/^\s+$/.test(value)
  ),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password and Confirm Password not matched")
    .required("Confirm Password is required")
    .test(
      "no-spaces",
      "Confirm Password should not contain spaces",
      (value) => !/^\s+$/.test(value)
  )
  .label("Confirm Password")
})