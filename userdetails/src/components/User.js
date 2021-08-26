import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { useraction } from './redux/action/useraction';
// import { passaction } from './redux/action/passaction';
import { emailaction } from './redux/action/emailaction';
import "./User.css"
export const User = () => {
    let user=useSelector(state=>state.user);
    const email=useSelector(state=>state.email);
    // const pass=useSelector(state=>state.pass);
    const dispatch=useDispatch();
    return (
        <div className="user">
           <label>User Name:</label> <input value={user} onChange={(event)=>dispatch(useraction(event.target.value))}></input><br/>
           <label>Email:</label><input type="email" value={email} onChange={(event)=>dispatch(emailaction(event.target.value))}></input><br/>
           {/* <label>Password:</label><input type="password" value={pass} onChange={(event)=>dispatch(passaction(event.target.value))}></input> */}
           <div className="data">
               Data
               <div className="hide detail">
                   Name:{user}<br/>
                   Email:{email}<br/>
                   {/* Password:{pass}<br/> */}
               </div>
               <button onClick={()=>{const show=document.querySelector(".detail");show.classList.replace("hide","show");}}>Submit</button>
           </div>

        </div>
    )
}
