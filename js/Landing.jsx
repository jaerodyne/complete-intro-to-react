const React = require('react')

const Landing = function () {
  return (
    // Objects in caps (ie: MyTitle) are user-generated, lowercase means it's just a component
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>svideo</h1>
        <input className='search' type='text' placeholder='Search' />
        <button className='browse-all'> or Browse All</button>
      </div>
    </div>
  )
}

module.exports = Landing
