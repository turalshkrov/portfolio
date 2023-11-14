import ProjectCard from '../../components/projectCard/ProjectCard'
import toolsData from '../../data/tools.json'
import projectsData from '../../data/projects.json'
import './Home.css'

type ToolType = {
  title: string,
  ['img-url']: string
}
const tools: ToolType[] = toolsData.tools

type ProjectType = {
  title: string,
  ['site-url']: string,
  ['repo-url']: string,
  ['img-url']: string
}
const projects: ProjectType[] = projectsData.projects
const project = {
  title: "JS Calculator",
  ['site-url']: 'https://shkrov-js-calculator.netlify.app/',
  ['repo-url']: 'https://github.com/turalshkrov/JavaScript-calculator',
  ['img-url']: 'https://s3-alpha.figma.com/hub/file/1306859477/6044dae3-ab28-459e-b50e-6195c8a2039c-cover.png'
}

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
            tools.map((tool) => {
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
      <section className="projects">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="projects row justify-content-center">
          {
            projects.map(project => {
              return(
                <ProjectCard project={project} key={project['repo-url']}/>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
