import React, { Component } from 'react';
import '../styles/Notification.css';


class Notification extends Component {
  state = {
    show: true
  }

  render() {
    const { show } = this.state;
    return (
      show ?
      <div id="notification">
        <div />
        <h3 className="title">Updates Coming</h3>
        <h3 className="close" onClick={() => this.setState({show: false})}>X</h3>
      </div>
      : <div />
    );
  }
}

export default Notification;
