import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import sec_3 from "../assets/img/sec-3img.png";
import { Drope, Dule, Manage, Repot } from "./Mysvg";

const Customer = () => {
  return (
    <div className="sec_3_bg pt-xl-5 pb-xl-5 custmr_bf">
      <div className=" pb-lg-5 pt-lg-5">
        <Container className=" custom_cuntainer pt-5 pb-5">
          <Row className="align-items-center mt-4 pb-5 text-center text-lg-start ">
            <Col lg={6}>
              <div data-aos="fade-down-right">
                <h2 className=" text-black fs_48 fw_500  font_Roboto">
                  Let your customer{" "}
                  <span className=" d-lg-block">experience shine</span>
                </h2>
                <p className=" text-black fs_16 fw_300 font_Neue">
                  Automated client rating, provides instant feedback on client
                  <span className=" d-block">
                    {" "}
                    booking history, partner this with your own Loyalty
                  </span>{" "}
                  program.
                </p>
                <button className=" triyal_btn text-white fs_20 fw_400 font_Roboto mt-lg-5 mt-3">
                  Free Trial{" "}
                </button>
              </div>
            </Col>
            <Col lg={6} className=" mt-5 mt-md-0">
              <div className="position-relative  " data-aos="fade-down-left">
                <div className="sec_3card">
                  <div className="sec_3card2 px- 2">
                    <p className="fs_12 fw_500 font_Neue text-black ">
                      1:00 - 7:00
                    </p>
                    <p className="fs_10  fw_500 font_Neue text-black">
                      Half Day
                    </p>
                  </div>
                </div>
                <img
                  className=" w-100 img_radus mt-5 mt-lg-0"
                  src={sec_3}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" pt-xl-5 ">
        <Container className=" custom_cuntainer pt-xl-5 pb-xl-5">
          <div className=" text-center" data-aos="fade-down">
            <h2 className=" font_Roboto fs_48 fw_500 text-white pt-xl-5 mt-5">
              Features
            </h2>
            <p className="fs_16 fw_300 font_Neue text-white">
              ShakeYourTail provides your business with the following key
              features to run an{" "}
              <span className=" d-md-block">
                successful dog grooming business.
              </span>
            </p>
          </div>
          <Row className=" pt-5 pb-lg-5 mt-lg-4  align-items-center  d-flex justify-content-center ">
            <Col lg={3} md={4} sm={6}>
              <div className=" card_sec4" data-aos="fade-down-right">
                <div className=" circle  "> </div>
                <Dule />
                <p className=" fw_500 fs_20 font_Roboto text-black">Schedule</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  Powerful and easy to use, book appointments for your team
                  members and view a colour coded schedule, at a glance.
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className=" mt-4 mt-sm-0">
              <div className=" card_sec4 padng" data-aos="fade-down">
                <div className=" circle  "> </div>
                <Manage />
                <p className=" fw_500 fs_20 font_Roboto text-black">
                  Clients & Pets
                </p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  Managing your Clients is effortless; Record Client appointment
                  history, breed, photos, medical notes, vet contact, groom
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className=" mt-4 mt-md-0">
              <div className=" card_sec4" data-aos="fade-down">
                <div className=" circle  "> </div>
                <Repot />
                <p className=" fw_500 fs_20 font_Roboto text-black">Reports</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  Report and export client details, appointments, marketing, no
                  shows and more..
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className=" mt-4 mt-lg-0">
              <div className=" card_sec4" data-aos="fade-down-left">
                <div className=" circle  "> </div>
                <Drope />
                <p className=" fw_500 fs_20 font_Roboto text-black">Services</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  Add custom services to appointments, supplementary treatments,
                  collection and drop offs, promotion packages and more.
                </p>
              </div>
            </Col>
          </Row>
          <div
            className=" d-flex align-items-center justify-content-center pt-5 pb-5"
            data-aos="fade-up"
          >
            <button className="view_btn fw_400 fs_20 font_Roboto text-white">
              View All Features
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Customer;
