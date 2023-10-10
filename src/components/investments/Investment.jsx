"use client";
import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PropertyCard from "../reusable/PropertyCard.jsx";
import "./Investment.scss";
import { makeStyles } from "@material-ui/core/styles"; // Corrected import
import { useState } from "react";
import OtherPropertyCard from "../reusable/other_property_card/OtherPropertyCard.jsx";

const useStyles = makeStyles((theme) => ({
  toggleButtonGroup: {
    display: "flex",
    justifyContent: "center",
    // border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "6px",
  },
  toggleButton: {
    "&.Mui-selected": {
      backgroundColor: "#f3bd70",
      color: "black", // Change text color when selected if
      border: "1px solid #f3bd70",
      borderRadius: "6px",
    },
  },
}));

const Investment = () => {
  const [alignment, setAlignment] = useState("New Listing");
  const classes = useStyles();

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <div className="opportunity container">
      <ToggleButtonGroup
        className={classes.toggleButtonGroup}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton className={classes.toggleButton} value="New Listing">
          New Listing
        </ToggleButton>
        <ToggleButton className={classes.toggleButton} value="Fully Funded">
          Fully Funded
        </ToggleButton>
        <ToggleButton
          className={classes.toggleButton}
          value="Upcoming Opportunities"
        >
          Upcoming Opportunities
        </ToggleButton>
      </ToggleButtonGroup>

      <div className="property_card_investor">
        {/* <PropertyCard /> */}
        <OtherPropertyCard/>
      </div>
    </div>
  );
};

export default Investment;
