import projectsData from '../../data/projects.json'
import ProjectCard from '../projectCard/ProjectCard';
import { Project } from "../projectCard/ProjectCard"
import { Button } from 'react-bootstrap';

const projects: Project[] = projectsData.projects

export default function Projects() {
  return (
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
  )
}
