import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'


class About extends React.Component {
  render () {
    return (
      <div className="about">

        <div className="about-header">
          <h1>about me</h1>
          <hr />
          <p>
            Born and bred in Whangarei. I moved to Hamilton, to study and teach, London, to travel and teach, back to Hamilton... and most recently to windy, but otherwise incredible, Wellington.

            Developing a passion for coding in High School, I often considered the 'what if' for a number of years before eventually taking a leap of faith into the tech industry.

            I have recently completed over nine hundred hours of learning at Ensprial Dev Academy and am starting out as a junior web developer, fresh out of the oven.
          </p>

        </div>

        <div className="about-passions">

          <div className="passionItemDetails">
          <div>
            <h1>passions</h1>
            <hr />
              <ul>
                <li>Making Music</li>
                <li>Attempting to take half-decent photos</li>
                <li>Honey</li>
                <li>Exploring</li>
                <li>Outdoors and Sports</li>
              </ul>
          </div>
          <div className="passionItemImage">
            <img src={"/img/snowboarding.png"} />
          </div>
          </div>
        </div>

        <div className="about-photos">
          <div className="about-photos-flex">
            <div className="about-crop"><img src={"/img/about1.jpg"} /></div>
            <div className="about-crop"><img src={"/img/about2.jpg"} /></div>
            <div className="about-crop"><img src={"/img/about3.jpg"} /></div>
          </div>
          <div className="about-photos-flex">
            <div className="about-crop"><img src={"/img/about4.jpg"} /></div>
            <div className="about-crop"><img src={"/img/about5.jpg"} /></div>
            <div className="about-crop"><img src={"/img/about6.jpg"} /></div>
          </div>
        </div>

        <div className="about-technologies">
          <h1>Technologies and approaches I utilize:</h1>
          <div>
            HTML  :  CSS  :  JavaScript ES6  : NodeJS : Test Driven Development  : React  :  Redux  : HandleBars : Express : Nodemon : React Router  :  Webpack  :  Knex  :  Sqlite3  :  BodyParser  :  Signature_Pad  :  Babel  :  API's
          </div>
          <h1>New things I am currently learning:</h1>
          <div>Python: Django : MxGraph</div>
        </div>

        <div className="about-contact-container">
          <h1>learn more.</h1>
            <a href="/resume.pdf">Resume</a>
          <img src={"/img/richmondpark.jpg"} />
        </div>
      </div>
    )
  }
}

export default About
