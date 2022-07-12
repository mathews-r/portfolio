import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import About from './About';
import Projects from './Projects';

export default class Home extends Component {
  render() {
    console.log(`    Quer entrar em contato comigo? 
    Me mande um email! 
    mathewsrodrigues9@gmail.com`)
    return (
      <>
      <Header />
      <MainSection />
      <About />
      <Projects />
      <Footer />
      </>
    )
  }
}
