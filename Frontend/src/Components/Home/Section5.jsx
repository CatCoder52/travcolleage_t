import React from "react";
import Slider from "react-slick";

import {Col, Container, Row, Card} from 'react-bootstrap';
import './style/Section5.css';

const Section5 = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="section5-body">
            <div className="section5-topic">
                <p className="section5-topic-text text-center">100+ Highschools trust us</p>
            </div>
            <div className="">
                <Slider {...settings}>
                    <Row>
                        <Col xm={4}>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={
                                        'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75'
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xm={4}>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={
                                        'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75'
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xm={4}>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={
                                        'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75'
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xm={4}>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={
                                        'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75'
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xm={4}>
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={
                                        'https://trav4college.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Ftrust-2.jpg&w=640&q=75'
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                </Slider>
            </div>
        </div>
    );
};
export default Section5;


