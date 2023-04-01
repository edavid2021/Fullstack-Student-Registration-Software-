import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
    return(
        <React.Fragment>
        <Navbar bg="dark" expand='lg' variant='dark'>
            <Container>
            <Navbar.Brand color="white">Student Server</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link> <Link to="/">Index</Link></Nav.Link>
                        <Nav.Link><Link to="/add">Add Student</Link></Nav.Link>
                        
                    </Nav>
        </Navbar.Collapse>
        </Container>    
        </Navbar>
        </React.Fragment>
    )
}

export default Navi