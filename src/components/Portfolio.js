import React, { Component } from 'react';
import '../styles/Portfolio.css'

class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      modal: false,
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

  loadVideo = () => {
    this.state.currentProject === "trippy"
    ? <div className="modal trippy">
        <video width="320" height="240" autoPlay controls>
          <source src={require("../videos/Trippy App.mp4")} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    : this.state.currentProject === "gameNight"
    ? <div className="modal gameNight">
      <video width="553" height="960" autoPlay controls>
        <source src={require("../videos/GameNight.mp4")} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
    : this.state.currentProject === "musico"
    ?  <div className="modal musico">
        <video width="320" height="240" autoPlay controls>
          <source src={require("../videos/GameNight.mp4")} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      : null
  }

  render() {
    return (
      <div id="portfolio" onMouseOver={() => this.props.changeActive("portfolio")}>
      <div className="info">
      <h1 className="title">PROJECTS</h1>
      {
        this.state.modal
        ? <div>
          {this.state.currentProject === "trippy"
          ? <div className="modal trippy">
              <video height="533" width="960" autoPlay controls>
                <source src={require("../videos/Trippy App.mp4")} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
          : this.state.currentProject === "gameNight"
          ? <div className="modal gameNight">
            <video width="574.4" height="643.2" autoPlay controls>
              <source src={require("../videos/GameNight.mp4")} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          : this.state.currentProject === "musico"
          ?  <div className="modal musico">
              <video width="320" height="240" autoPlay controls>
                <source src={require("../videos/GameNight.mp4")} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>
            : null}
            <div className="backdrop" onClick={this.closeModal}/>
          </div>
        : <div className="projectContainer">
            <div id="project1">
            <h1 className="number">1</h1>
              <h1 className="title">MUSICO</h1><span className="line">          __________________________________</span>
              <p className="languages">HTML5 <span className="dot">&#8231;</span> CSS <span className="dot">&#8231;</span> JAVASCRIPT</p>
              <p className="description">Best app for playing music of shared interest between friends</p>
              <p className="details">+ Used Firebase to show live updates <br/>
              + Used the Spotify api to authenticate users, search playlists and play music <br/>
              + Built it as a progressive web app so that it is compatible with phones and computers <br/>
              + Used custom CSS to create a clean ui <br/>
              + Hosted on Firebase
              </p>
              <a href="https://github.com/SarahYiskah/musico-frontend" target="_blank">Github Frontend</a>
              <a href="https://github.com/SarahYiskah/musico-backend" target="_blank">Github Backend</a>
              <a href="http://musico-backend.herokuapp.com/login" target="_blank">Live App</a>
              <br/>
              <button onClick={() => this.openModal("musico")}>Video Demo</button>
            </div>
            <div id="project2">
              <h1 className="number">2</h1>
              <span className="line">______________________________          </span><h1 className="title">GAME NIGHT</h1>
              <p className="languages">HTML5 <span className="dot">&#8231;</span> CSS <span className="dot">&#8231;</span> JAVASCRIPT</p>
              <p className="description">Great way to play live Rummikub with friends online</p>
              <p className="details">+ Used Firebase to make live connections between friends <br/>
              + Used HTML and Javascript to create ‘drag and drop’ functionality <br/>
              + Used mostly custom css to create a clean and fun design <br/>
              + Hosted on Heroku
              </p>
              <a href="https://github.com/SarahYiskah/Game-Night" target="_blank">Github</a>
              <a href="http://game-night-app.herokuapp.com/" target="_blank">Live App</a>
              <br/>
              <button onClick={() => this.openModal("gameNight")}>Video Demo</button>
            </div>
            <div id="project3">
            <h1 className="number">3</h1>
              <h1 className="title">TRIPPY</h1><span className="line">          ___________________________________</span>
              <p className="languages"> HTML5 <span className="dot">&#8231;</span> CSS <span className="dot">&#8231;</span> RUBY <span className="dot">&#8231;</span> JAVASCRIPT</p>
              <p className="description">Best way to plan trips with your friends</p>
              <p className="details">
              + Used JWT to build custom authentication and authorization functionality <br/>
              + Built APIs using Ruby on Rails and the MVC pattern <br/>
              + Used FourSquare API to make real time fetch requests <br/>
              + Hosted on Heroku
              </p>
              <a href="https://github.com/SarahYiskah/trippy-front-end" target="_blank">Github Frontend</a>
              <a href="https://github.com/SarahYiskah/trippy-backend" target="_blank">Github Backend</a>
              <a href="https://trippy-app.herokuapp.com/" target="_blank">Live App</a>
              <br/>
              <button onClick={() => this.openModal("trippy")}>Video Demo</button>
            </div>
          </div>
      }
      </div>
      </div>
    );
  }
}

export default Portfolio;
