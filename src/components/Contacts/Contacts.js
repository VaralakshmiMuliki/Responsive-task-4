import React from "react";
import "./Contacts.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { mydatacontext } from "../myContext/myContext";

export const Contacts = () => {
  return (
    <Container className="contacts-container">
      <Row>
        <Col xs="12" md="6" lg="6">
          <h5 className="gap pb-3">
            Our <span>Contacts</span>
          </h5>
          <mydatacontext.Consumer>
            {({ ContactDetails }) => {
              return (
                <>
                  {ContactDetails.map((each, i) => (
                    <div key={i} className="address-details">
                      {each.icon}
                      <div className="address">
                        <h4>{each.head}</h4>
                        <p>{each.des}</p>
                      </div>
                    </div>
                  ))}
                </>
              );
            }}
          </mydatacontext.Consumer>
        </Col>

        <Col xs="12" md="6" lg="6" className="message-container">
          <h5 className="pb-4">
            Send Us A <span>Message</span>
          </h5>
          <mydatacontext.Consumer>
            {({ address }) => {
              return (
                <>
                  {address.map((each, i) => (
                    <div key={i} className={each.class}>
                      <div className="d-flex">
                        <h4>{each.name}</h4>
                        <AiOutlineCheckCircle className="circle" />
                      </div>
                      <input />
                    </div>
                  ))}
                </>
              );
            }}
          </mydatacontext.Consumer>

          <button className="send-btn">Send message</button>
        </Col>
      </Row>
    </Container>
  );
};
