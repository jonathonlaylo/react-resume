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
                  <a href="https://www.buoycall.org/" target="_blank"><img width="90%" src={logo} className="logo" alt="logo"/></a>
                  <p>A single page application that shows visualized data of buoys scraped from NOAA, the National Oceanic and Atmospheric Administration. Users see historical data over time for buoys placed all over the world and have the ability to log in and donate via Stripe to “adopt” sharks from live data. Responsibilities in this project were front-end design, React components, and the Mapbox component to visualize buoy data. Dependencies also include Express, React, Leaflet, Redux, Stripe, Rechart, Sequelize, Node.js, PostgreSQL, and Mailgun.</p>
                </div>
              </div>
            </div>
        </section>

        <section>
          <h2>Education</h2>
            <div className="content">
              <div className="content-container">
                <div className="job">
                  <span className="title">DevLeague</span>
                  <span className="date">Nov 2016 - May 2017</span>
                </div>
                <span>JavaScript Web Engineer</span>
                <ul className="description">
                  <li>Over 800 hours of web development programming in a six-month period</li>
                  <li>DevLeague curriculum teaches popular coding front end frameworks such as Angular, React, TypeScript, and much more</li>
                  <li>Learned the importance of working as a team through group projects and pair-programming</li>
                </ul>
              </div>

              <div className="content-container">
                <div className="job">
                  <span className="title">University of Washington</span>
                  <span className="date">2008 – 2010</span>
                </div>
                <span>Computer Science and Systems Program and Business Minor</span>
                <ul className="description">
                  <li>Acquired knowledge in object-oriented programming, algorithms, data structures, discrete structures, and software design</li>
                  <li>Ability to communicate professionally in organizational settings, utilize technology to formulate business solutions, and presented ideas orally and in writting</li>
                </ul>
              </div>

            </div>
        </section>
      </div>
    );
  }
}

export default Right;