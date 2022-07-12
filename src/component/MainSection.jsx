import React from "react";
import ImageProg from '../images/imgHome.png';
import Linkedin from '../images/logolinkedin.png';
import Github from '../images/logogithub.png';
import '../styles/style.css';
import '../styles/mainSection.css';

class MainSection extends React.Component {
  render() {
    return (
      <section className="principal" id="principal">

        <div className="div-text">

          <span id="title">
            OLÁ, SEJA BEM VINDO(a)!
            <br />
            EU SOU O <strong>MATHEWS RODRIGUES.</strong>
            <br /><br />
            <p>SOU DESENVOLVEDOR FRONT-END.</p>
          </span>

          <div className="divredesociais">

        <a href='https://www.linkedin.com/in/mathewsrodrigues/' target="_blank" rel="noreferrer">
          <img className='logoredesocial' src={Linkedin} alt="Logo Linkedin"/>
        </a>
        <a href='https://github.com/mathews-r' target="_blank" rel="noreferrer">
          <img className='logoredesocial' src={Github} alt="Logo GitHub" />
        </a>

        </div>

        </div>

        <div className="div-image">
          <img id="photo-devices" src={ImageProg} alt="Imagem simbolizando programação em varios dispositivos" />
        </div>

      </section>
    )
  }
}

export default MainSection;