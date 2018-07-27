import React, { Component } from 'react';
import '../styles/Portfolio.css'

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      modal: false,
      hover: false,
      currentProject: ''
    }
  }

  openModal = (name) => {
    this.setState({
      modal: true,
      currentProject: name
    })
  }

  closeModal = () => {
    this.setState({
      modal: false,
      currentProject: ''
    })
  }

  openHover = (name) => {
    this.setState({
      hover: true,
      currentProject: name
    })
  }

  closeHover = () => {
    this.setState({
      hover: false,
      currentProject: ''
    })
  }

  render() {
    return (
      <div id="portfolio">
      {
        this.state.modal
        ? <div>
            <div className="modal">
            <p>video playback</p>
            <p>description</p>
            <p>link to demo</p>
            </div>
            <div className="backdrop" onClick={this.closeModal}/>
          </div>
        : <div className="projectContainer">
            <div id="musico" onMouseEnter={() => this.openHover("musico")} onMouseLeave={this.closeHover}>
            {
              this.state.hover && this.state.currentProject === "musico"
              ? <div>
                  <h2></h2>
                  <button onClick={() => this.openModal("musico")}>Learn More</button>
                </div>
              : <img />
            }
            </div>
            <div id="gameNight" onMouseEnter={() => this.openHover("gameNight")} onMouseLeave={this.closeHover}>
            {
              this.state.hover && this.state.currentProject === "gameNight"
              ? <div>
                  <h2></h2>
                  <button onClick={() => this.openModal("gameNight")}>Learn More</button>
                </div>
              : <img />
            }
            </div>
            <div id="trippy" onMouseEnter={() => this.openHover("trippy")} onMouseLeave={this.closeHover}>
            {
              this.state.hover && this.state.currentProject === "trippy"
              ? <div>
                  <h2></h2>
                  <button onClick={() => this.openModal("trippy")}>Learn More</button>
                </div>
              : <img />
            }
            </div>
          </div>
      }
      </div>
    );
  }
}

export default Portfolio;
