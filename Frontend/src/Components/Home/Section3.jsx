import {Card, Row, Col, Image, Container} from 'react-bootstrap';
import './style/Section3.css';
import Icon1 from '../../assets/rocket.png';
import Icon2 from '../../assets/school.png';
import Icon3 from '../../assets/books.png';

const Section3 = () => {
    return (
        <div className="section3-body">
            <div className="text-center section3-topic">
                <p className="section3-topic-text">How Trav4college Works</p>
            </div>
            <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                <Row>
                    <Col xs={12} md={6} lg={4} className="px-2 py-2">
                        <Card className="border-0">
                            <Card.Body>
                                <Image src={Icon1} style={{height: '70px'}} />
                                <p className="card-tetx-header">Plan</p>
                                <p className="card-text-sub">
                                    {' '}
                                    We will help you map out your goals and aspirations and also help you take conscious
                                    steps towards discovering schools that will fit into your objectives and goals. We
                                    will be there to help you through the entire process- from helping you make a list
                                    of preferred schools, to selecting an exam and putting together your documents for
                                    your application.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="px-2 py-2">
                        <Card className="border-0">
                            <Card.Body>
                                <Image src={Icon2} style={{height: '70px'}} />
                                <p className="card-tetx-header">Apply</p>
                                <p className="card-text-sub">
                                    Once a suitable school is found, we begin the process of soliciting with our partner
                                    schools and then send your applications in. Through the application process, from
                                    the point of ‘applied’ till your application status says ‘admitted’, we will stand
                                    rigidly behind you and make the necessary preparations for when you get admitted.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="px-2 py-2">
                        <Card className="border-0">
                            <Card.Body>
                                <Image src={Icon3} style={{height: '70px'}} />
                                <p className="card-tetx-header">Travel</p>
                                <p className="card-text-sub">
                                    Obtaining your visa and other travel documents may sometimes be challenging, for
                                    this reason, we will be handling your visa application process. We will help you
                                    secure your travel visa and flexible tickets and also notify the school prior to
                                    resumption date so they can prepare towards receiving an international student.
                                    Trav4college will help you settle in and even keep in touch with you till your
                                    education program is over.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Section3;
