import React from 'react';
import { Carousel } from 'react-bootstrap';
import ban1 from '../../../images/banner/slider-banner-1.jpg'
import ban2 from '../../../images/banner/slider-banner-2.jpg'
const Banner = () => {
    return (
        <div>
            <>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25 "
                            src={ban1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-white fw-bold fs-2">Travelling Around The World</h2>
                            <p className="text-white fs-5">The most economical way to circumnavigate the globe is to buy a round-the-world (RTW) plane ticket through a single airline alliance. These are confederations of several different airlines that make it simple to maximize the number of places you can travel and pay for it all in one place or with points.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-25"
                            src={ban2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-white fw-bold fs-2">Experience The Nature's Beauty</h2>
                            <p className="text-white fs-5">By experiences in nature we refer to time spent in natural areas, including wild natural areas, such as forests, but also nearby natural environments, like urban parks, gardens, and vacant lots</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </>
        </div>
    );
};

export default Banner;