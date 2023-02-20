import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Partners.scss";

export const Partners = () => {
  const partnerDetails = [
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
    "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
  ];
  return (
    <Container className="partner-container">
      <Row>
        <Col xs="12" md="12" lg="6" className="partner-column">
          <h5 className="gap">
            Our Trusted <span>Parteners</span>
          </h5>
        </Col>
        <Col>
          <div className="container">
            <div className="sliding-background">
              {partnerDetails.map((each) => (
                <img width={"180px"} src={each} alt="envato" />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
