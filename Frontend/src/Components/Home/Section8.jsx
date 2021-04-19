import {Row, Container, Col, Card} from 'react-bootstrap';
import './style/Section8.css';
import AndroidIcon from '../../assets/android-dl.png';
import IosIcon from '../../assets/ios-dl.png';
import AppImage from '../../assets/appimage.png';
import {useEffect, useState} from 'react';
import axios from 'axios';
import url from '../../url';

const Section8 = () => {
    const [state, setstate] = useState({});

    const apiCall = () => {
        axios
            .get(`${url}/section_8`, {
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
        <div className="section8-body">
            <Container>
                <Row>
                    <Col xm={12} md={6}>
                        <div className="section4-1st-col">
                            <p className="section4-header-text">{state.text_header}</p>
                            <div className="section8-app-icon-vendor">
                                <img  alt="pic" className="icon-style" src={AndroidIcon} />
                                <img  alt="pic" className="icon-style" src={IosIcon} />
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
