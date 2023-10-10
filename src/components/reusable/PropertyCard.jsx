"use client";
import "./PropertyCard.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const PropertyCard = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  };
  return (
    <div className="property_card_main">
      <Slider className="slider-container" {...sliderSettings}>
        <ul className="property_card ">
          <li className="card">
            <Link
              href="#"
              className="featured-image"
              style={{
                backgroundImage: `url('/projectImage.jpg')`,
              }}
            ></Link>
            <para className="top-right-button">Fully Funded</para>
            <article className="card-body">
              <header>
                <Link href="/">
                  {/* <span className="pre-heading">Blog</span> */}
                  <div className="title">
                    <h3>Fully funded Paramount Industrial Hub Opportunity 2</h3>
                  </div>
                  <p className="meta">
                    <span className="author"> Kudus , Wada</span>
                    <span> | </span>
                    <time
                      className="updated"
                      datetime=""
                      itemprop="datePublished"
                    >
                      July 27, 2017
                    </time>
                  </p>
                  <div className="custom-progress">
                    <div
                      className="custom-progress-inner"
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                  <p className="card_data">
                    ₹ 5,00,00,000 <span>of</span> ₹ 5,00,00,000{" "}
                    <span>funded</span> (100.0%)
                  </p>
                  <p className="hr_line"></p>
                  <div className="investment_data">
                    <div>
                      <p className="sub_title_card">Target IRR</p>
                      <p className="numeric_data">19.0%</p>
                    </div>
                    <div>
                      <p className="sub_title_card">Entry Yield</p>
                      <p className="numeric_data">13.5%</p>
                    </div>
                    <div>
                      <p className="sub_title_card">Min Investment</p>
                      <p className="numeric_data">10,00,000</p>
                    </div>
                    <div>
                      <p className="sub_title_card">Distribution</p>
                      <p className="numeric_data">6 Months</p>
                    </div>
                  </div>
                </Link>
              </header>
              <div className="chips">
                <Link className="chip" href="/properties">
                  View Opportunity
                </Link>
              </div>
            </article>
          </li>
        </ul>
      </Slider>
    </div>
  );
};

export default PropertyCard;
