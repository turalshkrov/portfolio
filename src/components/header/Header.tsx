import { Container, Nav, Navbar } from 'react-bootstrap'
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
              <Nav.Link href='#home' className='nav-link'>Home</Nav.Link>
              <Nav.Link href='#projects' className='nav-link'>Projects</Nav.Link>
              <Nav.Link href='#about' className='nav-link'>About</Nav.Link>
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
      <main className="mh-100 d-flex align-items-center" id='home'>
          <div className="main-content">
            <h1 className='greeting'>Welcome 🖐</h1>
            <p className='home-about-text ps-3 ps-md-4 py-4 my-4'>
              My name is Tural Shukurov. I'm a jr front-end developer in Baku, Azerbaijan. 
              I also study Master's of Artificial Intelligence at ASOIU.
              I continue to learn and improve my knowledge and skills.
              I enjoy working with React, TypeScript and other frameworks and libraries.
            </p>
          </div>
        </main>
    </header>
  )
}
