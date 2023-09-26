"use client"
import React from "react";
import Login from "@/components/auth/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const page = () => {
  return (
    <div>
      <GoogleOAuthProvider>
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
};

export default page;
