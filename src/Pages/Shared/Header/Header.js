import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css'

const Header = () => {
    const[user] = useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" bg="" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Fitness-Press</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              {
                  user ?    <Nav.Link onClick={handleSignOut}>
                  Sign Out
                </Nav.Link>  :
              
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link> }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
