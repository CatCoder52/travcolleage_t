import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import Logo from '../../assets/iconlogo.svg';
import './style/Header.css';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="header-bg">
                <Navbar.Brand href="#home" className="logo">
                    <img src={Logo} /> <label className="logo-text">Trav4College</label>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="mobile">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features" className="header-text">
                            College Application
                        </Nav.Link>
                        <Nav.Link href="#pricing" className="header-text">
                            Scholarships
                        </Nav.Link>
                        <Nav.Link href="#pricing" className="header-text">
                            Study Abroad Solutions
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" className="login-text">
                            Login
                        </Nav.Link>

                        <Nav.Link eventKey={2} href="#memes">
                            <Button className="btn-get-started">Get started</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};
export default Header;
