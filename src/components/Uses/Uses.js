import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Uses.scss";
import { AiFillCalendar } from "react-icons/ai";

export const Uses = () => {
  const usesAre = [
    { number: "01", title: "Clean Design" },
    { number: "02", title: "Fully Responsive" },
    { number: "03", title: "Customizable" },
    { number: "04", title: "Multi-purpose" },
    { number: "05", title: "One click install" },
  ];
  return (
    <div className="uses-bg">
      <Container className="uses-container">
        <Row>
          {usesAre.map((each,i) => (
            <Col key={i} xs="12" md="12" lg="4" className="uses-column">
              <h2 className="number">{each.number}</h2>
              <h1 className="use-title">{each.title}</h1>
              <p>
                Donec tincidunt nunc est, vestibulum magna placerat ut.
                Pellentesque accumsan, erat ut sollicitudin euismod, velit
                tortor feugiat erat, rutrum
              </p>
            </Col>
          ))}

          <Col xs='12' md='12' lg='4' className="calender-column">
            <AiFillCalendar className="calender" />
            <h3 className="appointment-head">
              Do you want to schedule an appointment?
            </h3>
            <button className="schedule-btn">Schedule me</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
