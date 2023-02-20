import React from "react";
import "./Experience.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import { mydatacontext } from "../myContext/myContext";

export const Experience = () => {
  return (
    <Container className="experience-container">
      <Row>
        <Col xs="12" md="12" lg="6" className="experience-column">
          <h1 className="skills">
            <span className="experience">Experience</span> turned in skills
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            gravida lacinia tellus, vitae condimentum purus tristique sed.
          </p>
          <p>
            <strong>
              Integer at lorem eget diam facilisis lacinia ac id massa.
            </strong>
            Nulla facilisi. Duis ornare facilisis ex non porttitor. Suspendisse
            potenti. Sed luctus suscipit tincidunt. Ornare facilisis ex non
            porttitor. Suspendisse potenti. Sed luctus suscipit tincidunt.
          </p>
        </Col>
        <Col xs="12" md="12" lg="6" className="status-column">
          <mydatacontext.Consumer>
            {({ experienceStatus }) => {
              return (
                <>
                  {experienceStatus.map((each, i) => (
                    <div key={i} className="status-container">
                      <div className="status-bar">
                        <h2>{each.skill}</h2>
                        <h2>{`${each.skillPercentage}%`}</h2>
                      </div>
                      {/* <Progress percent={100} status="active" showInfo={false} /> */}
                      <div id="progressbar">
                        <div
                          style={{ width: `${each.skillPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </>
              );
            }}
          </mydatacontext.Consumer>
        </Col>
      </Row>
    </Container>
  );
};
