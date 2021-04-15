import {Col, Container, Button, Row, Card} from 'react-bootstrap';
import './style/Section4.css';
import List from '../../assets/list.png';

const Section4 = () => {
    return (
        <div className="section4-body">
            <Container>
                <Row>
                    <Col xm={12} md={6}>
                        <div className="section4-1st-col">
                            <p className="section4-header-text">700+ College Partners</p>
                            <p className="section4-sub-text">
                                Trav4College is your window to discovering some of the best colleges and universities
                                around the world and all they have to offer.
                            </p>
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
