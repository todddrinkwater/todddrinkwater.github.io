import React from 'react'

class NavBar extends React.Component {
  render () {
    return (
      <div className="navBar">
        <ul>
          <li className="navLeft"><a href="#">todddrinkwater</a></li>
          <li className="navRight"><a href="#">contact</a></li>
          <li className="navRight"><a href="#">about</a></li>
          <li className="navRight"><a href="#">portfolio</a></li>
          <li className="navRight"><a href="#">home</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
