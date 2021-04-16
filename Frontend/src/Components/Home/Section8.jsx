import {Row, Container, Col, Card} from 'react-bootstrap';
import './style/Section8.css';
import AndroidIcon from '../../assets/android-dl.png';
import IosIcon from '../../assets/ios-dl.png';
import AppImage from '../../assets/appimage.png';
const Section8 = () => {
    return (
        <div className="section8-body">
            <Container>
                <Row>
                    <Col xm={12} md={6}>
                        <div className="section4-1st-col">
                            <p className="section4-header-text">
                                For Aspiring College Students & Parents Sign up for free today.
                            </p>
                            <div className="section8-app-icon-vendor">
                                <img className="icon-style" src={AndroidIcon} />
                                <img className="icon-style"  src={IosIcon} />
                            </div>
                        </div>
                    </Col>
                    <Col xm={12} md={6}>
                        <Card className="border-0">
                            <Card.Img variant="top" src={AppImage} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Section8;
