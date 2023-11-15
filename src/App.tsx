import toolsData from './data/tools.json'
import projectsData from './data/projects.json'
import ProjectCard from './components/projectCard/ProjectCard';
import Header from './components/header/Header';
import { Container, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ToolCard from './components/toolCard/ToolCard';

export type ToolType = {
  title: string,
  ['img-url']: string
}
const tools: ToolType[] = toolsData.tools

export type ProjectType = {
  title: string,
  ['site-url']: string,
  ['repo-url']: string,
  ['img-url']: string
}
const projects: ProjectType[] = projectsData.projects
function App() {
  return (
    <Container>
        <Header />
        
        <section className="tooling">
          <div className="section-title">
            <h2>Tooling</h2>
          </div>
          <div className="tools row justify-content-center">
            {
              tools.map((tool) => {
                return(
                  <ToolCard tool={tool} key={tool.title}/>
                )
              })
            }
          </div>
        </section>
        <section className="projects" id='projects'>
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
          <div className="d-flex justify-content-center mt-3 mt-md-4">
            <a href='https://github.com/turalshkrov?tab=repositories' target='_blank'>
              <Button variant='outline-light'>Show More</Button>
            </a>
          </div>
        </section>
      </Container>
  )
}

export default App
