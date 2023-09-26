"use client";
import React from "react";
import "./style.scss";
import PhoneInput from "react-phone-input-2";
import GoogleAuth from "./GoogleAuth";

const login = () => {
  return (
    <div className="register">
      <form className="login_div ">
        <div className="main_div">
          <div className="heading">Log in</div>
          <div className="info">
            Don′t have an account?{" "}
            <a href="/register" style={{ cursor: "pointer" }}>
              Register here.
            </a>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone*</label>
            <PhoneInput
              countryCodeEditable={false}
              country={"in"}
              placeholder="10 Digit phone number"
              value=""
              //   onChange={handleChange}
            />
          </div>
          <button type="submit" className="send_otp">
            Send Otp
          </button>
          <div className="form-group d-none">
            <label htmlFor="exampleInputPassword1">OTP*</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Otp"
            />
          </div>
          <button type="submit" className="send_otp d-none">
            Continue
          </button>
          <div className="or">OR</div>
          <div className="google_login">
            <GoogleAuth />
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
