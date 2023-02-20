import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Partners.scss";
import { mydatacontext } from "../myContext/myContext";

export const Partners = () => {
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
              <mydatacontext.Consumer>
                {({ partnerDetails }) => {
                  return (
                    <>
                      {partnerDetails.map((each) => 
                        <img width={"180px"} src={each} alt="envato" />
                      )}
                    </>
                  );
                }}
              </mydatacontext.Consumer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
