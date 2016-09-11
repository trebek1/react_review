var React = require('react');

var GreeterFormMsg = React.createClass({
	onFormSubmit: function(e){
		e.preventDefault(); 

		var msg = this.refs.msg.value; 
		if(msg.length > 0){
			this.props.msgHandler(msg);
		}
		
		this.refs.msg.value = "";

	},

	render: function(){
		return(

			<form onSubmit={this.onFormSubmit}>
				<textarea type="text" ref="msg" placeholder="change the text"/>
				<button>Set Message</button>
			</form>
		)
	}
}); 

module.exports = GreeterFormMsg; 