import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='row mt-3 bg-dark border rounded'>
            <div className="col-lg-5 col-sm-4 mt-1">
            <h2 className='fw-bold text-primary d-inline'>E-LEARNING</h2>
            </div>
            <div className="col-lg-7 col-sm-8 mt-2 headr-style text-center bg-dark">
                <Navbar expand="lg">
         <Navbar.Toggle/>
         <Navbar.Collapse>
         <Nav>
         <Link to="/home">Home</Link>
                <Link to="/course">Course</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
       </Nav>
      </Navbar.Collapse>
       </Navbar>
               
            </div>
        </div>
    );
};

export default Header;