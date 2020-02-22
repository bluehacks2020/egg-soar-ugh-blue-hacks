import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import one from '../../assets/images/immersion.jpg'
import two from '../../assets/images/indigenous.jpg'
import three from '../../assets/images/laiwa.jpg'
import  { carousels }  from '../../data/carousels'
import './style.css'

const MyCarousel = () => {
  const data = carousels.carousels
  console.log(data[0])
  
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img className="d-block" src={one} alt="First slide" />
        <Carousel.Caption><h3>{data[0].title}</h3></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={two} alt="Second slide" />
        <Carousel.Caption><h3>{data[1].title}</h3></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block" src={three} alt="Third slide" />
        <Carousel.Caption><h3>{data[2].title}</h3></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MyCarousel;
