import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselImagen = () => (
    <Carousel>
        <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0118_a15c29b9974f4735b850b7d29419f663.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0234_9bb4e89d87454a2cb90c7ab6b9f3c031.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://sofronia.s3-sa-east-1.amazonaws.com/Productos/BT01/IMG-20200907-WA0115_6403ba5fd6ad465bb4e5e13bc2d507a4.jpg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default CarouselImagen
