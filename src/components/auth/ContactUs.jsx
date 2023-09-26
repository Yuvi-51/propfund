"use client"
import React from "react";
import "./style.scss";
import PhoneInput from "react-phone-input-2";
const ContactUs = () => {
  return  <div className="register">
  <form className="login_div ">
    <div className="main_div">
      <div className="ask_a_question">Ask a Question</div>
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
      <div className="form-group" style={{marginTop:"20px"}}>
        <label htmlFor="exampleInputEmail1">Subject*</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Write a Subject"
        />
      </div>
      <div className="form-group" style={{marginTop:"20px"}}>
        <label htmlFor="exampleInputEmail1">Message*</label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Write Message"
          style={{height:"150px"}}
        />
      </div>
      <button type="submit" className="send_otp">
        Ask Now
      </button>


    </div>
  </form>
</div>
};

export default ContactUs;
