import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import dog from "../assets/img/dog.png";
import dogs from "../assets/img/dog1.png";
import star from "../assets/img/star.png";
import Slider from "react-slick";

import { Arrow1, Arrow2 } from "./Mysvg";
const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div id="Free" className=" pt-lg-5 pb-lg-5">
      <Container className=" custom_cuntainer pt-5 pb-5">
        <div>
          <h2
            className=" fw_500 fs_48 font_Roboto text-black text-center"
            data-aos="fade-down"
          >
            Testimonial
          </h2>
        </div>
        <Row className=" d-flex justify-content-between pt-5 mt-4">
          <Col lg={6}>
            <div data-aos="fade-down-right">
              <img className=" w-100" src={dog} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div data-aos="fade-down-left">
              <Slider {...settings}>
                <div>
                  <img src={dogs} alt="" />
                  <p className=" fs_20 fw_300 font_Neue shake_clr mt-4">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <img className=" mt-2" src={star} alt="" />
                  <p className=" fw_700 fs_30 font_helvetica mathew_clr mt-3">
                    Mathew Spry
                  </p>
                  <p className=" fw_500 fs_18 font_helvetica shake_clr">
                    Director @ BArkingham, UK
                  </p>
                  <div className=" mt-5">
                    <Arrow1 />
                    <Arrow2 />
                  </div>
                </div>
                <div>
                  <img src={dogs} alt="" />
                  <p className=" fs_20 fw_300 font_Neue shake_clr mt-4">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <img className=" mt-2" src={star} alt="" />
                  <p className=" fw_700 fs_30 font_helvetica mathew_clr mt-3">
                    Mathew Spry
                  </p>
                  <p className=" fw_500 fs_18 font_helvetica shake_clr">
                    Director @ BArkingham, UK
                  </p>
                  <div className=" mt-5">
                    <Arrow1 />
                    <Arrow2 />
                  </div>
                </div>
                <div>
                  <img src={dogs} alt="" />
                  <p className=" fs_20 fw_300 font_Neue shake_clr mt-4">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <img className=" mt-2" src={star} alt="" />
                  <p className=" fw_700 fs_30 font_helvetica mathew_clr mt-3">
                    Mathew Spry
                  </p>
                  <p className=" fw_500 fs_18 font_helvetica shake_clr">
                    Director @ BArkingham, UK
                  </p>
                  <div className=" mt-5">
                    <Arrow1 />
                    <Arrow2 />
                  </div>
                </div>
                <div>
                  <img src={dogs} alt="" />
                  <p className=" fs_20 fw_300 font_Neue shake_clr mt-4">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <img className=" mt-2" src={star} alt="" />
                  <p className=" fw_700 fs_30 font_helvetica mathew_clr mt-3">
                    Mathew Spry
                  </p>
                  <p className=" fw_500 fs_18 font_helvetica shake_clr">
                    Director @ BArkingham, UK
                  </p>
                  <div className=" mt-5">
                    <Arrow1 />
                    <Arrow2 />
                  </div>
                </div>
                <div>
                  <img src={dogs} alt="" />
                  <p className=" fs_20 fw_300 font_Neue shake_clr mt-4">
                    “ShakeYourTail is amazing, helping me easily manage my
                    appointments and reduce my business admin with automated
                    confirmations and reminders.”
                  </p>
                  <img className=" mt-2" src={star} alt="" />
                  <p className=" fw_700 fs_30 font_helvetica mathew_clr mt-3">
                    Mathew Spry
                  </p>
                  <p className=" fw_500 fs_18 font_helvetica shake_clr">
                    Director @ BArkingham, UK
                  </p>
                  <div className=" mt-5">
                    <Arrow1 />
                    <Arrow2 />
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
