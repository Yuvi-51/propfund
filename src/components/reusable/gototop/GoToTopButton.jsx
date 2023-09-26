// components/GoToTopButton.js
"use client";

import React, { useEffect, useState } from "react";
import "./GoToTopButton.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button onClick={scrollToTop} className="go-to-top-button">
       <KeyboardArrowUpIcon/>
      </button>
    )
  );
};

export default GoToTopButton;
