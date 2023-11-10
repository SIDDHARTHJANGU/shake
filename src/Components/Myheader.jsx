import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import nav_logo from "../assets/img/Nav_logo.png";
import hero from "../assets/img/phone.png";
import tick from "../assets/img/tick.png";
import man from "../assets/img/man.png";
import { useState } from "react";
import menu from "../assets/img/menu.svg";
import close from "../assets/img/close.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Myheader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [show, setshow] = useState(false);
  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div id="Home" className="hero_bg min_vh_100 d-flex flex-column ">
      <nav className=" py-3">
        <Container className=" d-flex  align-items-center justify-content-between custom_cuntainer">
          <div>
            <img className=" nava_log" src={nav_logo} alt="" />
          </div>
          <div className=" d-flex align-items-center gap_29 ">
            <ul className={show ? "open" : ""}>
              <li>
                <a
                  href="#Home"
                  className=" fs_16 fw_500  text-white font_Neue line_3 position-relative"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#Features"
                  className=" fs_16 fw_500  text-white font_Neue line_3 position-relative"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#Pricing"
                  className=" fs_16 fw_500  text-white font_Neue line_3 position-relative"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#Free"
                  className=" fs_16 fw_500  text-white font_Neue line_3 position-relative"
                >
                  Free Trial
                </a>
              </li>
              <button className=" Sign_btn fs_20 fw_400 font_Roboto text-white">
                Sign In
              </button>
            </ul>
            <div
              className=" position-relative z-3 d-lg-none"
              onClick={() => {
                setshow(!show);
              }}
            >
              {show ? <img src={close} alt="#" /> : <img src={menu} alt="#" />}
            </div>

            <div></div>
          </div>
        </Container>
      </nav>
      <div className=" flex-grow-1 d-lg-flex  ">
        <Container className=" custom_cuntainer">
          <Row className=" align-items-center d-lg-flex justify-content-between text-center text-lg-start">
            <Col lg={6} className="">
              <div data-aos="fade-down-right">
                <h1 className=" fs_80  fw_700 font_Roboto text-white">
                  Smart, Simple Software
                </h1>
                <p className=" fs_20 fw_500 text-white font_Neue ">
                  Dog Grooming Software, helping to reduce 'no{" "}
                  <span className=" d-lg-block">
                    shows' with appointment confirmations, reminders &
                  </span>{" "}
                  more.
                </p>
                <div className=" mt-lg-5 mt-3">
                  <button className=" Sign_btn fs_20 fw_400 font_Roboto text-white">
                    Free Trial
                  </button>
                  <button className=" Explor_btn fs_20 fw_400 font_Roboto text-white ms-3">
                    Explore More
                  </button>
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              className=" d-flex justify-content-center   "
              data-aos="fade-down-left"
            >
              <div className="position-relative hero_img">
                <div className="hero_card py-3  ">
                  <div className=" d-flex align-items-center justify-content-center">
                    <img src={tick} alt="" />
                    <div className=" ms-2">
                      <p className="fs_12 fw_700 text-black font_Neue">
                        Theresa Webb
                      </p>
                      <p className="fs_8 fw_300 font_Neue text-black">CEO</p>
                    </div>
                  </div>
                </div>
                <div className="hero_card2 py-3   ">
                  <div className=" d-flex align-items-center justify-content-center">
                    <img src={man} alt="" />
                    <div className=" ms-2">
                      <p className="fs_12 fw_700 text-black font_Neue">
                        Esther Howard
                      </p>
                      <p className="fs_8 fw_300 font_Neue text-black">
                        Manager
                      </p>
                    </div>
                  </div>
                </div>
                <img className=" w-100 mt-4 mt-lg-0  " src={hero} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Myheader;
