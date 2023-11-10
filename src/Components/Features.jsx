import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Aone, Remin, Sche } from "./Mysvg";

const Features = () => {
  return (
    <div id="Features" className=" pb-5 pt-lg-5 ">
      <Container className=" custom_cuntainer pt-5 ">
        <Row className=" d-flex justify-content-between align-items-center">
          <Col lg={6}>
            <div data-aos="fade-down-right">
              <Row className=" align-items-center">
                <Col sm={6}>
                  <div className="sec_2_card ">
                    <Aone />
                    <p className="fs_20 fw_500  font_Roboto text-black">
                      Clients & Pets
                    </p>
                    <p className="fw_300 fs_16 font_Neue text_clr">
                      Managing your Clients and{" "}
                      <span className=" d-lg-block">
                        {" "}
                        Pets is effortless; Record
                      </span>{" "}
                      <span className=" d-lg-block">
                        {" "}
                        details, add emergency contacts,
                      </span>{" "}
                      <span className=" d-lg-block">
                        {" "}
                        Medical Notes, Grooming
                      </span>{" "}
                      <span className=" d-lg-block">
                        {" "}
                        their appointment history,
                      </span>{" "}
                      alerts and much more…
                    </p>
                  </div>
                  <div className="sec_2_card py-3 px-3 mt-4">
                    <Remin />
                    <p className="fs_20 fw_500  font_Roboto text-black">
                      Notifications & Reminders
                    </p>
                    <p className="fw_300 fs_16 font_Neue text_clr">
                      We’ll take the strain by{" "}
                      <span className=" d-lg-block">automatically sending</span>{" "}
                      <span className=" d-lg-block">
                        {" "}
                        Clients, their appointment
                      </span>{" "}
                      <span className=" d-lg-block">
                        reminders, confirmations,
                      </span>{" "}
                      <span className=" d-lg-block">
                        {" "}
                        You’s and No Shows, or{" "}
                      </span>{" "}
                      email.
                    </p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="">
                    <div className="sec_2_card mt-4 mt-sm-0">
                      <Sche />
                      <p className="fs_20 fw_500  font_Roboto text-black">
                        Schedule
                      </p>
                      <p className="fw_300 fs_16 font_Neue text_clr">
                        Powerful and easy to use,
                        <span className=" d-lg-block">
                          {" "}
                          book appointments to
                        </span>{" "}
                        <span className=" d-lg-block">
                          {" "}
                          team members and view
                        </span>{" "}
                        <span className=" d-lg-block">
                          {" "}
                          colour coded schedule,
                        </span>{" "}
                        glance’.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={5}>
            <div data-aos="fade-down-left">
              <h2 className=" fw_500 fs_48 font_Roboto text-black mt-5">
                Main Features
              </h2>
              <p className=" fw_300 fs_16 text_clr font_Neue">
                ShakeYourTail is an trusted dog grooming software based the
                cloud; Client, appointment, scheduling document management
                service.
              </p>
              <p className=" fw_300 fs_16 text_clr font_Neue pt-2">
                Great for Salons & Groomers on the move; Run it on your PC,
                laptop, Tablet or Mobile with a standard internet connection.
              </p>
              <p className=" fw_300 fs_16 text_clr font_Neue pt-2">
                Store everything in one place and leave the tech stuff to us.
              </p>
              <p className=" fw_300 fs_16 text_clr font_Neue pt-2">
                We provide a complete service solution, giving you peace of
                mind, we support, secure, update and data, all safely backed up.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
