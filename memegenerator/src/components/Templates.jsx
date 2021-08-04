import React from 'react'
import Template from './Template'
import "./Templates.css"
const Templates = ({templates,setMeme}) => {
    return (
        <div className="templates">
          {templates.map((template)=>(
              <Template key={template.id} template={template} setMeme={setMeme}/>
          ))} 
        </div>
    )
}

export default Templates
