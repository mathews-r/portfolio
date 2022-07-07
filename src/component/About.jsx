import React, { Component } from 'react'
import Churrasco from '../images/bg-churrasco.jpg';
import Violao from '../images/bg-music.jpg';
import '../styles/about.css';
import '../styles/style.css';

export default class About extends Component {
  render() {
    return (
      <section id="sec-one">
        
    <article class="article-one">
      <div class="div-img-article">
        <img class="img-article" src={Violao} alt="Foto de violão" />
      </div>
      
        <p>
        <span id="spantrybe"> Brasileiro, mineiro e estudante de Desenvolvimento Web na <strong>Trybe</strong>
        <br />Tenho 29 anos e atualmente moro em Barra Mansa - RJ.
        <br />Nas horas vagas gosto de ouvir músicas e fazer um bom churrasco!
        <br />Apaixonado por tecnologia, gosto de aprender coisas novas.</span>.
      </p>

      <div class="div-img-article">
        <img class="img-article" src={Churrasco} alt="Foto de churrasco" />
      </div>

    </article>
  </section>

    )
  }
}
