import React, { Component } from 'react'
import ClassCarousel from './class-carousel';
import Testimonial from './testimonials';
import Footer from './footer';
class Home extends Component {
  render() {
    return (
      <div>
          <ClassCarousel />
          <Testimonial />
          <Footer />

      </div>
    )
  }
}
export default Home;