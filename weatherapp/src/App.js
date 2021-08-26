
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState} from "react";
// const placedata=()=>{
//   fetch("http://api.weatherapi.com/v1/current.json?key=95ab28abf0b74b61a11103833212608&q=varanasi")
//   .then(res=>res.json())
//   .then((data)=>setPlaceData(data));
// };
function App() {
  const [place,setPlace]=useState("");
  const [placeData,setPlaceData]=useState({});
  const updateplacedata=()=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=95ab28abf0b74b61a11103833212608&q=${place}`)
    .then(res=>res.json())
    .then((data)=>{setPlaceData(data);console.log(data);});
  };
  return (
    <div className="App">
     <div className="container">
       <div className="row">
         <div className="col-12 form">
           <input type="text" value={place} onChange={(e)=>{setPlace(e.target.value)}}/>
           <button className="btn btn-primary" onClick={updateplacedata}>Submit</button>
         </div>
         <div className="offset-md-4 col-12 col-md-4 weather">
            {placeData.location?(
              <div className="contain">
                <img src={placeData.current.condition.icon} alt=""/>
                <div className="temp">{placeData.current.temp_c}°C</div>
                <div className="text">{placeData.current.condition.text}</div>
                <div className="place">{placeData.location.name}</div>
                <div className="container">
                  <div className="row whp">
                    <div className="col">
                      <div className="title">Wind Now</div>
                      <div className="data">{placeData.current.wind_kph}<span className="unit">kph</span></div>
                    </div>
                    <div className="col">
                    <div className="title">Humidity</div>
                      <div className="data">{placeData.current.humidity}<span className="unit">%</span></div>
                    </div>
                    <div className="col">
                    <div className="title">precipitation</div>
                      <div className="data">{placeData.current.precip_in}<span className="unit">inches</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ):(<h2>Place Not Found</h2>)}
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;
