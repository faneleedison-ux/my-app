import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: gray; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
   
    &:hover { color: darkgray; }
  }
  .navbar-brand {
    font-size: 5em;
    color: white;
    &:hover { color: darkgray; }
  }
  .form-center {
    position: absolute !important;
    left: 70%;
    right: 1%;
    
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">SEE HER</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search Survivor Story" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
         
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)