import React, { Component } from 'react'
import '../styles/projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section className="central-box" id="#central-box">

<div className="projetos">
  <div id="projetosOficiais">
    <p className="p-projects"><strong>Projetos Oficias</strong></p>
    <ul>
      <li >- Projeto Pixels Art - Brincando com Pixels</li>
      <li >- Projeto Shopping Cart - Carrinho de Compras</li>
    </ul>
  </div>

  <div id="projetosExtras">
    <p className="p-projects"><strong>Projetos Extras</strong></p>
    <ul>
      <li >- Jogo da Velha</li>
      <li >- Relógio JavaScript</li>
      <li >- Web Weather</li>
    </ul>
  </div>
</div>

</section>
    )
  }
}
