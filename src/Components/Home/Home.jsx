import React from 'react';
import { About } from '../About/About';
import { ContentHome } from '../ContentHome/ContentHome';
import { Testimonial } from '../Testimonial/Testimonial';

export const Home = () => {
  return (
    <div>
      <ContentHome />
      <About />
      <Testimonial />
    </div>
  )
}
