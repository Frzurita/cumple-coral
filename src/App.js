import React from 'react';
import './App.css';
import background from './flowers.jpeg'
import tarta from './tarta.jpeg'

const App = () => {
    return (
  <div class="container" style={{backgroundImage: `url(${background})`}}>
    <div class="card">
      <div class="imgBox">
        <div class="bark"></div>
        <div class="front">
          <h1>Feliz cumpleaños!!</h1>
          <img src={tarta}  width={'200px'} height={'190px'} alt='cake'/>
          <h3>One last surprise!</h3>
        </div>
      </div>
      <div class="details">
        <h2 class="color1">Nos congratula decir que has recibido</h2>
        <h3 class="color2 margin">Un vuelo de ida y vuelta a:</h3>
        <p>Japón!! </p>
        <p>Para Enero/Mayo del año que viene:</p>
        <div class="span"></div>
        <p>Osaka, Kioto, Hiroshima, Nara,</p>
        <p>Shirakawago, Takayama, Nagoya, Tokio</p>
        <div class="span"></div>
        <p>Espero que lo disfrutes :)</p>
        <p class="text-right">Happy Birthday</p>
        <p class="text-right">♥Fran</p>
      </div>
    </div>
  </div>
    );
};

export default App;
