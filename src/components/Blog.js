import React, { Component } from 'react';
import '../styles/Blog.css'


class Blog extends Component {
  render() {
    return (
      <div id="blog" onMouseOver={() => this.props.changeActive("blog")}>
      <h1>MY BLOG POSTS</h1>
      <a href="https://medium.com/@97sarahy/good-coding-standards-to-aim-for-477d35501f30" target="_blank">Good Coding Standards To Aim For<br/>
      <p>Experience in programming over the last few decades has shown that there are good coding practices and there are bad coding practices…</p>
      <p>Published on Feb 14 &#8231; 4 min read</p>
      </a>
      <hr />
      <a href="https://medium.com/@97sarahy/snippets-in-atom-54838ce064f9" target="_blank">Snippets in atom<br/>
      <p>“Snippets” are shortcuts of code. These shortcuts can live inside the Atom editor once they’re set up. Instead of having to type out a…</p>
      <p>Published on Feb 28 &#8231; 4 min read</p>
      </a>
      <hr />
      <a href="https://medium.com/@97sarahy/how-to-handle-a-technical-interview-1f13041299d3" target="_blank">How to handle a technical interview<br/>
      <p>Here is an example of an interview question given by Google.</p>
      <p>Published on Mar 21 &#8231; 3 min read</p>
      </a>
      <hr />
      <a href="https://medium.com/@97sarahy/debouncing-2c9e7ee15108" target="_blank">Debouncing<br/>
      <p>There are some browser events that can fire frequently in a short space of time, such as resizing a window, scrolling on a page or…</p>
      <p>Published on Apr 11 &#8231; 2 min read</p>
      </a>
      <hr />
      </div>
    );
  }
}

export default Blog;
