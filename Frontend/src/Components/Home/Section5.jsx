import React from 'react';
import Slider from 'react-slick';

import {Col, Row, Card} from 'react-bootstrap';
import './style/Section5.css';

const Section5 = () => {
    let settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    let settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
    };
    return (
        <div className="section5-body">
            <div className="section5-topic">
                <p className="section5-topic-text text-center">100+ Highschools trust us</p>
                <div className="section5-sub">
                    <p className="section5-sub-text text-center">
                        Choosing the right school is key to a student’s success in achieving his/her academic goals.
                        Trav4College, coupled with a trusted network of accredited schools, is set up to help students
                        successfully enroll in schools best suited for them.
                    </p>
                </div>
            </div>
            <div style={{paddingLeft: '25px', paddingRight: '25px'}}>
                {/* Desktop view */}
                <Slider className="d-none d-lg-block  d-md-none text-center" {...settings1}>
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

                {/* Mobile view */}

                <Slider className="d-lg-none  d-xs-block d-sm-block d-md-block " {...settings2}>
                    <Row>
                        <Col xm={12} className="px-0 py-0">
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
                        <Col xm={12} className="px-0 py-0">
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
                        <Col xm={12} className="px-0 py-0">
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
                        <Col xm={12} className="px-0 py-0">
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
                        <Col xm={12} className="px-0 py-0">
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
            <div className="section5-contact-us">
                <p className="section5-contact-us-text text-center">
                    Are you a high school admin? <span style={{fontWeight: 'bolder'}}>Contact Us</span>
                </p>
            </div>
        </div>
    );
};
export default Section5;
