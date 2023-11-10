import { Container } from 'react-bootstrap'
import Header from '../../components/header/Header'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <div className="margin-top">
          <h1 className='greeting'>Welcome 🖐</h1>
          <p className='home-about-text ps-3 ps-md-4 py-4 my-4'>
            My name is Tural Shukurov. I'm a jr front-end developer in Baku, Azerbaijan. 
            I also study Master's of Artificial Intelligence at ASOIU.
            I continue to learn and improve my knowledge and skills.
            I enjoy working with React, TypeScript and other frameworks and libraries.
          </p>
        </div>
        
      </Container>
    </div>
  )
}
