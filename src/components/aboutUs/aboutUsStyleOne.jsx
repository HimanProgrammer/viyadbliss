import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { useState } from "react";
function AboutUsStyleOne({ sectionSpace }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="X7R-q9rsrtU"
        onClose={() => setOpen(false)}
      />
      <div className={`ltn__about-us-area ${sectionSpace}`}>
        <Container>
          <Row>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-imge"></div>
              <div className="about-us-img-wrap about-img-left">
                <img src="/img/others/7.jpg" alt="About Us Image" />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  {/* <div className="ltn__video-img ltn__animation-pulse1">
                    <img src="/img/others/8.png" alt="video popup bg image" />
                    <button
                      onClick={() => setOpen(true)}
                      className="ltn__video-icon-2"
                    >
                      <FaPlay />
                    </button>
                  </div> */}
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} className="align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    Where Tradition Meets Modernity<span>.</span>
                  </h1>
                  <p> At Viyad Bliss, we blend traditional Konkan beauty with modern infrastructure. Located in the serene surroundings of Dapoli, 
                      this NA plot project offers a peaceful lifestyle surrounded by nature.Our thoughtfully planned layout includes internal roads, 
                      plantation, and well-demarcated plots designed for comfort and long-term value. Whether you’re looking for a weekend home, a retirement 
                      retreat, or a smart investment — Viyad Bliss offers the perfect opportunity.
                  </p>
                </div>

                                 <ul className="ltn__list-item-half clearfix">
                  <h2> A Vision of Excellence </h2>
                  <li>
                    <i className="flaticon-home-2"></i>
                    NA Plots (Non-Agricultural)
                  </li>
                  <li>
                    <i className="flaticon-mountain"></i>
                    Clear Title Property
                  </li>
                  <li>
                    <i className="flaticon-heart"></i>
                    Internal Roads & Infrastructure
                  </li>
                  <li>
                    <i className="flaticon-secure"></i>
                    Surrounded by Nature
                  </li>
                                    <li>
                    <i className="flaticon-secure"></i>
                    Ideal for Investment & Second Homes
                  </li>
                </ul>
                {/* <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    Enimad minim veniam quis nostrud exercitation <br />
                    llamco laboris. Lorem ipsum dolor sit amet
                  </p>
                </div> */}
                <div className="btn-wrapper animated">
                  <Link
                    href="/service"
                    className="theme-btn-1 btn btn-effect-1"
                  >
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutUsStyleOne;
