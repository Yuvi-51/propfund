"use client";
import SignUp from "@/components/auth/SignUp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const page = () => {
  return (
    <div>
      <GoogleOAuthProvider>
        <SignUp />
      </GoogleOAuthProvider>
    </div>
  );
};

export default page;
