import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/cardprojects.css';
import Paletas from '../images/paletas.png';

export default class CardProject extends Component {
  render() {
    return (
      <div className="card-projects">
        <Link to=""><img className="img-projects" src={Paletas} alt="Capa do Projeto" /></Link>
        <h3>Pixels Art</h3>
        <h4>
          Tecnologias utilizadas no projeto: DOM, JavaScript
        </h4>
        <Link to=""><button className="button-project" type="button">Visualizar</button></Link>
      </div>
    )
  }
}
