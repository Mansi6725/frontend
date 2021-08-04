import React from 'react'
import "./Meme.css";
import {useState} from 'react';
const Meme = ({meme,setMeme}) => {
    const [form,setForm]=useState({
        template_id:meme.id,
        username:"MANSIKESHARI",
        password:"Mansi123:*",
        boxes:[]
    });
     const generateMeme=()=>{
         let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
         form.boxes.map((box,index)=>(url+=`&boxes[${index}][text]=${box.text}`));
         console.log(url);
        fetch(url).then(res=>res.json()).then((data)=>{
            if(meme.box_count===form.boxes.length){
                 setMeme({...meme,url:data.data.url})}
            });
     }
    return (
        <div className="meme">
            <div className="image">
                 <img src={meme.url} alt=""/>
            </div>
            <div>
            {
                [...Array(meme.box_count)].map((el,index)=>(
                    <input type="text" key={index} placeholder={`Meme Caption ${index+1}`} onChange={(e)=>{
                        const newBoxes=form.boxes;
                        newBoxes[index]={text:e.target.value};
                        setForm({...form,boxes:newBoxes})
                    }
                    }/>
                ))
            }
            </div>
            <div className="button">
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={()=>setMeme(null)}>Choose Template</button>
            </div>
        </div>
    )
}

export default Meme
