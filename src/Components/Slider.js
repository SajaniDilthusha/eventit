import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';


export default function Slider() {
  return (
    
    <Carousel>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide1}
        alt="First slide"
      />

      <Carousel.Caption>
        <h3>Find your event here..</h3>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Find your event here..</h3>
        {/* <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>

    
    <Carousel.Item>
      <img
        className="d-block w-100 m-0 h-5"
        src={slide3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Find your event here..</h3>
        {/* <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p> */}
      </Carousel.Caption>
    </Carousel.Item>

    
  </Carousel>
      
    
  )
}
