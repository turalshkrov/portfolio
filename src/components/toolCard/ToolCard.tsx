import './ToolCard.css'

export type ToolType = {
  title: string,
  ['img-url']: string
}

export default function ToolCard(prop: { tool: ToolType }) {
  const { tool } = prop
  return (
    <div className='tool-item col-3 col-md-2 d-flex flex-column align-items-center justify-content-end mb-5' key={tool.title}>
      <img src={tool['img-url']}/>
      <p className='mt-2 mt-md-3 mb-0 fw-bold'>{tool["title"]}</p>
    </div>
  )
}
