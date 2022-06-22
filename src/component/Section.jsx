import React from "react";
import Mathews from '../images/fotomathews.png';
import '../style.css'

class Section extends React.Component {
  render() {
    return (
      <section id="sec-one">
        <div className="div-text">
          <span id="title">
            Olá, seja bem vindo(a)!
            <br />
            Eu sou o <strong>Mathews.</strong>
            <br /><br />
            
            <p>Sou desenvolvedor Front-End.</p>
          </span>
        </div>
        <div className="div-image">
          <img id="photo-mathews" src={Mathews} alt="Foto do Mathews" />
        </div>
      </section>
    )
  }
}

export default Section;