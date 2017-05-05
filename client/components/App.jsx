import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Portfolio from './Portfolio'
import About from './About'

function App (props) {
  return (
    <div className='app-container'>
      <NavBar />
      <Router>
        <div className="router">
          <Route exact path='/' component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </div>
  )
}

export default App
