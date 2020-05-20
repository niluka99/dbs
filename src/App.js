import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScriptTag from 'react-script-tag';
import $ from 'jquery';
import './canvas.js';
import glue from './imgs/glue.svg'
import scissor from './imgs/scissor.svg'
import rem from './imgs/eraser.svg'
import cir from './imgs/circle.jpg'
import squ from './imgs/squ.png'
import tri from './imgs/tri.svg'





function App() {
  return (
    <div className="App">

      <h3>Play with Shapes</h3>
      <hr></hr>
      <div>
        <button width="32" height="32" id="b3"><img src={tri} alt="Draw Trigangle" width="32" height="32" /> Draw Trigangle </button>
        <button width="32" height="32" id="b2"> <img src={cir} alt="Draw Circle" width="32" height="32" /> Draw Circle</button>
        <button width="32" height="32" id="b1" > <img src={squ} alt="Draw Rectangle" width="32" height="32" />Draw Rectangle </button >
        <button width="32" height="32" id="b4" > <img src={scissor} alt="scissor" width="32" height="32" />Scrissor </button >
        <button width="32" height="32" id="b5" > <img src={glue} alt="glue" width="32" height="32" />Glue</button >
        <button width="32" height="32" id="b6" > <img src={rem} alt="eraser" width="32" height="32" />Eraser</button >
      </div > <br />
      <div>
        <canvas id="canvas" width="1200" height="300"></canvas>
      </div>
      <ScriptTag isHydrating={true} type="text/javascript" src="./canvas.js" />;

    </div>

  );
}


export default App;
