import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Navbar, Nav, NavDropdown, Button} from "react-bootstrap";

class Navigation extends React.Component{

    render() {
        return(

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Test Dapp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">dApp</Nav.Link>
                <Nav.Link href="#link">How To</Nav.Link>
                <NavDropdown title="Select Token" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">WETH</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">DAI</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">USDC</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Navigation;