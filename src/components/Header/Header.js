import React from 'react';
import { Button, Form, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="pt-3 pb-3 container-fluid">
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand href="/home"><img src={logo} className="brand-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/donation">Donation</Nav.Link>
                        <Nav.Link href="/addEvent">Events</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/blog" className="mr-3">Blog</Nav.Link>
                    </Nav>
                    <Button variant="primary" className="mr-3 ">Register</Button>
                    <Button variant="secondary">Admin</Button>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron align="center" id="jumbotrons">
                <h1 className="title">I grow by helping people in need</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eum doloribus doloremque deleniti omnis soluta!</p>
                <div className="d-flex justify-content-center">
                    <Form.Control id="search-form" type="text" placeholder="search event" />
                    <Button variant="primary">Learn more</Button>
                </div>
            </Jumbotron>
        </div>
    );
};

export default Header;