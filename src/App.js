import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'



class App extends Component {
  constructor() {
    super()

    this.state = {
      active: 'about'
    }
  }

  changeActive = (name) => {
    this.setState({
      active: name
    })
  }

  render() {
    return (
      <div className="App">
      <Nav active={this.state.active} changeActive={this.changeActive}/>
      <About changeActive={this.changeActive}/>
      <Portfolio changeActive={this.changeActive}/>
      <Blog changeActive={this.changeActive}/>
      <Contact changeActive={this.changeActive}/>
      <Footer />
      </div>
    );
  }
}

export default App;
