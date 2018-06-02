import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../stylesheets/Carousel-Hero.css';
import $ from 'jquery';
import '../../node_modules/jquery/dist/jquery.min.js';
const items = [
    {
      src: 'http://kb4images.com/images/school-images/36664282-school-images.jpg',
      altText: 'Welcome to the School',
      caption: 'We Provide world class education to our students'
    },
    {
      src: 'https://www.sd61.bc.ca/wp-content/uploads/sites/91/2018/02/Keri_Coles_Photography_SchoolBoard-055-1200x512.jpg',
      altText: 'There is no Limit to Knowledge',
      caption: 'We have a State of the Art library , where students can learn from the worlds best books'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Heiwa_elementary_school_18.jpg',
      altText: 'Passionate Teachers and Well Maintained Class Rooms',
      caption: 'Our Teachers are passionate and hard working.'
    }
  ];
 class ClassCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
  
    
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} style={{width: 1200,
    height: 512}} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    

    return (
        <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
                 
      
    )
  }
};
export default ClassCarousel;