import {Card, Col, Container, Carousel, Row} from 'react-bootstrap';
import './style/Section6.css';
import {AiFillStar} from 'react-icons/ai';

const Section6 = () => {
    return (
        <div className="section6-body">
            <div className="section6-header-text-container">
                <p className="section6-topic-text text-center">Trusted by thousands of Aspiring College Students</p>
            </div>

            <div className="section6-sub">
                <p className="section6-sub-text text-center">
                    Watch reviews from out past clients about how Trav4College was able to help them in their study
                    abroad journey.
                </p>
            </div>
            <div className="d-none d-lg-block  d-md-none text-center">
                <Section6Cardbig />
            </div>
            <div className="d-lg-none  d-xs-block d-sm-block d-md-block ">
                <Section6Cardsmall />
            </div>
        </div>
    );
};

// big screen
const Section6Cardbig = () => {
    return (
        <div>
            <div className="section6-card">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="avatar">
                                <img
                                    style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                                    src={'https://trav4college.com/assets/images/user-1.png'}
                                    roundedCircle
                                />
                            </div>
                            <Card style={{backgroundColor: '#d4f1ef', marginTop: '10%'}} className="border-0">
                                <Card.Body>
                                    <Row>
                                        <Col xs={8}>
                                            <Card.Title style={{fontSize: '20px'}}>Ibe Andyson</Card.Title>
                                            <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                                High School Student
                                            </Card.Subtitle>
                                        </Col>
                                        <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                            <Card.Title style={{fontSize: '20px'}}>
                                                4.5 <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                            </Card.Title>
                                        </Col>
                                    </Row>
                                    <p className="section6-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam
                                        perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi
                                        vero. Soluta est, totam impedit deserunt facilis ipsam reiciendis.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={4}>
                            <div className="avatar">
                                <img
                                    style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                                    src={'https://trav4college.com/assets/images/user-1.png'}
                                    roundedCircle
                                />
                            </div>

                            <Card style={{backgroundColor: '#d4f1ef', marginTop: '10%'}} className="border-0">
                                <Card.Body>
                                    <Row>
                                        <Col xs={8}>
                                            <Card.Title style={{fontSize: '20px'}}>Ibe Andyson</Card.Title>
                                            <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                                High School Student
                                            </Card.Subtitle>
                                        </Col>
                                        <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                            <Card.Title style={{fontSize: '20px'}}>
                                                4.5 <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                            </Card.Title>
                                        </Col>
                                    </Row>
                                    <p className="section6-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam
                                        perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi
                                        vero. Soluta est, totam impedit deserunt facilis ipsam reiciendis.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xm={12} md={4}>
                            <div className="avatar-2">
                                <img
                                    style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                                    src={'https://trav4college.com/assets/images/user-1.png'}
                                    roundedCircle
                                />
                            </div>
                            <Card style={{backgroundColor: '#f0f1d4', marginTop: '10%'}} className="border-0">
                                <Card.Body>
                                    <Row>
                                        <Col xs={8}>
                                            <Card.Title style={{fontSize: '20px'}}>Ibe Andyson</Card.Title>
                                            <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                                High School Student
                                            </Card.Subtitle>
                                        </Col>
                                        <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                            <Card.Title style={{fontSize: '20px'}}>
                                                4.5 <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                            </Card.Title>
                                        </Col>
                                    </Row>
                                    <p className="section6-card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam
                                        perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi
                                        vero. Soluta est, totam impedit deserunt facilis ipsam reiciendis.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

// small screen
const Section6Cardsmall = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="avatar">
                        <img
                            style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                            src={'https://trav4college.com/assets/images/user-1.png'}
                            roundedCircle
                        />
                    </div>
                    <Card style={{backgroundColor: '#d4f1ef', marginTop: '10%'}} className="border-0">
                        <Card.Body>
                            <Row>
                                <Col xs={8}>
                                    <Card.Title style={{fontSize: '20px'}}>Ibe Andyson</Card.Title>
                                    <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                        High School Student
                                    </Card.Subtitle>
                                </Col>
                                <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                    <Card.Title style={{fontSize: '20px'}}>
                                        4.5 <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                    </Card.Title>
                                </Col>
                            </Row>
                            <p className="section6-card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam
                                perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi vero.
                                Soluta est, totam impedit deserunt facilis ipsam reiciendis.
                            </p>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="avatar">
                        <img
                            style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                            src={'https://trav4college.com/assets/images/user-1.png'}
                            roundedCircle
                        />
                    </div>
                    <Card style={{backgroundColor: '#d4f1ef', marginTop: '10%'}} className="border-0">
                        <Card.Body>
                            <Row>
                                <Col xs={8}>
                                    <Card.Title style={{fontSize: '20px'}}>Ibe Andyson</Card.Title>
                                    <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                        High School Student
                                    </Card.Subtitle>
                                </Col>
                                <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                    <Card.Title style={{fontSize: '20px'}}>
                                        4.5 <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                    </Card.Title>
                                </Col>
                            </Row>
                            <p className="section6-card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam
                                perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi vero.
                                Soluta est, totam impedit deserunt facilis ipsam reiciendis.
                            </p>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="avatar-2">
                        <img
                            style={{height: '130px', width: '130px', borderRadius: '50%', padding: '7%'}}
                            src={'https://trav4college.com/assets/images/user-1.png'}
                            roundedCircle
                        />
                    </div>
                    <Card style={{backgroundColor: '#f0f1d4', marginTop: '10%'}} className="border-0">
                        <Card.Body>
                            <Row>
                                <Col xs={8}>
                                    <Card.Title style={{fontSize: '20px'}}>Ibe Andyson</Card.Title>
                                    <Card.Subtitle style={{fontSize: '15px'}} className="mb-2 text-muted">
                                        High School Student
                                    </Card.Subtitle>
                                </Col>
                                <Col style={{flexDirection: 'row-reverse'}} xs={4}>
                                    <Card.Title style={{fontSize: '20px'}}>
                                        4.5 <AiFillStar style={{marginLeft: '1%', color: '#ffce51'}} />
                                    </Card.Title>
                                </Col>
                            </Row>
                            <p className="section6-card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga animi magnam
                                perspiciatis qui iusto officiis quibusdam! Voluptatibus officiis delectus modi vero.
                                Soluta est, totam impedit deserunt facilis ipsam reiciendis.
                            </p>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};
export default Section6;
