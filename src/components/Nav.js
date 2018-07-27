import React, { Component } from 'react';
import '../styles/Nav.css'


class Nav extends Component {
  render() {
    return (
      <div id="nav">
      <h3></h3>
      <h3></h3>
      <h3><a href="about">ABOUT</a></h3>
      <h3><a href="#portfolio">PORTFOLIO</a></h3>
      <h3><a href="#blog">BLOG</a></h3>
      <h3><a href="#contact">CONTACT</a></h3>
      <h3></h3>
      <h3></h3>
      </div>
    );
  }
}

export default Nav;
