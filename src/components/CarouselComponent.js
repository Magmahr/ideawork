import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slide1 from '../assets/slide1.jpg'
import Slide2 from '../assets/slide2.jpg'
import Slide3 from '../assets/slide3.jpg'

class CarouselComponent extends Component {

  render() {
    return (
      <div className='carousel'>
      <Carousel
        showArrows={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={1500}
        swipeable={true}
        emulateTouch={true}
        centerMode={false}
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={true}
      >
        <div className='slide1'>
          <img id='slide1' src={Slide1} alt='slide1'></img>
        </div>

        <div className='slide2'>
          <img id='slide2' src={Slide2} alt='slide2'></img>
        </div>

        <div className='slide3'>
          <img id='slide3' src={Slide3} alt='slide3'></img>
        </div>

        </Carousel>
      </div>
    )

  }
}


export default CarouselComponent
