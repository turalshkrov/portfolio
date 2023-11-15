import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Tools from './components/tools/Tools';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Contact from './components/contact/Contact';

function App() {
  return (
  <div>
    <Header />
    <Container>
      <main className="mh-100 d-flex align-items-center" id='about'>
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
      <Tools />
      <Projects />
      <Contact />
    </Container>
  </div>
  )
}

export default App
