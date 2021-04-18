import {Col, Container, Button, Row, Card} from 'react-bootstrap';
import './style/Section4.css';
import List from '../../assets/list.png';
import {useEffect, useState} from 'react';
import axios from 'axios';
import url from '../../url';

const Section4 = () => {
    const [state, setstate] = useState({});

    const apiCall = () => {
        axios
            .get(`${url}/section_4`, {
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
        <div className="section4-body">
            <Container>
                <Row>
                    <Col xm={12} md={6}>
                        <div className="section4-1st-col">
                            <p className="section4-header-text">{state.text_header}</p>
                            <p className="section4-sub-text">{state.text_1}</p>
                            <Button className="section4-btn">Explore Our Partners</Button>
                        </div>
                    </Col>
                    <Col xm={12} md={6}>
                        <Card className="border-0">
                            <Card.Img variant="top" src={List} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Section4;
