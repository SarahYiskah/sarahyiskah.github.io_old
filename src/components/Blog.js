import React, { Component } from 'react';
import '../styles/Blog.css'


class Blog extends Component {
  render() {
    return (
      <div id="blog" onMouseOver={() => this.props.changeActive("blog")}>
      <img src={require('../images/blog-background2.png')} />
      <h1 className="title">BLOG</h1>
      <div id="post">
      <a href="https://medium.com/@97sarahy/good-coding-standards-to-aim-for-477d35501f30" target="_blank"><h2>Good Coding Standards To Aim For</h2>
      <p id="deets">Sarah Y. Eichenstein &#8231; Feb 14, 2018 - 4 min read</p>
      <img src={require('../images/coding-pic.jpg')} />
      </a><br/>
      </div>
      <a href="https://medium.com/@97sarahy/" target="_blank"><div id="button">More Articles</div></a>
      </div>
    );
  }
}

export default Blog;
