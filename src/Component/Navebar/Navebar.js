import React, { useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import './Navebar.css'

const Navebar = () => {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY >10
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
    return (
      <>
      <div className='d-none d-lg-block'>
      <Navbar collapseOnSelect expand="lg" fixed="top"style={{ transition: '1s ease',backgroundColor: navBackground ? 'white' : 'transparent',padding:"15px 0"}}>
          <Container> 
            <Navbar.Brand as={Link} to="/">
           <img className='img-fluid dizme-img' src={logo} alt="" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
               <Nav.Link as={Link} to="/about">About</Nav.Link>
               <Nav.Link as={Link} to="/portfolio">My Portfolio</Nav.Link>  
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className='d-block d-lg-none'>
      <Navbar collapseOnSelect expand="lg" sticky="top" className='bg'>
          <Container> 
            <Navbar.Brand as={Link} to="/">
           <img className='img-fluid dizme-img' src={logo} alt="" />
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
               <Nav.Link as={Link} to="/about">About</Nav.Link>
               <Nav.Link as={Link} to="/portfolio">My Portfolio</Nav.Link>  
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  
    );
};

export default Navebar;