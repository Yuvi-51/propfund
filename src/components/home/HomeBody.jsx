"use client";
import React, { useEffect, useState } from "react";
import "./HomeBody.scss";
import CountUp from "react-countup";
import StarIcon from "@mui/icons-material/Star";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import PropertyCard from "../reusable/PropertyCard.jsx";
import Calculator from "../reusable/calculator/Calculator";

const HomeBody = () => {
  const [isMobile, setIsMobile] = useState(false);
  const words = ["Easier", "Profitable", "Smarter"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const rotateWords = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };
    const intervalId = setInterval(rotateWords, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const data = [
    {
      id: 1,
      title: "Best One",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
      name: "Sham Sharma",
      post: "developer",
    },
    {
      id: 2,
      title: "Nice Great",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
      image: "public/projectImage.jpg",
      name: "Varun Dhavan",
      post: "developer",
    },
    {
      id: 3,
      title: "Nice ",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
      image: "public/projectImage.jpg",
      name: " Dhavan",
      post: "developer",
    },
    {
      id: 4,
      title: " Great",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
      image: "public/projectImage.jpg",
      name: "Varun ",
      post: "developer",
    },
  ];
  useEffect(() => {
    setIsMobile(window.innerWidth < 800);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    autoplay: true,
    speed: 500,
  };
  return (
    <>
      <div className="hero_background">
        <div className="home_div container">
          <div className="hero_content ">
            <div className="hero_floating_words ">
              {words[currentWordIndex]}
            </div>
            <div className="hero_line">way to invest in Real Estate</div>
            <div className="hero_para">
              Start growing your passive income today.
            </div>
          </div>
          <div className="mobile_img_mobile">
            <img
              src="/propfund mobile.jpeg"
              alt="img"
              className="mobile_image"
            />
          </div>
        </div>
      </div>
      <div className="counters ">
        <div className="counter_box">
          <div className="sub_counter">
            <CountUp
              end={10}
              style={{
                color: "black",
                fontSize: 40,
                fontWeight: "bold",
              }}
            />
            <p className="counter_extension">Lacs</p>
          </div>
          <div className="counter_text">Minimum Investment</div>
        </div>

        <div className="counter_box">
          <div className="sub_counter">
            <CountUp
              end={19}
              style={{
                color: "black",
                fontSize: 40,
                fontWeight: "bold",
              }}
            />
            <p className="counter_extension">%</p>
          </div>
          <div className="counter_text">Expected IRR</div>
        </div>
        <div className="counter_box">
          <div className="sub_counter">
            <CountUp
              end={500}
              style={{
                color: "black",
                fontSize: 40,
                fontWeight: "bold",
              }}
            />

            <p className="counter_extension">Cr</p>
          </div>
          <div className="counter_text">AUM</div>
        </div>
      </div>
      <div className="row  video_div container">
        <div className="col-md-6 video_tag">
          <iframe
            className="iframe_tag"
            width="100%"
            height="362"
            src="https://www.youtube.com/embed/t_rbP8YM2Ew"
            title="PROPFUND!!"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          {/* <div className="view_investment_btn">VIEW INVESTMENTS</div> */}
        </div>
        <div className="placeholder_main col-md-6 d-flex flex-column">
          <div className="placeholder_div">
            <div className="icon">
              <StarIcon className="icons" style={{ fontSize: "48px" }} />
            </div>
            <div className="content">
              <h4 className="title">Rewards</h4>
              <p className="info">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </div>
          </div>
          <div className="placeholder_div">
            <div className="icon">
              <SecurityRoundedIcon
                className="icons"
                style={{ fontSize: "48px" }}
              />
            </div>
            <div className="content">
              <h4 className="title">100% Secured</h4>
              <p className="info">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </div>
          </div>
          <div className="placeholder_div">
            <div className="icon">
              <NearMeRoundedIcon
                className="icons"
                style={{ fontSize: "48px" }}
              />
            </div>
            <div className="content">
              <h4 className="title">Balance Transfer</h4>
              <p className="info">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="calculator_div">
      <h2>Investment Calculator</h2>
      <Calculator/>
      </div>
      <PropertyCard />
      <div className="container payment_div ">
        <div className="image_div">
          <img
            src="/Payment-Gateway-Invoicing-Image1.webp"
            className="image_1"
            alt="img"
          />
          <img
            src="/Payment-Gateway-Invoicing-Image2.webp"
            className="image_2"
            alt="img"
          />
          <div className="payment_msg">
            <CheckCircleTwoToneIcon style={{ color: "green" }} /> Great! Your
            Payment is succesfully.{" "}
          </div>
        </div>
        <div className="content_div">
          <div className="payment_heading">
            Build an alternate investment <br /> portfolio
          </div>
          <div className="payment_para">
            Investing with Propfund, is similar to investing like an <br />
            institution, with us you don′t have to worry abut <br /> day-to-day
            monitoring & management
          </div>
          <div className="payment_imges">
            <img
              className="apple"
              img="img"
              src="/Payment-Gateway-Invoicing-Apple.webp"
            />
            <img
              className="goggle"
              alt="img"
              src="/Payment-Gateway-Invoicing-Google.webp"
            />
            <span className="comming_soon">COMMING SOON...</span>
          </div>
        </div>
      </div>
      <div className="feedback_main container">
        <Slider className="slider-container" {...sliderSettings}>
          {data.map((data, i) => (
            <div className="feedback_body" key={i}>
              <FormatQuoteIcon className="revert_comma" />
              <h5 className="feedback-title">{data.title}</h5>
              <p className="feedback-info">{data.text}</p>
              <div className="feedback-icon">
                <div>
                  <div className="row">
                    <div className="col-md-3">
                      <img src={data.image} alt="img" />
                    </div>
                    <div className="col-md-7 mt-3">
                      <div className="feedback-name">{data.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HomeBody;
