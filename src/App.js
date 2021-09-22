import React from "react"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import { Home, WorkInProgress } from "./pages"
import { MovieDetail } from "./components"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/details/:id" component={MovieDetail} />
      <Route exact path="/wip" component={WorkInProgress} />
    </Router>
  )
}

export default App