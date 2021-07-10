import {useState} from "react";
import "./Comp.css";
function Comp2(){
 const [state,setState]=useState(0);
 return(
  <div className="comp" onClick={()=>setState(state+1)}>
      <h1>{state}</h1>
  </div>
 );
}
export default Comp2;