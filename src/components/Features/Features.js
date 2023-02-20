import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Features.scss";
import { AiFillCalendar } from "react-icons/ai";
import { mydatacontext } from "../myContext/myContext";

export const Features = () => {
  return (
    <div className="uses-bg">
      <Container className="uses-container">
        <Row>
          <mydatacontext.Consumer>
            {({ repairFeatures }) => {
              return (
                <>
                  {repairFeatures.map((each, i) => 
                    <Col key={i} xs="12" md="12" lg="4" className="uses-column">
                      <h2 className="number">{each.number}</h2>
                      <h1 className="use-title">{each.title}</h1>
                      <p>
                        Donec tincidunt nunc est, vestibulum magna placerat ut.
                        Pellentesque accumsan, erat ut sollicitudin euismod,
                        velit tortor feugiat erat, rutrum
                      </p>
                    </Col>
                  )}
                </>
              );
            }}
          </mydatacontext.Consumer>

          <Col xs="12" md="12" lg="4" className="calender-column">
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
