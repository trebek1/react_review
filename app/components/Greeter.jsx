var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');
var GreeterFormMsg = require('GreeterFormMessage'); 

var Greeter = React.createClass({
	getDefaultProps: function() {
	    return {
	      name: 'React',
	      message: 'Message from component'   
	    };
	},
	getInitialState: function(){
		return {
			name: this.props.name,
			message: this.props.message
		}
	},
	handleNewName: function(name){
		
			this.setState({
			name: name
		}); 
	},

	handleNewMsg: function(msg){
		
			this.setState({
			message: msg
		}); 
	},

	render: function(){
		
		return (

			<div>
				<GreeterMessage name={this.state.name} message={this.state.message}/>
				<GreeterForm nameHandler = {this.handleNewName}/>
				<GreeterFormMsg msgHandler = {this.handleNewMsg}/>
			</div>

		); 
	}

});

module.exports = Greeter;  