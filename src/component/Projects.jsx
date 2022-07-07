import React, { Component } from 'react'
import '../styles/projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section id="central-box">

<div class="projetos">
  <div id="projetosOficiais">
    <p class="p-projects"><strong>Projetos Oficias</strong></p>
    <ul>
      <li >- Projeto Lessons Learned</li>
      <li >- Projeto Pixels Art - Brincando com Pixels</li>
      <li >- Projeto TrybeWarts - A escola de magias da Trybe</li>
      <li >- Projeto Shopping Cart - Carrinho de Compras</li>
      <li >- Projeto Sistema Solar</li>
    </ul>
  </div>

  <div id="projetosExtras">
    <p class="p-projects"><strong>Projetos Extras</strong></p>
    <ul>
      <li >- Jogo da Velha</li>
      <li >- Relógio JavaScript</li>
      <li >- Web Weather</li>
      <li >- To do List</li>
    </ul>
  </div>
</div>

</section>
    )
  }
}
