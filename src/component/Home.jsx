import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import Section from './Section';
import About from './About';
import Projects from './Projects';

export default class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <Navbar />
      <Section />
      <About />
      <Projects />
      <Footer />
      </>
    )
  }
}
