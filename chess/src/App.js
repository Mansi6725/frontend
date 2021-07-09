// import logo from './logo.svg';
import React from 'react';
import './App.css';

const Row = ({startColor, alternateColor}) => {
  let a = [11, 12, 13, 14, 15, 16, 17, 18];
  return(
    <div className='row'>
    {
      a.map((element, boxkey) => (
        <div className='box' key={element} style={{backgroundColor: boxkey % 2 !== 0 ? startColor : alternateColor}}></div>
      )) 
    }
    </div>
  );
}

function App() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8];
  // const [startColor, setStartColor] = useState('#fff');
  // const [alternateColor, setAlternateColor] = useState('#000');
  let startColor = '#fff';
  let alternateColor = '#000';
  return (
    <div className="App">
      <div className="container">
      {/* {
        a.map((element, key) => {
          return(
            <div key={element || key}> {
              b.map((element, boxkey) => (
                <div className='box' key={boxkey || element} style={{backgroundColor: boxkey % 2 !== 0 ? alternateColor : rowStartColor}}></div>
              )) }
            </div>
          );
        })
      } */}
      {
        a.map((element, key) => {
          if(startColor === '#000') {
            startColor = '#fff'
            alternateColor = '#000'
          }
          else {
            startColor = '#000'
            alternateColor = '#fff'
          }
          return(<Row startColor={startColor} alternateColor={alternateColor} key={key} />)
        })
      }
    </div>
    </div>
  );
}

export default App;