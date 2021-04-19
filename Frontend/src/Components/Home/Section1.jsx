import {Col, Row, Button} from 'react-bootstrap';
import './style/Section1.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import url from '../../url';

const Section1 = () => {
    const [state, setstate] = useState({});

    const apiCall = () => {
        axios
            .get(`${url}/section_1`, {
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
        <div className="section1-body">
            <div className="section-container">
                <Row>
                    <Col className="section1-text-section" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <p className="txt1">
                            Your College Journey <br /> Starts Here
                        </p>
                        <p className="txt2">{state.text_2}</p>

                        <div className="btn-container">
                            <Button className="btn1">Signup</Button>

                            <Button className="btn2">Download App</Button>
                        </div>
                    </Col>
                    <Col className="section1-iamge-section" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Row>
                            <Col xs={6}>
                                <img className="image1" alt="an image" src={state.image_1} />
                            </Col>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={12}>
                                        <img className="image2" alt="an image" src={state.image_2} />
                                    </Col>
                                    <Col xs={12}>
                                        <img className="image3" alt="an image" src={state.image_3} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Section1;
