import React from 'react';
import { Button, Form, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="pt-3 pb-3 container-fluid">
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand href="/home"><img src={logo} className="brand-logo" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="nav-link" className="ml-auto d-flex justify-content-space-between">
                        <Link className="m-2 text-dark" to="/home">Home</Link>
                        <Link className="m-2 text-dark" to="/donation">Donation</Link>
                        <Link className="m-2 text-dark" to="/addEvent">Events</Link>
                        <Link className="m-2 text-dark" to="/login">Login</Link>
                        <Link className="m-2 text-dark" to="/blog">Blog</Link>
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