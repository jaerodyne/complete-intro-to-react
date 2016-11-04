const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const { Router, Route, hashHistory } = require('react-router')
// longhand version:
// const ReactRouter = require('react-router')
// const Router = ReactRouter.Router
// const Route = ReactRouter.Route
// const hashHistory = ReactRouter.hashHistory

const App = function () {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Landing} />
      <Route path='/search' component={Search} />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
