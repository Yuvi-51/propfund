"use client";
import React, { useEffect, useState } from "react";
import "./Header.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collaps, setcollaps] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMore = () => {
    setcollaps(!collaps);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="header">
      {/* app Logo */}
      <Link href="/">
        <img className="logo" src="/favicon.svg" />
      </Link>
      {/* navbar */}
      <div className="header_nav">
        <div className="header_sub_nav">
          <Link href="/properties">Investments</Link>
          <Link href="/about_us">About Us</Link>
          <Link href="/contact_us">Contact Us</Link>
          <span className="collapsible-menu_nav">
            <a onClick={toggleMore}>
              More{" "}
              {collaps ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </a>
            {collaps && (
              <span className="menu_content_nav">
                <Link href="/how_it_works" className="sub_content_nav">
                  How It Works
                </Link>
                <Link href="" className="sub_content_nav">
                  Our Blogs
                </Link>
              </span>
            )}
          </span>
        </div>
        {/* navbar buttons */}
        <div className="header_btns">
          <Link className="join_now" href="/login">
            Login
          </Link>
          <Link className="join_now" href="/register">
            Join Now
          </Link>
        </div>
      </div>
      {/* hamburger menu */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <div className={`bar ${isOpen ? "open" : ""}`} />
        <div className={`bar ${isOpen ? "open" : ""}`} />
      </button>
      <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
        <div className="nav-content">
          <Link href="/properties" onClick={toggleMenu}>
            Investments
          </Link>
          <Link href="/about_us" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/contact_us" onClick={toggleMenu}>
            Contact Us
          </Link>
          <span className="collapsible-menu">
            <a onClick={toggleMore}>
              More{" "}
              {collaps ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </a>
            {collaps && (
              <span className="menu_content">
                <Link
                  href="/how_it_works"
                  className="sub_content"
                  onClick={() => {
                    toggleMenu();
                    toggleMore();
                  }}
                >
                  How It Works
                </Link>
                <Link
                  href=""
                  className="sub_content"
                  onClick={() => {
                    toggleMenu();
                    toggleMore();
                  }}
                >
                  Our Blogs
                </Link>
              </span>
            )}
          </span>
          <Link href="/login" onClick={toggleMenu}>
            Login
          </Link>
          <Link href="/register" onClick={toggleMenu}>
            Join Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
