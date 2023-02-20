import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
export const imagesGallery = [
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

export const countDetails = [
  { start: "1200", end: "1425", sub: "Clients Served" },
  { start: "6500", end: "6747", sub: "Parts Repaired" },
  { start: "400", end: "471", sub: "Other Things" },
];

export const partnerDetails = [
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_5.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_1.png",
  "https://jevelin.shufflehound.com/landing/wp-content/uploads/sites/6/2016/05/Logo_4.png",
];

export const customerReview = [
  {
    img: "https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/Home_11_Img_4.jpg",
    name: "Jonatan Dogue",
    position: "Proud Client/CEO",
  },
  {
    img: "https://jevelin.shufflehound.com/autospot/wp-content/uploads/sites/14/2016/05/Home_11_Img_2.jpg",
    name: "Katey Gallardo",
    position: "Proud Client/CEO",
  },
];

export const repairFeatures = [
  { number: "01", title: "Clean Design" },
  { number: "02", title: "Fully Responsive" },
  { number: "03", title: "Customizable" },
  { number: "04", title: "Multi-purpose" },
  { number: "05", title: "One click install" },
];

export const address = [
  { class: "name", name: "name" },
  { class: "email", name: "email" },
  { class: "message-text", name: "message text" },
];

export const ContactDetails = [
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

export const experienceStatus = [
  { skill: "Progress", skillPercentage: "40" },
  { skill: "Design", skillPercentage: "90" },
  { skill: "Managing & SEO", skillPercentage: "100" },
];
export const mydatacontext = React.createContext();
