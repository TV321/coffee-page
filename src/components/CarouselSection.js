import React from 'react';
import '../styles/CarouselSection.sass';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import FirstImg from '../images/c4.jpg'
import SecondImg from '../images/c5.jpg'
import ThirdImg from '../images/c6.jpg'

const CarouselSection = () => {
    return(
        <Container id="carousel">
        <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ FirstImg }
                  alt="First slide"
                />
                <Carousel.Caption className="caption">
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ SecondImg }
                  alt="Second slide"
                />
                <Carousel.Caption className="caption">
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ ThirdImg }
                  alt="Third slide"
                />
                <Carousel.Caption className="caption">
                </Carousel.Caption>
              </Carousel.Item>
        </Carousel>
        </Container>
    )
}

export default CarouselSection
