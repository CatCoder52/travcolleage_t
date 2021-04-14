import {Col, Container, Row, Button} from 'react-bootstrap';
import './style/Section1.css';

const Section1 = () => {
    return (
        <div className="section1-body">
            <div className="section-container">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={6} xl={6}>
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
                </Row>
            </div>
        </div>
    );
};

export default Section1;
