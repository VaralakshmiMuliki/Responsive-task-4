import React from "react";
import "./Numbers.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { mydatacontext } from "../myContext/myContext";

export const Numbers = () => {
  return (
    <Container>
      <Row>
        <mydatacontext.Consumer>
          {({ countDetails }) => {
            return (
              <>
                {countDetails.map((each, i) => 
                  <Col key={i} xs="12" md="12" lg="4">
                    <CountUp
                      start={each.start}
                      end={each.end}
                      delay={2}
                      duration={5}
                    >
                      {({ countUpRef, start }) => (
                        <div className="count-container">
                          <span ref={countUpRef} className="count" />
                          <h3 className="number-des">{each.sub}</h3>
                        </div>
                      )}
                    </CountUp>
                  </Col>
                )}
              </>
            );
          }}
        </mydatacontext.Consumer>
      </Row>
    </Container>
  );
};
