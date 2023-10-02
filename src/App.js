import './App.css';
import React from 'react';
import ImgLanding from './components/landing-img';
import img from '../src/img/landing-museum.png';
import Target from './components/target';

function App() {
  return (
    <div className="App">
      <header className='head'>
        <h1>Museum-LandingPage</h1>
      </header>
      <div className='landing-museum'>
        <img
          src={img}
          alt='Museum photo'
        />
      </div>
      
      <div className='introducction'>
        <h2>¿Quienes somos?</h2>
        <p>
          El Museo Nacional de Nicaragua “Diocleciano Chaves” da inicio en el año de 1896, impulsado por uno de los científicos nicaragüenses más representativos del siglo XIX e inicios del siglo XX, el Señor Diocleciano Chaves, autodidacta, estudioso de la arqueología y la historia natural del país y autor de obras científicas de la flora y la fauna nicaragüense. 
        </p>
        <p>
          Se encuentra ubicado en la primera planta del Palacio Nacional de la Cultura (ex-Congreso Nacional), frente al costado sur de la Plaza de la Revolución
        </p>
      </div>

      <ImgLanding
          img = 'door'
      />

      <div div className='target-container'>
        <Target
          titulo = "Monolito cocolito"
          text_about = "500 años del dialogo de     nuestros padres originarios Cacique NICARAO y Cacique DIRIANGEN"
          imagen = "monolito"
        />

        <Target
          titulo = "Ceremonia Dios Cacao"
          text_about = "Esta tradición se extendioextendió desde MexicoMéxico hasta Nicaragua, en el peridperiodo preclasico medio mesoamermesoamericano"
          imagen = "treedace"
        />

        <Target
          titulo = "Esculturas de arcilla"
          text_about = "Esculturas elaboradas en el perido formativo TISCAPA en transición al periodo primartio Xolotlan"
          imagen = "vasija"
        />

        <button className='send_btn'>¡¡Ver más!!</button>
      </div>

      <ImgLanding
        img = 'stairs'
      />
    </div>
  );
}

export default App;
