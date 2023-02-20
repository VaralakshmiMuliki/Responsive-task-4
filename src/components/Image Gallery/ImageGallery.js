import React from "react";
import "./ImageGallery.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";

export const ImageGallery = () => {
  const gallery = [
    {
      image:
        "https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/auto_gal_4-660x660.jpg",
      head: "Custom Job",
      des: "ART",
    },
    {
      image:
        "https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/auto_gal_5-660x660.jpg",
      head: "Velding Work",
      des: "DESIGN PHOTOGRAPHY",
    },
    {
      image:
        "https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/auto_gal_2-660x660.jpg",
      head: "Pre Paint Job",
      des: "DECORATIONS DESIGN",
    },
    {
      image:
        "https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/auto_gal_1-660x660.jpg",
      head: "Old Car Rdaio",
      des: "ART DESIGN",
    },
  ];
  return (
    <Container className="image-gallery-container">
      <h2 className="image">
        Image <span className="gallery">Gallery</span>
      </h2>
      <p>Checkout the latest Images</p>
      <Row className="pt-4">
        {gallery.map((each,i) => (
          <Col key={i} xs="12" md="6" lg="3" className='gallery-column'>
            <div className="gallery-bg">
              <div className="zoom-image">
                <img
                  src={each.image}
                  alt=""
                  width="100%"
                  className="image-style"
                />
              </div>
              <div className="gallery-overlay">
                <h2>{each.head}</h2>
                <p>{each.des}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
