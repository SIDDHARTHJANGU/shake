import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_logo from "../assets/img/footer_logo.png";
import { Facebook, In, Insta, Telegram, Twtter } from "./Mysvg";

const Footer = () => {
  return (
    <div className=" footer_bg pt-lg-5 pb-lg-5 footer_bcg  ">
      <Container className=" custom_cuntainer pt-lg-5 pb-lg-5 mt-lg-5 ">
        <Row className=" d-flex justify-content-between align-items-center pt-lg-5  mt-lg-5 pb-5">
          <Col lg={5} className=" pt-lg-5 pb-lg-5">
            <img src={footer_logo} alt=" footer_logo" />
            <p className=" fw_300 fs_16 text-white font_Neue mt-4">
              Rutrum mauris vitae at vitae augue placerat arcu in. Vel in
              <span className=" d-lg-block">
                elementum tempor enim accumsan enim a magna at.
              </span>{" "}
              Dolor lorem nisi dignissim nulla.
            </p>
            <div className=" mt-4">
              <a href="https://www.facebook.com/">
                {" "}
                <Facebook />
              </a>
              <a href="https://twitter.com/?lang=en">
                {" "}
                <Twtter />
              </a>
              <a href="https://www.instagram.com/?hl=en">
                {" "}
                <Insta />
              </a>
              <a href="https://in.linkedin.com/">
                {" "}
                <In />
              </a>
              <a href="https://web.telegram.org/a/">
                {" "}
                <Telegram />
              </a>
            </div>
          </Col>
          <Col lg={5}>
            <Row className=" d-flex justify-content-between pt-5 ">
              <Col sm={5} className=" d-flex justify-content-lg-end">
                <ul>
                  <li className=" fw_500 fs_16 font_helvetica text-white mb-4">
                    Important Links
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="About"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="Features"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="Pricing"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="Work"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      How It Work
                    </a>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="Features"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      New Features
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={5} className=" d-flex justify-lg-content-end ">
                <ul>
                  <li className=" fw_500 fs_16 font_helvetica text-white mb-4">
                    Other Links
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="Testimonials"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="FAQs"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="mb-2">
                    {" "}
                    <a
                      href="Contact"
                      className=" fw_300 fs_16 font_Neue text-white  line_3 position-relative"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className=" footer_line  "></div>
      <p className=" fw_300 fs_16 font_Neue text-white text-center py-4  ">
        Made with Powered by Petstar - DOG GROOMING BUSINESSES & PET SERVICES
      </p>
    </div>
  );
};

export default Footer;
