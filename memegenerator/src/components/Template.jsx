import React from 'react';
import "./Template.css";
const Template = ({template,setMeme}) => {
    return (
        <div className="template" style={{backgroundImage:`url(${template.url})`} } onClick={()=>setMeme(template)}>
            
        </div>
    )
}

export default Template
