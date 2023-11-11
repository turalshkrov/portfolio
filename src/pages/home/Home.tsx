import tools from '../../data/tools.json'
import './Home.css'

export default function Home() {
  return (
    <div>
      <main className="mh-100 d-flex align-items-center">
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
      <section className="tooling">
        <div className="section-title">
          <h2>Tooling</h2>
        </div>
        <div className="tools d-flex justify-content-center flex-wrap">
          {
            tools.tools.map((tool) => {
              return(
                <div className='tool-item d-flex flex-column align-items-center justify-content-end mb-5' key={tool.title}>
                  <img src={tool['img-url']}/>
                  <p className='mt-2 mt-md-3 mb-0 fw-bold'>{tool["title"]}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
