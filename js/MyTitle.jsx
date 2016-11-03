// everything is a function
const
 React = require('react')
const
 div = React.DOM.div
const
 h1 = React.DOM.h1

// Composite component
// Render must return a component!!
const MyTitle = React.createClass({
  render () {
    // Stuff in curly braces is javascript
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }> 
          {this.props.title}
        </h1>
      </div>
    )
  }
})

// Export this file for use elsewhere!
module.exports = MyTitle
