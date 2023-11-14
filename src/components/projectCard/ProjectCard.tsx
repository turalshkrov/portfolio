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
    <div className="col-12 col-md-3 p-0">
      <Card data-bs-theme="dark" className="project-card m-4 m-md-2">
        <div className="project-card-img">
          <Card.Img variant="top" src={project["img-url"]}/>
        </div>
        <Card.Body className="p-3">
          <Card.Title><a href={project["site-url"]} target="_blank" className="card-title-link">{project.title}</a></Card.Title>
          <Card.Text><a href={project["repo-url"]} target="_blank" className="card-repo-link">Show Repository</a></Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
