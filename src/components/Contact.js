import React, { Component } from 'react';
import '../styles/Contact.css'


class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:[e.target.value]
    })
  }

  render() {
    return (
      <div id="contact">
        <form>
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          <input type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
          <textarea rows="25" cols="50" placeholder="message" name="message" value={this.state.message} onChange={this.handleChange}/>
          <br/>
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
