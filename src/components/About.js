import React, { Component } from 'react';
import '../styles/About.css'


class About extends Component {
  render() {
    return (
      <div id="about" onMouseOver={() => this.props.changeActive("about")}>
      <div id="background"/>
      <div className="info">
        <img src={require('../images/profilepic.jpeg')} />
        <h1 id="baseline">________</h1>
        <div className="text">
          <h1 className="title">ABOUT ME</h1>
          <p>Hi there! <br/><br/>
          I am a full stack web developer with a passion for creating positive user experiences. I have practice in Ruby on Rails, JavaScript, React and Redux. I enjoy problem solving and have an aptitude for learning new languages quickly.
          <br/><br/>
          &lt; 3<br/>
          Sarah Yiskah Eichenstein
          </p>
          <br/><br/>
          <a href={require("../images/resume.pdf")} download="Sarah Eichenstein Resume">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          <span style={{"paddingLeft":"10px","paddingRight":"10px"}}>My Resume</span></a>
          {/*<h1 id="coding">&lt;/&gt;</h1>*/}
        </div>
      </div>
      </div>
    );
  }
}

export default About;
