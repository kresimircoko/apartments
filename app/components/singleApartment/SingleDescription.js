import React, { PropTypes } from 'react'

const SingleDescription = React.createClass({
  render () {
    const i = this.props.apartments.findIndex((apartment) => apartment.route === this.props.params.apartmentId);
    const apartment = this.props.apartments[i];

    return (
      <section id="singleDescription">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

        </div>
      </section>
    )
  }
})

export default SingleDescription;
