import React from 'react';
import Slider from 'react-slick';
import {Col, Row, Card} from 'react-bootstrap';
import './style/Section5.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import url from '../../url';

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

    const [state, setstate] = useState({});

    const apiCall = () => {
        axios
            .get(`${url}/section_5`, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                }
            })
            .then(res => {
                setstate(res.data.data);
                console.log(res.data);
            });
    };

    useEffect(() => {
        apiCall();
    }, []);
    return (
        <div className="section5-body">
            <div className="section5-topic">
                <p className="section5-topic-text text-center">{state.text_header}</p>
                <div className="section5-sub">
                    <p className="section5-sub-text text-center">{state.text_1}</p>
                </div>
            </div>
            <div style={{paddingLeft: '25px', paddingRight: '25px'}}>
                {/* Desktop view */}

                <Slider className="d-none d-lg-block  d-md-none text-center" {...settings1}>
                    {state.iamges?.map(data => (
                        <Row>
                            <Col xm={4}>
                                <Card className="border-0">
                                    <Card.Img variant="top" src={data} />
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Slider>

                {/* Mobile view */}

                <Slider className="d-lg-none  d-xs-block d-sm-block d-md-block " {...settings2}>
                    {state.iamges?.map(data => (
                        <Row>
                            <Col xm={12} className="px-0 py-0">
                                <Card className="border-0">
                                    <Card.Img variant="top" src={data} />
                                </Card>
                            </Col>
                        </Row>
                    ))}
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
