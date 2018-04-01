import React, { Component } from "react";
import './Left.css';

class Left extends Component {
  render() {
    return (
      <div className="left-container">
        <div className="container">
          <h1>Jonathon Laylo</h1>
          <p>Full Stack Developer</p>
          <div className="links">
            <a href="mailto:jonathon.laylo@gmail.com"><i class="far fa-envelope"></i></a>
            <a href="https:www.linkedin.com/in/jonathonlaylo"><i class="fab fa-linkedin"></i></a>
            <a href="https:www.github.com/jonathonlaylo"><i class="fab fa-github"></i></a>
            <a href="https:www.twitter.com/jonathonlaylo"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Left;