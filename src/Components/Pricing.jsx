import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tick } from "./Mysvg";
import sky from "../assets/img/sky.png";

const Pricing = () => {
  return (
    <div id="Pricing" className=" pt-5 pb-5 position-relative">
      <div
        className=" position-absolute sky d-none d-sm-block"
        data-aos="fade-right"
      >
        <img src={sky} alt="" />
      </div>
      <Container className=" custom_cuntainer pt-5 pb-5">
        <div className=" text-center" data-aos="fade-down">
          <h2 className=" fw_500 fs_48 font_Roboto text-black">Pricing Plan</h2>
          <p className=" fs_16 fw_300 font_Neue text-black">
            Our Subscriptions, simple, flexible and designed for your business
            needs.
          </p>
          <div className=" d-flex align-items-center justify-content-center gap-3 mt-4">
            <p className=" fw_700 fs_24 text_blue font_Roboto">£ GBP</p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <p className=" fw_400 fs_24 text-black font_Roboto">$ USD</p>
          </div>
        </div>
        <Row className=" mt-5 d-flex justify-content-center ">
          <Col lg={3} sm={6} md={4} className="  ">
            <div
              className="sec_6card   position-relative overflow-hidden "
              data-aos="fade-down-right"
            >
              <p className=" fw_500 fs_20 font_Roboto text-black">Free</p>
              <p className=" fw_300 fs_16 font_Neue text_clr mt-1">
                Great To Get You Started
              </p>
              <p className=" fw_700 fs_32  text-black  font_Roboto mt-3  text_clr2">
                £0<span className=" fw_400 fs_16">/per month</span>
              </p>
              <div className=" d-flex align-items-center mt-4">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Single User
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Single Resource
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  150 Clients
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Unlimited Appointments
                </p>
              </div>
              <button className="get_btn fw_400 fs_20 font_Roboto text-black  mt1">
                Get Started
              </button>
              <div className="yello_sms ">
                <p className=" fw_500 fs_10 text-white font_Neue">
                  SMS Included
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} md={4} className="  mt-4 mt-sm-0 ">
            <div
              className="sec_6card position-relative overflow-hidden "
              data-aos="fade-down"
            >
              <p className=" fw_500 fs_20 font_Roboto text-black">
                Starter Plus
              </p>
              <p className=" fw_300 fs_16 font_Neue text_clr mt-1">
                Business Essentials
              </p>
              <p className=" fw_700 fs_32  text-black  font_Roboto mt-3 text_clr2">
                £15<span className=" fw_400 fs_16">/per month</span>
              </p>
              <div className=" d-flex align-items-center mt-4">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Single User
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Single Resource
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Single User
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Unlimited Appointments
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Custom Pet Breeds
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  SMS Reminders
                </p>
              </div>
              <p className=" fw_700 fs_13 textblack font_Neue mt-3">
                100 SMS Credits
              </p>
              <button className="get_btn fw_400 fs_20 font_Roboto text-black mt2 ">
                Get Started
              </button>
              <div className="yello_sms ">
                <p className=" fw_500 fs_10 text-white font_Neue">
                  SMS Included
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} md={4} className="  mt-4 mt-md-0 ">
            <div
              className="sec_6card  position-relative overflow-hidden"
              data-aos="fade-down"
            >
              <p className=" fw_500 fs_20 font_Roboto text-black">Premier</p>
              <p className=" fw_300 fs_16 font_Neue text_clr mt-1">
                Idea Busy Businesses
              </p>
              <p className=" fw_700 fs_32  text-black  font_Roboto mt-3 text_clr2">
                £25<span className=" fw_400 fs_16">/per month</span>
              </p>
              <div className=" d-flex align-items-center mt-4">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Multi User
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Multi Resource
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Unlimited Clients
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Unlimited Appointments
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Custom Pet Breeds
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Email Conftion Reminders
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Email Marketing
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Online Booking
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Electronic Contracts
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Mobile App
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Reporting
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Support
                </p>
              </div>
              <button className="get_btn fw_400 fs_20 font_Roboto text-black mt3">
                Get Started
              </button>
              <div className="yello_sms ">
                <p className=" fw_500 fs_10 text-white font_Neue">
                  SMS Included
                </p>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={6} md={4} className="  mt-4 mt-lg-0 ">
            <div
              className="sec_6card  position-relative overflow-hidden"
              data-aos="fade-down-left"
            >
              <p className=" fw_500 fs_20 font_Roboto text-black">
                Premier Plus
              </p>
              <p className=" fw_300 fs_16 font_Neue text_clr mt-1">
                Unlimited Possibilities
              </p>
              <p className=" fw_700 fs_32  text-black  font_Roboto mt-3 text_clr2">
                £37<span className=" fw_400 fs_16">/per month</span>
              </p>
              <div className=" d-flex align-items-center mt-4">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Multi User
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Multi Resource
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Unlimited Clients
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Unlimited Appointments
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Custom Pet Breeds
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Email Confirmations & Reminders
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Email Marketing
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Online Booking
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Electronic Contracts
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Mobile App
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Reporting
                </p>
              </div>
              <div className=" d-flex align-items-center mt-2">
                <Tick />
                <p className=" fw_300 fs_13 text_clr  font_Neue ms-2">
                  Support
                </p>
              </div>
              <p className=" fw_700 fs_13 textblack font_Neue mt-3">
                200 SMS Credits
              </p>
              <button className="get_btn fw_400 fs_20 font_Roboto text-black mt4">
                Get Started
              </button>
              <div className="yello_sms ">
                <p className=" fw_500 fs_10 text-white font_Neue">
                  SMS Included
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pricing;
