import React from 'react'

class Contact extends React.Component {
  render () {
    return (
      <div className="contact">
        <div>
          <h1>Call me today.</h1>
          <p>I currently reside in Wellington, New Zealand. Please feel free to reach out, whether its a simple hello, or a catch up over coffee (I drink a strong hot chocolate).</p>
          <h2>Contact Information</h2>
          <ul>
            <li><i className="fa fa-phone fa-2x" aria-hidden="true"></i> 0274 421 9065</li>
            <li><i className="fa fa-envelope fa-2x" aria-hidden="true"></i>  todddrinkwaternz@gmail.com</li>
            <li><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> https://www.linkedin.com/in/todd-drinkwater/</li>
            <li><i className="fa fa-github fa-2x" aria-hidden="true"></i> todddrinkwater.github.io</li>
          </ul>

        </div>
      </div>
    )
  }
}

export default Contact
