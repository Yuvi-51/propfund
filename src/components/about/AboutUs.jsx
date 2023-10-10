import InfoCard from "../reusable/infocard/InfoCard";
import "./AbputUs.scss";
const AboutUs = () => {
  return (
    <div className="about container">
      <div className="heading_div">About Us</div>
      {/* <div className="sub_para">
        Built by a Diverse Team With Deep Expertise in Investing
      </div>
      <div className="third_para">
        We′re on a mission to build a better financial system by empowering the
        individual.
      </div> */}
      <div className="about_data">
        {/* <div className="vision_div">
            <div className="text_center">------</div>
            <div className="vision_heading">VISION</div>
            <div className="text_data">
              To be the largest and most reliable investment platform in India.
              We′re committed to providing a transparent, secure & easiest way
              to grow wealth.
            </div>
          </div> */}
        <div className="mission_div">
          <div className="text_center">------</div>
          <div className="vision_heading">MISSION</div>
          <div className="text_data">
            Prop Fund is an investment platform for non-market linked
            alternative investment opportunities. We′re focussed on wealth
            creation through securitization of assets.
          </div>
        </div>
      </div>
      <div className="info_card">
        <div className="heading_div">Our Team</div>

        <InfoCard />
        <div className="market__area row">
          <div className=" col-md-6">
            <div className="content">You Invest. Propfund Does the Rest</div>
            <div className="content_para">
              Secured Investments through Propfund. Join us and experience a
              smarter,better way to grow your wealth
            </div>

            <div className="d-flex align-items-center justify-content-center w-100">
              {" "}
              <div className="start_exploring">Start Exploring</div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="/about_us.jpg" className="about_us_imgae" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
