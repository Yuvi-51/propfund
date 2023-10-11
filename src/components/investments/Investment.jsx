"use client";
import React from "react";
import "./Investment.scss";
import { useState } from "react";
import OtherPropertyCard from "../reusable/other_property_card/OtherPropertyCard.jsx";

const Investment = () => {
  return (
    <div className="opportunity ">
      <div className="main">
        <h2 className="properties_tag">Properties</h2>
        <div className="row">
          <div className="toggle-btns">
            <div className="switch">
              <input
                id="switch-y"
                name="tripple"
                type="radio"
                defaultValue="Y"
                className="switch-input"
              />
              <label htmlFor="switch-y" className="switch-label switch-label-y">
                New Listing
              </label>
              <input
                id="switch-i"
                name="tripple"
                type="radio"
                defaultValue="I"
                className="switch-input"
                defaultChecked=""
              />
              <label htmlFor="switch-i" className="switch-label switch-label-i">
                Fully Funded
              </label>
              <input
                id="switch-n"
                name="tripple"
                type="radio"
                defaultValue="N"
                className="switch-input"
              />
              <label htmlFor="switch-n" className="switch-label switch-label-n">
                {/* Upcoming Opportunities */}
                Upcoming
              </label>
              <span className="switch-selector" />
            </div>
          </div>
        </div>
      </div>

      <div className="property_card_investor">
        {/* <PropertyCard /> */}
        <OtherPropertyCard />
      </div>
    </div>
  );
};

export default Investment;
