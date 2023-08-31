import React from "react";
import { About } from "../About/About";
import { ContentHome } from "./inn/ContentHome";
import Testimonial from "./inn/Testimonial";
import { PhotoBox } from "./inn/PhotoBox";

const Home = () => {
  return (
    <>
      <ContentHome />

      <About />

      <Testimonial />

      <PhotoBox />
    </>
  );
};

export default Home;
