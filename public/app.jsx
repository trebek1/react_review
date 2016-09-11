// a container component keeps track of state and renders child components 
// a presentational component uses props to display information 

var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

ReactDOM.render(
	<Greeter/>, document.getElementById('app')
);