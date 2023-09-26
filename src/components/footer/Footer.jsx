import "./Footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <footer className="footer-div ">
          <div className=" footer">
            <div className="row w-100">
              <div className="col-md-4">
                <div className="f-header">
                  <h1 className="c-name">
                    PropFund <small className="sm-name">Pvt.Ltd.</small>
                  </h1>
                  <h2 className="c-details">
                    A leading platform offering the ability to invest and grow
                    wealth through secured investments.
                  </h2>
                  <p className="address">
                    Address: 3, Empire, Lokhandwala Complex, Andheri (West),
                    Mumbai 400053 <br /> Contact: +91 8104963233{" "}
                  </p>
                  <div className="icon-container">
                    <div className="icon-header">Follow Us :</div>
                    <div className="footer-icons">
                      <Link href="/" target="_blank">
                        <FacebookIcon />
                      </Link>
                      <Link href="/" target="_blank">
                        <LinkedInIcon />
                      </Link>
                      <Link href="/" target="_blank">
                        <InstagramIcon />
                      </Link>
                      <Link href="/" target="_blank">
                        <TwitterIcon />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 footer_content">
                <div className="home-btn">
                  {/* <h3>QUICK LINKS</h3>
              <a href="/">
                <h5 className="text">Home</h5>
              </a>
              <h5 className="text">Our Blogs</h5> */}

                  <h3>Useful Links</h3>
                  <h5 className="text">Content</h5>
                  <h5 className="text">How it Works </h5>
                  <h5 className="text">Create </h5>
                  <h5 className="text">Explore </h5>
                  <h5 className="text">Terms & Services </h5>
                  {/* <h3>Contact Us</h3>
              <h5 className="text">contact@propviewz.com</h5> */}
                </div>
                <div className="home-btn">
                  <h3>Community</h3>
                  <h5 className="text">Help Center</h5>
                  <h5 className="text">Partners </h5>
                  <h5 className="text">Suggestions </h5>
                  <h5 className="text">Blog </h5>
                  <h5 className="text">News letters </h5>
                </div>
                <div className="home-btn">
                  <h3>Partners</h3>
                  <h5 className="text">Our Partner </h5>
                  <h5 className="text">Become a Partner </h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 f-header-down">
              <h1 className="c-name">
                PropFund <small className="sm-name">Pvt.Ltd.</small>
              </h1>
              <h2 className="c-details">
                A leading platform offering the ability to invest and grow
                wealth through secured investments.
              </h2>
              <p className="address">
                Address: 3, Empire, Lokhandwala Complex, Andheri (West), Mumbai
                400053 <br /> Contact: +91 8104963233{" "}
              </p>
              <div className="icon-container">
                <div className="icon-header">Follow Us :</div>
                <div className="footer-icons">
                  <Link href="/" target="_blank">
                    <FacebookIcon />
                  </Link>
                  <Link href="/" target="_blank">
                    <LinkedInIcon />
                  </Link>
                  <Link href="/" target="_blank">
                    <InstagramIcon />
                  </Link>
                  <Link href="/" target="_blank">
                    <TwitterIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-para">
            <p>Copyright © Propfund</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
