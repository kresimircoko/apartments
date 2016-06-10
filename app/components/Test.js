import React, { PropTypes } from 'react'

const Test = React.createClass({
  render () {
    const { apartment, i } = this.props;
    return (
      <div className="test">
        this is a test
      </div>
    )
  }
})

export default Test;
