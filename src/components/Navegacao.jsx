import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import '../styles/Navegacao.css';    

const MyNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Navbar expand="lg" className={`mx-5 navCor sticky-top ${showNavbar ? 'show' : 'hide'}`}>
      <Container>
        <Navbar.Brand href="#home">Victor.B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Scrollspy
            items={['home', 'sobre', 'skills', 'projetos', 'contato']} 
            currentClassName="is-active"
            className="navbar-nav ms-auto"> 
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projetos">Projetos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Scrollspy>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;