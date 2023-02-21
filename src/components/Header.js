import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/addUser">Add User</Nav.Link>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
          </Nav>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header