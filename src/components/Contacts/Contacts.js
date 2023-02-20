import React from "react";
import "./Contacts.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import { BiMap } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai";

export const Contacts = () => {
  const address = [
    { class: "name", name: "name" },
    { class: "email", name: "email" },
    { class: "message-text", name: "message text" },
  ];

  const ContactDetails = [
    {
      icon: <BiMap className="contact-icon" />,
      head: "ADDRESSES",
      des: "Street numberb 5, Town, Country",
    },
    {
      icon: <CiMail className="contact-icon" />,
      head: "E-MAIL",
      des: "brandname@company.com",
    },
    {
      icon: <BsTelephoneFill className="contact-icon" />,
      head: "TELEPHONE",
      des: "(+371) 512 566 921",
    },
    {
      icon: <AiOutlineClockCircle className="contact-icon" />,
      head: "WORK-HOURS",
      des: "Mon. - Frie. 11AM - 19PM",
    },
    // {
    //   icon: <AiOutlineClockCircle className="contact-icon" />,
    //   head: "ADDITIONAL INFORMATION",
    //   des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit vel mauris at tincidunt. ",
    // },
  ];
  return (
    <Container className="contacts-container">
      <Row>
        <Col xs="12" md="6" lg="6">
          <h5 className="gap pb-3">
            Our <span>Contacts</span>
          </h5>

          {ContactDetails.map((each,i) => (
            <div key={i} className="address-details">
              {each.icon}
              <div className="address">
                <h4>{each.head}</h4>
                <p>{each.des}</p>
              </div>
            </div>
          ))}
        </Col>

        <Col xs="12" md="6" lg="6" className="message-container">
          <h5 className="pb-4">
            Send Us A <span>Message</span>
          </h5>
          
            {
              address.map((each,i) => <div key={i} className={each.class}>
              <div  className="d-flex">
                <h4>{each.name}</h4>
                <AiOutlineCheckCircle className="circle" />
              </div>
              <input />
            </div>)
            }
          <button className="send-btn">Send message</button>
        </Col>
      </Row>
    </Container>
  );
};
