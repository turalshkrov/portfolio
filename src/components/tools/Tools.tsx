import toolsData from '../../data/tools.json'
import ToolCard from '../toolCard/ToolCard';
import { ToolType } from '../toolCard/ToolCard';

const tools: ToolType[] = toolsData.tools

export default function Tools() {
  return (
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
  )
}
