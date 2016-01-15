var React = require('react')
var reactDOM = require('react-dom')

var Root = React.createClass({
	render: function() {
		return <div> Hello World </div>;
	}
})

reactDOM.render(
	<h1> Hello World </h1>,
	document.getElementById('root');
)