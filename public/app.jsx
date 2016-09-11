// a container component keeps track of state and renders child components 
// a presentational component uses props to display information 

var GreeterMessage = React.createClass({
	render: function(){
		return(
			<div>
			<h1>{this.props.name}</h1>
			<p>{this.props.message}</p>
			</div>
		);
	}
});

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
var name = "Alex";
ReactDOM.render(
	<Greeter name={name}/>, document.getElementById('app')
);