// Child of ApartmentContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Apartment = React.createClass({
  getDefaultProps: function() {
    return {
      img: '',
      price: '',
      neighborhood: '',
      size: '',
      people: '',
      route: ''
    }
  },
  render () {
    return (
      <div className="apartment third-section subsection">
        <section className="apartmentImg">
          <i className="fa fa-heart"></i>
          <img src={this.props.img} alt="#"/>
        </section>

        <section className="apartmentInfo">
          <span>
            <i className="fa fa-money"></i> {this.props.price} kn
          </span>
          <span>
            <i className="fa fa-group"></i> {this.props.people}
          </span>
          <span>
            <i className="fa fa-expand"></i> {this.props.size} m&sup2;
            </span>
          <span>
            <i className="fa fa-map-marker"></i> {this.props.neighborhood}
          </span>
        </section>

        <button href={this.props.route} className="apartmentDetailsBtn" type="button">Detalji <i className="fa fa-chevron-right"></i> </button>
      </div>
    )
  }
});

export default Apartment;
