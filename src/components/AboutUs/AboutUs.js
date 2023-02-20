import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AboutUs.scss";
import "../../components/mediaQueries.scss";
// import { AiOutlinePlus } from "react-icons/ai";
// import { Tooltip } from "antd";
import { Collapse } from "antd";

export const AboutUs = () => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const aboutAccordian = ['Motivation',"Quality","Future"];
  return (
    <Container fluid className="about-us-container">
      <Row>
        <Col xs="12" md="12" lg="6">
          <img
            src="https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/auto_img_1_3.jpg"
            alt=""
            width="100%"
          />
          {/* <div className="position">
            <Tooltip title="Feature 1" className=" plus plus-1">
              <AiOutlinePlus className="plus-icon" />
            </Tooltip>
            <div className=" plus plus-2">
              <AiOutlinePlus className="plus-icon" />
            </div>
            <div className=" plus plus-3">
              <AiOutlinePlus className="plus-icon" />
            </div>
          </div> */}
        </Col>
        <Col xs="12" md="12" lg="6" className="about-us-column">
          <h2 className="about">
            About <span className="us">Us</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            laoreet fermentum accumsan. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Praesent in velit
            vehicula, iaculis tortor eu, placerat elit. Aenean iaculis nulla nec
            condimentum pulvinar.
          </p>
          <Collapse accordion>
            {
              aboutAccordian.map((each,i) => 
              <Panel header={each} key={i} className='accordian-head'>
              <p className="accordian-text">{text}</p>
            </Panel>)
            }
           
           
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};
