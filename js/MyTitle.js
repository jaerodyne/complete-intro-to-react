// everything is a function
var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

// Composite component
// Render must return a component!!
var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

// Export this file for use elsewhere!
module.exports = MyTitle
