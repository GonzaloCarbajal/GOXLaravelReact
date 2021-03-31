import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../Imagenes/GOX_HEADER.png';
import {LinkContainer} from 'react-router-bootstrap';
import {DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";

const Menu = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/home">
            <Navbar.Brand>
                <img src={logo} alt="" style={{width: "50px", height: "50px"}}/>
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/home">
                    <Nav.Link>Home PRUEBA</Nav.Link>
                </LinkContainer>
                <NavDropdownMenu title="ACCESORIOS" id="collasible-nav-dropdown" style={{width: '1000px'}}>

                    <LinkContainer to="/producto">
                        <NavDropdown.Item>Cadenas</NavDropdown.Item>
                    </LinkContainer>

                    <DropdownSubmenu title="Accesorios">
                        <LinkContainer to="/producto">
                            <NavDropdown.Item>Gorras</NavDropdown.Item>
                        </LinkContainer>
                        <DropdownSubmenu title="Gorritas">
                            <LinkContainer to="/producto">
                                <NavDropdown.Item>
                                    Gorritas 1
                                </NavDropdown.Item>
                            </LinkContainer>
                        </DropdownSubmenu>
                    </DropdownSubmenu>
                </NavDropdownMenu>

                <LinkContainer to="/acerca_de">
                    <Nav.Link>Acerca de Nosotros PRUEBA</Nav.Link>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Menu
