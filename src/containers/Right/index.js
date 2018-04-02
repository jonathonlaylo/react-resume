import React, { Component } from "react";
import './Right.css';
import logo from './buoyCall.png';

class Right extends Component {
  render() {
    return (
      <div className="right-container">
        <section>
          <h2>Technical Skills</h2>
            <div className="content">
              <p><b>LANGUAGES</b>: JavaScript, HTML5, CSS3, SQL</p>
              <p><b>LIBRARIES & FRAMEWORKS</b>: Node, Express, React, Redux, Handlebars, Bootstrap, AngularJS, jQuery</p>
              <p><b>TOOLS</b>: Git, Github, Sublime Text, Postman, Gulp, Eclipse, Adobe Photoshop & Lightroom</p>
            </div>
        </section>

        <section>
          <h2>Experience</h2>
            <div className="content">
              <div className="content-container">
                <div className="job">
                  <span className="title">Brand Ambassador</span>
                  <span className="date">2014 – Present</span>
                </div>
                <span>AT&T - San Francisco, CA</span>
                  <p>Develop and attain customer experience and sales objectives for AT&T. Sell products and services offered by AT&T. While receiving a 85% customer satisfaction average, I consistently resolve questions through email, phone calls, and text messages. Educated customers with up-to-date knowledge of latest products and trends. Consult with customers to understand their needs and offer optimal options to choose from.</p>
              </div>

              <div className="content-container">
                <div className="job">
                  <span className="title">Store Manager</span>
                  <span className="date">2012-2013</span>
                </div>
                <span>CSS - Olympia, WA</span>
                  <p>Hired and trained 15+ new employees. Directly supervised up to 10 employees at a time and provided individualized coaching and mentorship. Created weekly staff schedules for up to 10 employees. Measured productivity by tracking daily growth of employee sales. Monitored monthly sales goals at both the store level and individual level for every employee. Fostered a positive work atmosphere by setting competitive goals which increased sales by 15%.</p>
              </div>

              <div className="content-container">
                <div className="job">
                  <span className="title">Store Manager</span>
                  <span className="date">2008-2011</span>
                </div>
                <span>Industrial Rideshop - Tukwila, WA</span>
                  <p>Youngest employee promoted to store manager. Climbed the ranks of sales associate, supervisor, assistant manager, and then to store manager. Analyzed existing opening and closing procedures to develop new strategies that were implemented storewide. Reduced time spent on prolonged tasks by 30% for all staff.</p>
              </div>

            </div>
        </section>

        <section>
          <h2>Projects</h2>
            <div className="content">
              <div className="content-container">
                <div className="project">
                  <img width="90%" src={logo} className="logo" alt="logo"/>
                </div>
              </div>
            </div>
        </section>

        <section>
          <h2>Education</h2>
          <div className="content">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Right;