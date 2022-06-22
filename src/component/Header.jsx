import React from 'react';
import '../style.css';

class Header extends React.Component {
  render() {
    return <>
    <header id='header'>
      <h1><span className='title-header'>Port</span><strong id='strong-header'>fólio</strong></h1>
    </header>
    </> 
  }
}

export default Header;