"use client";
import React from "react";
import "./style.scss";
import GoogleAuth from "./GoogleAuth";
import PhoneInput from "react-phone-input-2";

const SignUp = () => {
  return (
    <div className="register">
      <form className="login_div ">
        <div className="main_div">
          <div className="heading">Registration</div>
          <div className="info">
            Already Registered?{" "}
            <a href="/login" style={{ cursor: "pointer" }}>
              Login.
            </a>
          </div>
          <div className="row" >
            <div className="col-md-6" style={{marginBottom:"20px"}}>
              <label htmlFor="exampleInputEmail1">First Name*</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col-md-6" style={{ marginBottom: "20px" }}>
              <label htmlFor="exampleInputEmail1">Last Name*</label>

              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email*</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
            />
          </div>
          <div className="form-group " style={{ marginTop: "30px" }}>
            <label htmlFor="exampleInputPassword1">Phone*</label>
            <PhoneInput
              countryCodeEditable={false}
              country={"in"}
              placeholder="10 Digit phone number"
              value=""
              //   onChange={handleChange}
            />
          </div>
          <div className="info" style={{ marginTop: "5px" }}>
            By proceeding, you are agreeing to our{" "}
            <a href="/login" style={{ cursor: "pointer" }}>
              {" "}
              Privacy Policy{" "}
            </a>
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
          <button type="submit" className="btn btn-primary d-none">
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

export default SignUp;
