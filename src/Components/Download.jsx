import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import google from "../assets/img/google.png";
import app from "../assets/img/app.png";
import { Easye, Market, Photo, Treat } from "./Mysvg";
import mobil2 from "../assets/img/mobile_2.png";

const Download = () => {
  return (
    <div className="yello_bg  pt-lg-5 pb-lg-5 yellow_bg">
      <div className=" ">
        <Container className=" custom_cuntainer pt-lg-5 pb-lg-5  ">
          <Row className=" align-items-center  pt-5 pb-5 text-center text-lg-start ">
            <Col lg={5} className=" d-lg-none">
              <img className=" w_100" src={mobil2} alt="" />
            </Col>
            <Col lg={5}>
              <div data-aos="fade-down">
                <h2 className=" fw_500 fs_48 font_Roboto text-white mt-5">
                  Download App
                </h2>
                <p className=" fw_300 fs_16 font_Neue text_clr1">
                  Are you a mobile groomer or just want to access your
                  <span className=" d-lg-block">
                    {" "}
                    appointments and client on the go?
                  </span>{" "}
                  <span className=" d-lg-block">
                    Try our app, available to Premier or Premier Plus
                  </span>{" "}
                  subscribers.
                </p>
                <div className=" mt-5">
                  <img className="google" src={google} alt="#" />
                  <img className=" ms-3 google" src={app} alt="#" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" pt-lg-5 pb-lg-5 ">
        <Container className=" pt-lg-5 pb-lg-5 custom_cuntainer ">
          <div className=" text-center" data-aos="fade-down">
            <h2 className=" fw_500 fs_48 font_Roboto text-white mt-lg-5 pt-5">
              About Us
            </h2>
            <p className=" fw_300 fs_16 font_Neue text-white">
              Software developed by groomers for groomers{" "}
              <span className=" d-lg-block">
                Our team has a wealth of experience, over 30 years combined
                working in dog grooming salons and over 45
              </span>{" "}
              years combined in working in software development.
            </p>
          </div>
          <Row className=" pt-5 pb-5 d-flex justify-content-center ">
            <Col lg={3} md={4} sm={6}>
              <div className=" card_sec4" data-aos="fade-down-right">
                <div className=" circle  "> </div>
                <Easye />
                <p className=" fw_500 fs_20 font_Roboto text-black">Founded</p>
                <p className=" dec_clr fw_500 fs_16 font_Neue">Dec 2009</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  Founded in 2009 to support pet grooming industry to reduce the
                  the administration burden of running a business.
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className=" mt-4 mt-sm-0">
              <div className=" card_sec4 padng" data-aos="fade-down">
                <div className=" circle  "> </div>
                <Photo />
                <p className=" fw_500 fs_20 font_Roboto text-black">
                  Clients & Pets
                </p>
                <p className=" july_clr fw_500 fs_16 font_Neue">July 2010</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  We released our first product 'Border' and made our first
                  sales into 3 different countries.
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className=" mt-4 mt-md-0">
              <div className=" card_sec4" data-aos="fade-down">
                <div className=" circle  "> </div>
                <Market />
                <p className=" fw_500 fs_20 font_Roboto text-black">Reports</p>
                <p className=" dece_clr fw_500 fs_16 font_Neue">Dec 2012</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  Our new Web based platform was created and released.
                </p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} className=" mt-4 mt-lg-0">
              <div className=" card_sec4" data-aos="fade-down-left">
                <div className=" circle  "> </div>
                <Treat />
                <p className=" fw_500 fs_20 font_Roboto text-black">Services</p>
                <p className=" aug_clr fw_500 fs_16 font_Neue">Aug 2013</p>
                <p className=" fw_300 fs_16 font_Neue text_clr">
                  We released our first premier subscription to the market
                </p>
              </div>
            </Col>
          </Row>
          <div
            className=" d-flex align-items-center justify-content-center pt-4 pb-5"
            data-aos="fade-up"
          >
            <button className="all_btn fs_20 fw_400 font_Roboto text-white">
              View All
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Download;
