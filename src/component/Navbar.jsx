import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css'
import '../styles/nav.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav id="nav-menu">
        <ul id="ul-menu">

          <Link href="#sec-one"><li className="li-menu">HOME</li></Link>
          <Link to="#about"><li className="li-menu">SOBRE MIM</li></Link>
          <Link to="#central-box"><li className="li-menu">PROJETOS</li></Link>
          <Link to="#contact"> <li className="li-menu">CONTATO</li></Link>

        </ul>
      </nav>
    )
  }
}

export default Navbar;