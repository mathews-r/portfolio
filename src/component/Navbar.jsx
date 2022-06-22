import React from "react";
import '../style.css'

class Navbar extends React.Component {
  render() {
    return (
      <nav id="nav-menu">
        <ul id="ul-menu">
          <li className="li-menu">HOME</li>
          <li className="li-menu">SOBRE MIM</li>
          <li className="li-menu">PROJETOS</li>
          <li className="li-menu">CONTATO</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;