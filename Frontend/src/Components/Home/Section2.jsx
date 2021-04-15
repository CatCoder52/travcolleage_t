import {Card, Col, Row} from 'react-bootstrap';
import {BiCheckDouble} from 'react-icons/bi';
import './style/Section2.css';

const Section2 = () => {
    return (
        <div className="section2-body">
            <div className="section2-container  col-12 justify-content-md-center">
                <Card className="card-1-style">
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <p className="what-we-offer-text">What We Offer</p>
                            </Col>
                            <Col xs={6}>
                                <p className="Handling-Fees">Handling Fees</p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <div className="stage2">
                        <Row>
                            <Col xs={4}>
                                <div className="stag2-text-1-bg">
                                    <p className="stag2-text-1-tag">
                                        <BiCheckDouble
                                            style={{fontSize: '30px', color: '#ffffff', marginLeft: '10px'}}
                                        />{' '}
                                        Cheapest
                                    </p>
                                </div>
                                <p className="stag2-text-1">Trav4College</p>
                            </Col>
                            <Col xs={8}>
                                <div className="stage2-text-container">
                                    <span className="stag2-text-2-2">United States Dollars</span>
                                    <span className="stag2-text-2">150.00 </span>
                                </div>

                                <p className="stage2-text-3">-92 % OFF</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={4}>
                                <p className="stag3-text-1">Trav4College</p>
                            </Col>
                            <Col xs={8}>
                                <div className="stage3-text-container">
                                    <span className="stag3-text-2-2">United States Dollars</span>
                                    <span className="stag3-text-2">200.00 </span>
                                </div>

                                <p className="stage3-text-3">-92 % OFF</p>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card className="card-2-style">
                    <Card.Body>
                        <Row>
                            <Col xs={6}>
                                <p className="Handling-Fees">Study Consultancy</p>
                            </Col>
                            <Col xs={6}>
                                <p className="Handling">Feedback Time</p>
                            </Col>
                        </Row>
                    </Card.Body>
                    <div className="card-2-stage2">
                        <Row>
                            <Col xs={7}>
                                <div className="card-2-stage2-text-container">
                                    <span className="card-2-stag2-text-2-2">United States Dollars</span>
                                    <span className="card-2-stag2-text-2">150.00 </span>
                                </div>

                                <p className="card-2-stage2-text-3">-92 % OFF</p>
                            </Col>
                            <Col xs={5}>
                                <p className="card-2-stag2-text-1">instant feedback time</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col xs={8}>
                                <div className="card-2-stage3-text-container">
                                    <span className="card-2-stag3-text-2-2">United States Dollars</span>
                                    <span className="card-2-stag3-text-2">200.00 </span>
                                </div>
                                <p className="card-2-stage3-text-3">-92 % OFF</p>
                            </Col>
                            <Col xs={4}>
                                <p className="card-2-stag3-text-1">Over 2 weeks</p>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Section2;
 