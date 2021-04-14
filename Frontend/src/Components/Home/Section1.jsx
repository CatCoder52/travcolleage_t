import {Col, Container, Row, Button} from 'react-bootstrap';
import './style/Section1.css';

const Section1 = () => {
    return (
        <div className="section1-body">
            <div className="section-container">
                <Row>
                    <Col className="section1-text-section" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <p className="txt1">
                            Your College Journey <br /> Starts Here
                        </p>
                        <p className="txt2">
                            Trav4College offers a robust platform that includes rich details on admissions, student
                            profiles, cost of study, graduate outcomes and much more.
                        </p>

                        <div className="btn-container">
                            <Button className="btn1">Signup</Button>

                            <Button className="btn2">Download App</Button>
                        </div>
                    </Col>
                    <Col  className="section1-iamge-section" xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Row>
                            <Col xs={6}>
                                <img
                                    className="image1"
                                    src={'https://trav4college.com/assets/images/home/hero-1.jpg'}
                                />
                            </Col>
                            <Col xs={6}>
                                <Row>
                                    <Col xs={12}>
                                        <img
                                             className="image2"
                                            src={'https://trav4college.com/assets/images/home/hero-2.jpg'}
                                        />
                                    </Col>
                                    <Col xs={12}>
                                        <img
                                          className="image3"
                                            src={'https://trav4college.com/assets/images/home/hero-3.jpg'}
                                        />
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
