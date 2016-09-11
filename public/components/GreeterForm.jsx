var React = require('react');
var GreeterForm = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault(); 

		var name = this.refs.name.value; 
		if(name.length > 0){
			this.props.nameHandler(name);
		}
		
		this.refs.name.value = "";

	},

	render: function(){
		return(

			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref="name" placeholder="change the name"/>
				<button>Set Name</button>
			</form>
		)
	}
}); 

module.exports = GreeterForm; 