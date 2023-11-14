import { Card } from "react-bootstrap"
import './ProjectCard.css'

export type Project = {
  title: string,
  ['site-url']: string,
  ['repo-url']: string,
  ['img-url']: string
}

export default function ProjectCard(props: { project: Project } ) {
  const { project } = props 
  return (
    <Card data-bs-theme="dark" className="project-card mb-4 mb-md-0">
      <div className="project-card-img">
        <a href={project["site-url"]} target="_blank">
          <Card.Img variant="top" src={project["img-url"]}/>
        </a>
      </div>
      <Card.Body className="p-3">
        <Card.Title><a href={project["site-url"]} target="_blank">{project.title}</a></Card.Title>
        <Card.Text><a href={project["repo-url"]} target="_blank" className="secondary">Show Repository</a></Card.Text>
      </Card.Body>
    </Card>
  )
}
