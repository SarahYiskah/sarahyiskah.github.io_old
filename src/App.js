import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
