import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePage from './pages/home'
import AboutPage from './pages/about'

const App: React.FC<{}> = props => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            key={1}
            exact
            path="/"
            render={() => <HomePage id="Hi" {...props} />}
          />
          <Route
            key={2}
            exact
            path="/:number"
            render={() => <AboutPage {...props} id="Hi" />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
