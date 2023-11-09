import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import './Header.css'

export default function Header() {
  return (
    <header>
      <Navbar expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tural Shukurov</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="AZE" id="basic-nav-dropdown" className='ms-3'>
                <NavDropdown.Item>AZE</NavDropdown.Item>
                <NavDropdown.Item>ENG</NavDropdown.Item>
                <NavDropdown.Item>DEU</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
