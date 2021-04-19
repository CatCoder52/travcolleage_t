import {Card, Col, Carousel, Row, Button} from 'react-bootstrap';
import './style/Section6.css';
import {AiFillStar} from 'react-icons/ai';
import {useEffect, useState} from 'react';
import axios from 'axios';
import url from '../../url';

const Section6 = () => {
    const [state, setstate] = useState([]);

    const apiCall = () => {
        axios
            .get(`${url}/section_6`, {
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
        <div className="section6-body">
            <div className="section6-header-text-container">
                <p className="section6-topic-text text-center">{state.text_header}</p>
            </div>

            <div className="section6-sub">
                <p className="section6-sub-text text-center">{state.text_1}</p>
            </div>
            <div className="d-none d-lg-block  d-md-none ">
                <Section6Cardbig state={state} />
            </div>
            <div className="d-lg-none  d-xs-block d-sm-block d-md-block ">
                <Section6Cardsmall state={state} />
            </div>
            <div className="section6-btn-container text-center">
                <Button className=" section6-btn">View all Testimonials</Button>
            </div>
        </div>
    );
};

// big screen
const Section6Cardbig = props => {
    console.log(props.state);
    return (
        <div>
            <div className="section6-card">
                <div style={{paddingLeft: '100px', paddingRight: '100px'}}>
                    <Row>
                        {props.state.person?.map(data => (
                            <Col xs={12} md={4}>
                                <div className="avatar">
                                    <img
                                    alt="an image"
                                        style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                                        src={data.image}
                                        roundedCircle
                                    />
                                </div>
                                <Card style={{backgroundColor: '#d4f1ef', marginTop: '10%'}} className="border-0">
                                    <Card.Body>
                                        <Row>
                                            <Col xs={8}>
                                                <Card.Title style={{fontSize: '20px'}}>{data.full_name}</Card.Title>
                                                <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                                    {data.education_level}
                                                </Card.Subtitle>
                                            </Col>
                                            <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                                <Card.Title style={{fontSize: '20px'}}>
                                                    {data.rating}
                                                    <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                                </Card.Title>
                                            </Col>
                                        </Row>
                                        <p className="section6-card-text">{data.text}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </div>
    );
};

// small screen
const Section6Cardsmall = props => {
    return (
        <div>
            <Carousel>
                {props.state.person?.map(data => (
                    <Carousel.Item>
                        <div className="avatar">
                            <img
                                style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                                src={data.image}
                                roundedCircle
                                alt="an image"
                            />
                        </div>
                        <Card style={{backgroundColor: '#d4f1ef', marginTop: '10%'}} className="border-0">
                            <Card.Body>
                                <Row>
                                    <Col xs={8}>
                                        <Card.Title style={{fontSize: '20px'}}>{data.full_name}</Card.Title>
                                        <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                            {data.education_level}
                                        </Card.Subtitle>
                                    </Col>
                                    <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                        <Card.Title style={{fontSize: '20px'}}>
                                            {data.rating}
                                            <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                        </Card.Title>
                                    </Col>
                                </Row>
                                <p className="section6-card-text">{data.text}</p>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};
export default Section6;
