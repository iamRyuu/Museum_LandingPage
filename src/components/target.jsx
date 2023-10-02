import React from "react";
import '../styles/target.css'

function Target(props){
  return(
    <div className="content">
      <div className="content-txt">
        <h3>
          {props.titulo}
        </h3>
        <p>
          {props.text_about}<span className="span_txt">...leer</span>
        </p>
      </div>
      <div className="content-img">
        <img 
          className='image-cont'
          src={require(`../img/targets/target-${props.imagen}.jpg`)}
          alt={'Foto-de-${props.imagen}'}
        />
      </div>
    </div>
  );
}

export default Target;