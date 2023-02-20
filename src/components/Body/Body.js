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
import { Features } from "../Features/Features";
import {
  mydatacontext,
  imagesGallery,
  countDetails,
  partnerDetails,
  customerReview,
  repairFeatures,
  address,
  ContactDetails,
  experienceStatus
  
} from "../myContext/myContext";

export const Body = () => {
  return (
    <>
      <mydatacontext.Provider
        value={{
          imagesGallery,
          countDetails,
          partnerDetails,
          customerReview,
          repairFeatures,
          address,
          ContactDetails,
          experienceStatus
        }}
      >
        <Home />
        <Features />
        <AboutUs />
        <ImageGallery />
        <Experience />
        <Numbers />
        <Testimonial />
        <Contacts />
        <Partners />
      </mydatacontext.Provider>
    </>
  );
};
