import React from 'react';
import '../styles/header.css';
import '../styles/style.css';

class Header extends React.Component {
  render() {
    return <>
    <header id='header'>
      <h1><span className='title-header'>Mathews</span> <strong id='strong-header'>Rodrigues</strong></h1>
    </header>
    </> 
  }
}

export default Header;