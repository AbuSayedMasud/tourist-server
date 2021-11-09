
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../images/travele-logo.png'

const Header = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">
                        <img
                            src={logo}
                            width="80"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/services#services">
                                Services
                            </Nav.Link>

                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/manageorder">Manage Order</Nav.Link>
                            <Nav.Link as={Link} to="/myorder">MyOrder</Nav.Link>
                            <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                        </Nav>
                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                        {
                            user?.email ? <Button onClick={logOut} variant="light">Logout</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;