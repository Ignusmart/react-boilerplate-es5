var MyApp = require('./components/MyApp.react');
var React = require('react');
var ReactDom = require('react-dom');

ReactDom.render(
  <MyApp />,
  document.getElementById('react')
);