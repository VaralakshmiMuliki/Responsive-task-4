import React from "react";

import "./Testimonial.scss";
import "../../components/mediaQueries.scss";
import { Carousel } from "react-bootstrap";
import { mydatacontext } from "../myContext/myContext";

export const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2 className="client">
        Client <span className="testimonials">Testimonials</span>
      </h2>

      <div className="customer-review-carousel">
        <Carousel
          indicators={false}
          controls={false}
          cols={1}
          rows={1}
          gap={10}
          loop
        >
          <mydatacontext.Consumer>
            {({ customerReview }) => {
              return (
                <>
                  {customerReview.map((each, i) => 
                    <Carousel.Item key={i} className="bb">
                      <div className="customer-review-content align-center">
                        <img
                          width="100%"
                          src={each.img}
                          className="customer-image ml-5"
                          alt=""
                        />
                        <p className="mt-3 p-3 ">
                          Aenean consectetur lacinia diam a tincidunt. Vivamus
                          facilisis lacus non velit suscipit pellentesque. Nam
                          ac mauris nec mi lobortis sollicitudin sed at lacus.
                          Fusce volutpat, dolor in suscipit pharetra, lacus
                          sapien sollicitudin quam, non aliquam ex neque eu
                          lectus.{" "}
                        </p>
                        <h5>{each.name}</h5>
                        <p>{each.position}</p>
                      </div>
                    </Carousel.Item>
                  )}
                </>
              );
            }}
          </mydatacontext.Consumer>
        </Carousel>
      </div>
    </div>
  );
};
