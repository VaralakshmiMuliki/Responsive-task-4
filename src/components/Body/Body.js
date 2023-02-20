import React from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import { Contacts } from "../Contacts/Contacts";
import { Experience } from "../Experience/Experience";
import { Home } from "../Home/Home";
import { ImageGallery } from "../Image Gallery/ImageGallery";
// import { Map } from "../Map/Map";
import { Numbers } from "../Numbers/Numbers";
import { Partners } from "../Partners/Partners";
import { Testimonial } from "../Testimonials/Testimonial";
import { Uses } from "../Uses/Uses";

export const Body = () => {
  return (
    <>
      <Home />
      <Uses />
      <AboutUs />
      <ImageGallery />
      <Experience />
      <Numbers />
      <Testimonial />
      {/* <Map/> */}
      <Contacts />
      <Partners />
    </>
  );
};
