import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import yelo from "../assets/img/yelo.png";
import { Key, Lock, Man, Ticks } from "./Mysvg";
import blue1 from "../assets/img/blue-1.png";
import pink from "../assets/img/pink.png";
import blue from "../assets/img/blue.png";
const Work = () => {
  return (
    <div className=" pt-lg-5 pb-lg-5">
      <Container className=" custom_cuntainer pt-5">
        <h2 className=" fw_500 fs_48 font_Roboto text-black">How It Work</h2>
        <p className=" fs_16 fw_300 font_neue text-black">
          ShakeYourTail is an online scheduling and CRM service & is super easy
          to use, you{" "}
          <span className=" d-block">
            {" "}
            can trial our premier service free for 30 days.
          </span>
        </p>
        <Row className=" position-relative row_after mt-5">
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start "
          >
            <div className=" d-flex flex-column align-items-start position-relative padding yello">
              <div className=" d-flex flex-column align-items-start">
                <img className=" d-none d-md-block" src={yelo} alt="" />
                <span>
                  <Lock />
                </span>
                <p className=" fw_500 fs_20 font_Roboto text-black mt-2">
                  Register
                </p>
                <p className=" fs_16 fw_300 font_Neue account_clr">
                  Create a account
                </p>
                <p className=" fs_76 fw_700 font_helvetica position-absolute clr1 img_postion z-n1">
                  01
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start "
          >
            <div className=" d-flex flex-column align-items-start position-relative padding blue">
              <div className=" d-flex flex-column align-items-start">
                <img className=" d-none d-md-block" src={blue1} alt="" />
                <span>
                  <Key />
                </span>
                <p className=" fw_500 fs_20 font_Roboto text-black mt-2">
                  Login
                </p>
                <p className=" fs_16 fw_300 font_Neue account_clr">
                  Create a account
                </p>
                <p className=" fs_76 fw_700 font_helvetica position-absolute clr2 img_postion z-n1">
                  02
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start "
          >
            <div className=" d-flex flex-column align-items-start position-relative padding blue1">
              <div className=" d-flex flex-column align-items-start">
                <img className=" d-none d-md-block" src={blue} alt="" />
                <span>
                  <Man />
                </span>
                <p className=" fw_500 fs_20 font_Roboto text-black mt-2">
                  Customise
                </p>
                <p className=" fs_16 fw_300 font_Neue account_clr">
                  Customise your emails,{" "}
                  <span className=" d-block">SMS & settings.</span>
                </p>
                <p className=" fs_76 fw_700 font_helvetica position-absolute clr3 img_postion3 z-n1">
                  03
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={3}
            className=" d-flex justify-content-md-center justify-content-start "
          >
            <div className=" d-flex flex-column align-items-start position-relative padding blue2">
              <div className=" d-flex flex-column align-items-start">
                <img className=" d-none d-md-block" src={pink} alt="" />
                <span>
                  <Ticks />
                </span>
                <p className=" fw_500 fs_20 font_Roboto text-black mt-2">
                  Done
                </p>
                <p className=" fs_16 fw_300 font_Neue account_clr">
                  Add clients & start booking appointments.
                </p>
                <p className=" fs_76 fw_700 font_helvetica position-absolute clr4 img_postion4 z-n1">
                  04
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
