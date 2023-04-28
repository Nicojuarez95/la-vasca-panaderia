import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as Anchor } from "react-router-dom";
import logo from "../../Images/LaVascaLogo.png"
import "./header.css"

export default function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" className="header">
      <Container>
        <Anchor to="/home"><img src={logo} alt="" className="logo"/></Anchor>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Anchor to="/home" className="ancord">Inicio</Anchor>
            <Anchor to="/Nosotros" className="ancord">Quienes somos</Anchor>
            <Anchor to="/contact" className="ancord">Contáctanos</Anchor>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
