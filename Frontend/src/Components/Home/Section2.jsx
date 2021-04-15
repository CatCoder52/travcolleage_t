import {Card, Col, Row} from 'react-bootstrap';
import './style/Section2.css';
const Section2 = () => {
    return (
        <div className="section2-body">
            <div className="section2-container justify-content-md-center">
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
                                <p className="stag2-text-1">Trav4College</p>
                            </Col>
                            <Col xs={8}>
                              <div className="stage2-text-container">
                              
                                <span className="stag2-text-2-2">United States Dollars</span> 
                                <span className="stag2-text-2">100 </span>
                              </div>
                               

                                <p className="stage2-text-3">-92 % OFF</p>
                            </Col>
                        </Row>
                    </div>
                </Card>
                <Card className="card-1-style">
                    <Card.Body />
                </Card>
            </div>
        </div>
    );
};

export default Section2;
