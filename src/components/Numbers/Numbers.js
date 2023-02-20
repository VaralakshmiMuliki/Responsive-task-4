import React from "react";
import "./Numbers.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

export const Numbers = () => {
  const countDetails = [
    { start: "1200", end: "1425", sub: "Clients Served" },
    { start: "6500", end: "6747", sub: "Parts Repaired" },
    { start: "400", end: "471", sub: "Other Things" },
  ];
  return (
    <Container>
      <Row>
        {countDetails.map((each,i) => (
          <Col key={i} xs="12" md="12" lg="4">
            <CountUp start={each.start} end={each.end} delay={2} duration={5}>
              {({ countUpRef, start }) => (
                <div className='count-container'>
                  <span ref={countUpRef} className="count" />
                  <h3 className="number-des">{each.sub}</h3>
                </div>
              )}
            </CountUp>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
