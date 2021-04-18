import {Card, Row, Col, Image, Container} from 'react-bootstrap';
import './style/Section3.css';
import Icon1 from '../../assets/rocket.png';
import Icon2 from '../../assets/school.png';
import Icon3 from '../../assets/books.png';
import {useEffect, useState} from 'react';
import axios from 'axios';
import url from '../../url';

const Section3 = () => {
    const [state, setstate] = useState({});

    const apiCall = () => {
        axios
            .get(`${url}/section_3`, {
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
        <div className="section3-body">
            <div className="text-center section3-topic">
                <p className="section3-topic-text">{state.text_header}</p>
            </div>
            <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                <Row>
                    <Col xs={12} md={6} lg={4} className="px-2 py-2">
                        <Card className="border-0">
                            <Card.Body>
                                <Image src={Icon1} style={{height: '70px'}} />
                                <p className="card-tetx-header">Plan</p>
                                <p className="card-text-sub">{state.text_1}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="px-2 py-2">
                        <Card className="border-0">
                            <Card.Body>
                                <Image src={Icon2} style={{height: '70px'}} />
                                <p className="card-tetx-header">Apply</p>
                                <p className="card-text-sub">{state.text_2}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="px-2 py-2">
                        <Card className="border-0">
                            <Card.Body>
                                <Image src={Icon3} style={{height: '70px'}} />
                                <p className="card-tetx-header">Travel</p>
                                <p className="card-text-sub">{state.text_2}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Section3;
