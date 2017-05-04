import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Home'
import Portfolio from './Portfolio'

function App (props) {
  return (
    <div className='app-container'>
      <NavBar />
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    </div>
  )
}

export default App
