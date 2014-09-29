/** @jsx React.DOM */

var React = require("react");
var App = require("./components/App");

document.addEventListener("DOMContentLoaded", function(e) {
  React.renderComponent(
    <App title="Hello Karma and React"/>,
    document.querySelector('.container')
  );
});