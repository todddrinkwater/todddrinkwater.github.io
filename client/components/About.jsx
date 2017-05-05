import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'


class About extends React.Component {
  render () {
    return (
      <div className="about">

        <div className="about-header">
          <h1>about me</h1>
          <p>
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          </p>
        </div>

        <div className="about-passions">

          <div className="passionItemDetails">
          <div>
            <h1>passions</h1>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            </p>
          </div>
          <div className="passionItemImage">
            <img src={"/img/snowboarding.png"} />
          </div>
          </div>
        </div>

        <div className="about-photos">
          <img src={"/img/snowboarding.png"} />
          <img src={"/img/snowboarding.png"} />
          <img src={"/img/snowboarding.png"} />
          <img src={"/img/snowboarding.png"} />
          <img src={"/img/snowboarding.png"} />
          <img src={"/img/snowboarding.png"} />
        </div>

        <div className="about-aFewMoreThings">
          Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </div>

        <div className="about-contact-container">
          <h1>create. build. inspire.</h1>
          <div>
            <Router><Link to="/">Resume</Link></Router>
          </div>
          <img src={"/img/richmondpark.jpg"} />
        </div>
      </div>
    )
  }
}

export default About
