import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ChatLayout from "./pages/ChatLayout";
import EditUserProfile from "./pages/EditUserProfile";
import UserChatUI from "./components/UserChatUI";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<ChatLayout />} /> */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<UserChatUI />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/edit-user-profile" element={<EditUserProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </>
  );
}

export default App;
