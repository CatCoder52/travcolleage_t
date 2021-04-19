import {Row, Col} from 'react-bootstrap';
import './style/Footer.css';
import {FaFacebook, FaMediumM, FaYoutube} from 'react-icons/fa';
import {AiFillInstagram, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer className="footer-body">
                <div className="footer-container">
                    <Row>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Company</p>
                                        <li>About Us</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms and Conditions</li>
                                        <li>Press</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Product</p>
                                        <li>College Aplication</li>
                                        <li>Scholarship</li>
                                        <li>College Savings</li>
                                        <li>International exams</li>
                                        <li>College Explore</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Resource</p>
                                        <li>Testimonials</li>
                                        <li>FAQ</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3}>
                            <div className="footer--content">
                                <div className="footer-links-content">
                                    <ul>
                                        <p className="footer-header-text">Contact</p>
                                        <li>contactus@trav4college.com</li>
                                        <li>Lagos: +2347063157060, +2349062547048</li>
                                        <li>Georgia, USA: +1-800-517-1491</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <FaFacebook className="ml-3" />
                    <AiFillInstagram className=" ml-3" />
                    <AiFillLinkedin className=" ml-3" />
                    <AiOutlineTwitter className=" ml-3" />
                    <FaMediumM className="ml-3" />
                    <FaYoutube className="ml-3" />

                    <div className="pt-4">
                        <img
                            alt="an image"
                            style={{height: '20px'}}
                            className="mr-2 ml-3"
                            src={'https://trav4college.com/assets/icons/nigeria.svg'}
                        />
                        <span>The Hive Mall,Plot 16 T.F Kuboye Street,Oniru, Victoria Island, Lagos, Nigeria</span>
                    </div>
                    <div className="pt-4">
                        <img
                            alt="an image"
                            style={{height: '20px'}}
                            className="mr-2 ml-3"
                            src={'https://trav4college.com/assets/icons/united-states.svg'}
                        />
                        <span>770 Old Roswell Place Suite I-200, Roswell, GA 30076,USA</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
