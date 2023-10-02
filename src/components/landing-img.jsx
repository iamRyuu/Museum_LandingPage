import React from "react";
import '../styles/landing-img.css'

function ImgLanding (props){
  return(
    <div className='contenedor'>
      <img 
        className='imagen'
        src={require(`../img/landing-${props.img}.png`)}
        alt={'Foto-de-${props.img}'}
      />
    </div>
  );
}

export default ImgLanding;