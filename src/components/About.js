import React, { Component } from 'react';
import '../styles/About.css'


class About extends Component {
  render() {
    return (
      <div id="about" onMouseOver={() => this.props.changeActive("about")}>
      <h1>ABOUT ME</h1>
      <img src={require('../images/linkedin-whatsapp.jpeg')} />
      <p>Hi there! I am a full stack web developer with a passion for creating positive user experiences. I have practice in Ruby on Rails, JavaScript, React and Redux. I enjoy problem solving and have an aptitude for learning new languages quickly.</p>
      <br />
      <a href={require("../images/resume.pdf")} download="Sarah Eichenstein Resume">Download my resume</a>
      </div>
    );
  }
}

export default About;
