import React from "react";
import "./ImageGallery.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import {mydatacontext} from '../myContext/myContext';

export const ImageGallery = () => {
  return (
    <Container className="image-gallery-container">
      <h2 className="image">
        Image <span className="gallery">Gallery</span>
      </h2>
      <p>Checkout the latest Images</p>
      <Row className="pt-4">
        <mydatacontext.Consumer>
          {({ imagesGallery }) => {
            return (
              <>
                {imagesGallery.map((each, i) => 
                  <Col key={i} xs="12" md="6" lg="3" className="gallery-column">
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
                )}
              </>
            );
          }}
        </mydatacontext.Consumer>
      </Row>
    </Container>
  );
};
