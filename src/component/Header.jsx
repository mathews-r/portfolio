import React from 'react';
import '../styles/header.css';
import '../styles/style.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
    <header id='header'>

      <p id="p"><Link to="#home"><h1>‹MR/›</h1></Link></p>
      <nav id="nav-menu">

        <ul id="ul-menu">

          <Link href="#sec-one"><li className="li-menu">HOME</li></Link>
          <Link to="#about"><li className="li-menu">SOBRE MIM</li></Link>
          <Link to="#central-box"><li className="li-menu">PROJETOS</li></Link>
          <Link to="#contact"> <li className="li-menu">CONTATO</li></Link>

        </ul>
      </nav>

    </header>

  )}
}

export default Header;