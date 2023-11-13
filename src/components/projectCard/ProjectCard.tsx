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
    <Card data-bs-theme="dark" className="project-card">
      <div className="project-card-img">
        <Card.Img variant="top" src={project["img-url"]}/>
      </div>
      <Card.Body className="p-3">
        <Card.Title><a href={project["site-url"]}>{project.title}</a></Card.Title>
        <Card.Text><a href={project["repo-url"]} className="secondary">Show Repository</a></Card.Text>
      </Card.Body>
    </Card>
  )
}
