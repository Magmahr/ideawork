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
        <div className='carousel-text-container'>
          <div className='carousel-text'>
            <p className='carousel-title'>Screening:</p>
            <p className='carousel-title'>DVF Secret Agent Part 2</p>
            <p className='carousel-date'>October 15, 2017</p>
            <p className='carousel-description'>Join us for a private screening of DVF Secret Agent Part 2 <br></br> with our special guest, director Peter Lindberg.</p>
          </div>
        </div>
        <Carousel
          showArrows={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={1000}
          interval={5000}
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
