import React from 'react';
import '../App.css';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';
import Section from './Section';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Navbar />
      <Section />
      <Footer />
      </>
    )
  }
}

export default App;
