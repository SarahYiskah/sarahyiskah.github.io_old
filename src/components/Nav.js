import React, { Component } from 'react';
import '../styles/Nav.css'


class Nav extends Component {
  render() {
    return (
      <div id="nav">
        <h3 className="title" style={{"fontWeight":"100", "paddingTop":"15px"}}>SARAH YISKAH</h3>
        <span style={{"letterSpacing":"-0.5px"}}>_____</span>
        <h3
          onClick={() => this.props.changeActive("about")}
          style={this.props.active === "about" ? {"text-decoration": "underline"} : null }>
          <a href="#about">About</a>
        </h3>
        <h3
          onClick={() => this.props.changeActive("portfolio")}
          style={this.props.active === "portfolio" ? {"text-decoration": "underline"} : null }>
          <a href="#portfolio">Projects</a>
        </h3>
        <h3
          onClick={() => this.props.changeActive("blog")}
          style={this.props.active === "blog" ? {"text-decoration": "underline"} : null }>
          <a href="#blog">Blog</a>
        </h3>
        {/*<h3
          onClick={() => this.props.changeActive("contact")}
          style={this.props.active === "contact" ? {"text-decoration": "underline"} : null }>
          <a href="#contact">Contact</a>
        </h3>*/}
      </div>
    );
  }
}

export default Nav;
