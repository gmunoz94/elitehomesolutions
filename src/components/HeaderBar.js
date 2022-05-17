import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from '../assets/Logo-TRANS.png'
import './Components.css';

function HeaderBar() {
  return (
    <>
        <Navbar className="navbar-expand-lg bg-secondary" id="mainNav">
            <Container>
                <Navbar.Brand className="text-secondary" href="./"><img src={Logo} /></Navbar.Brand>
                <Navbar.Toggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <NavDropdown className='bg-secondary' title="Carpet Cleaning">
                            <NavDropdown.Item href='/services/steam-cleaning'>Steam Carpet Cleaning</NavDropdown.Item>
                            <NavDropdown.Item href='/services/tile-grout'>Tile & Grout Cleaning</NavDropdown.Item>
                            <NavDropdown.Item href='/services/upholstery'>Upholstery Cleaning</NavDropdown.Item>
                            <NavDropdown.Item href='/services/area-rug'>Area Rug Cleaning</NavDropdown.Item>
                            <NavDropdown.Item href='/services/pet-stain-odor'>Pet Stain & Odor Removal</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/coupons">Coupons</Nav.Link>
                        <Nav.Link href="/services/other">Other Services</Nav.Link>
                        <Nav.Link href="/FAQs">FAQs</Nav.Link>
                        <Nav.Link href="https://booking.moego.pet/go/?name=SoggyDoggy" target="_blank" rel='noreferrer'>Book Online</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default HeaderBar