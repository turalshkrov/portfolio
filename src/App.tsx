import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import About from './pages/about/About';
import Header from './components/header/Header';
import { Container } from 'react-bootstrap';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className='container-mt'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
