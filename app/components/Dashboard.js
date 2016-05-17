// Child of ApartmentContainer

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var heroBg = require('../includes/img/hero_beach.jpg');
var DashboardForm = require('./DashboardForm');
var DashboardOverview = require('./DashboardOverview');

function Dashboard() {
  return (
    <div className="container">
      <DashboardForm />
      <DashboardOverview />
		</div>
  )
};

module.exports = Dashboard;
