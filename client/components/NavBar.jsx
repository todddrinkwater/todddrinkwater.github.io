import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    return (
      <div className="navBar">
        <ul>
          <li className="navLeft"><Router><Link to="/">todddrinkwater</Link></Router></li>
          <li className="navRight"><a href="#">contact</a></li>
          <li className="navRight"><Router><Link to="/about">about</Link></Router></li>
          <li className="navRight"><Router><Link to="/portfolio">portfolio</Link></Router></li>
          <li className="navRight"><a href="#">home</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
