import React from "react";
import "./HowItsWorks.scss";
const HowItsWorks = () => {
  return (
    <div className="how_it_works container">
      <div className="how_it_works_heading">
        Alternate investments to grow your wealth
      </div>
      <div className="sub_div">
        <div className="key_reason">Key reasons to invest via Profund</div>
        <div className="key_reason_para">
          We′re on a mission to build a better financial system by empowering
          the individual
        </div>
      </div>
      <div className="first_cards">
        <div className="card_data ">
          <img src="/attractive returns.png" alt="img" />
          <p className="content">Attractive returns</p>
          <p className="sub_content">
            Fixed yields of 12% and targeted IRR of 20% in medium term & long
            term investment tenure
          </p>
        </div>
        <div className="card_data ">
          <img src="/Informed decisions.png" alt="img" />
          <p className="content">Informed decisions</p>
          <p className="sub_content">
            All the opportunities goes through stringent selection process
          </p>
        </div>
      </div>
      <div className="second_cards ">
        <div className="second_sub_cards ">
          {" "}
          <img src="/Risk management.png" alt="img" />
          <p className="content">Risk management</p>
          <p className="sub_content">
            All the investment opportunities are secured via real estate leaving
            no or minimal risk
          </p>
        </div>
        <div className="second_sub_cards ">
          <img src="/Diversification.png" alt="img" />
          <p className="content">Diversification</p>
          <p className="sub_content">
            Invest in opportunities across locations and asset types{" "}
          </p>
        </div>
        <div className="second_sub_cards ">
          <img src="/Transparency and security.png" alt="img" />
          <p className="content">Transparency and security</p>
          <p className="sub_content" style={{ marginBottom: "-35px" }}>
            End to end digital process, access to detailed analysis and offer
            documents, and secured by 256-bit SHA encryption standards to ensure
            investor data is safe{" "}
          </p>
        </div>
      </div>
      <div className="main_jpg">
        <div className="main_jpg_content">
          We are an investment platform for non-market-linked alternative
          investment opportunities. We′re focused on wealth creation through the
          securitization of assets.
        </div>
        <img src="/main_jpg.png" alt="img" />
      </div>
      <div>
        <div className="how_it_works_heading" style={{ fontSize: "42px" }}>
          Investing with Propfund is an easy 4 step process
        </div>
        <div className="key_reason_para">
          Signing up with Propfund is simple and only takes a few minutes
        </div>
        <div className="four_steps">
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Invest.png" alt="img" />
              <p className="steps">01</p>
            </p>
            <p>Invest</p>
            <div>Invest in securitized opportunities</div>
          </div>
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Earn.png" alt="img" />
              <p className="steps">02</p>
            </p>
            <p>Earn</p>
            <div>Grow your wealth with higher returns</div>
          </div>
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Track.png" alt="img" />
              <p className="steps">03</p>
            </p>
            <p>Track</p>
            <div>Track investments through the portal</div>
          </div>
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Exit.png" alt="img" />
              <p className="steps">04</p>
            </p>
            <p>Exit</p>
            <div>Exit profitably through various methods</div>
          </div>
        </div>
      </div>
      <div>
        <div className="how_it_works_heading">Opportunity shortlisting</div>
        <div className="key_reason_para">
          - Opportunity shortlisting: All the opportunities go through the
          stringent screening process. Our core team has the over 50 Years of
          experience
        </div>
        <div className="three_steps ">
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Invest.png" alt="img" />
              <p className="steps">01</p>
            </p>
            <p>Due diligence</p>
            <div>
              Our Legal, valuation experts along with auditors do through due
              diligence before any opportunity is offered to you
            </div>
          </div>
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Earn.png" alt="img" />
              <p className="steps">02</p>
            </p>
            <p>Financial analysis</p>
            <div>Deep financial analysis is conducted to give the best IRR</div>
          </div>
          <div>
            <p className="d-flex align-items-center ">
              <img src="/Exit.png" alt="img" />
              <p className="steps">03</p>
            </p>
            <p>Profitable exit</p>
            <div>
              Our experts ensure that we’re with till you have the profitable
              exit from the investment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorks;
