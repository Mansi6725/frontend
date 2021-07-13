import './App.css';
import Card from "./components/Card";
import {useState} from "react";


function App() {
  const [details,setDetails]=useState([
    {name:"Burger",calorie:70},
  {name:"Coke",calorie:500},
  {name:"Browne",calorie:180},
  {name:"Pizza",calorie:266},
  {name:"Milk",calorie:42}
]);
  return (
    <div className="App">
      <div className="container">
         {details.length!==0?
           details.map((detail,key)=>(
             <Card key={key} name={detail.name} calorie={detail.calorie} index={key} details={details} setDetails={setDetails}/>
         )):
         <h1>No Entry</h1>
         }
      </div>
    </div>
  );
}

export default App;
