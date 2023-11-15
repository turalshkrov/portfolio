import { Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'

export default function Header() {
  return (
    <header>
      <Navbar expand="md" data-bs-theme="dark" className=''>
        <Container>
          <Navbar.Brand>Tural Shukurov</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-2 ms-md-auto py-3 py-md-0">
              <Nav.Link href='#about' className='nav-link me-4'>About</Nav.Link>
              <Nav.Link href='#projects' className='nav-link me-4'>Projects</Nav.Link>
              <Nav.Link href='#contact' className='nav-link'>Contact</Nav.Link>
              {/* <NavDropdown title="AZE" id="languages" className='ms-3'>
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
