import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Header.css'

export default function Header() {
  return (
    <header>
      <Navbar expand="md" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Tural Shukurov</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-2 ms-md-auto py-3 py-md-0">
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/projects' className='nav-link'>Projects</NavLink>
                <NavLink to='/about' className='nav-link'>About</NavLink>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
              {/* <NavDropdown title="AZE" id="basic-nav-dropdown" className='ms-3'>
                <NavDropdown.Item>AZE</NavDropdown.Item>
                <NavDropdown.Item>ENG</NavDropdown.Item>
                <NavDropdown.Item>DEU</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
