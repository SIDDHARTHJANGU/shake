import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Light, Mail } from "./Mysvg";

const Faq = () => {
  return (
    <div className=" pt-lg-5 pb-5">
      <Container className=" custom_cuntainer pt-5 ">
        <div data-aos="fade-down">
          <h2 className=" fw_500 fs_48 font_Roboto text-black ">FAQ’s</h2>
        </div>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col lg={7}>
            <div data-aos="fade-down-right">
              <Accordion defaultActiveKey="0" className="pb-lg-5 pt-lg-5 ">
                <Accordion.Item eventKey="1" className="position-relative ">
                  {" "}
                  <Accordion.Header className="">
                    Do you have a mobile app?
                  </Accordion.Header>
                  <Accordion.Body className="">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mt-4 position-relative">
                  <Accordion.Header className="">
                    Do you support start-up business?
                  </Accordion.Header>
                  <Accordion.Body className="">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  className=" mt-4 position-relative"
                >
                  <Accordion.Header className="">
                    I’ve used up all my monthly SMS credits, can I buy more?
                  </Accordion.Header>
                  <Accordion.Body className="">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mt-4 position-relative">
                  <Accordion.Header className="">
                    {" "}
                    What do I need to access the system?
                  </Accordion.Header>
                  <Accordion.Body className="">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="mt-4 position-relative">
                  <Accordion.Header className="">
                    Can you import my data?
                  </Accordion.Header>
                  <Accordion.Body className="">
                    Yes, our mobile app is available to premier and premier plus
                    subscribers, allowing you to manage your business on the go.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col lg={5} className=" d-flex justify-content-center mt-5 mt-lg-0 ">
            <div className="need_card" data-aos="fade-down-left">
              <p className=" fs_32 fw_500 font_Roboto textblack ">Need help?</p>
              <p className=" fw_300 fs_16 font_Neue shake_clr ">
                Ask our support team
              </p>
              <button className="new_btn  fw_300 fs_16 font_Neue text-white mt-4">
                {" "}
                <Light /> New Idea?
              </button>
              <button className="new_btn  fw_300 fs_16 font_Neue text-white mt-4">
                {" "}
                <Mail /> Contact Us
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
