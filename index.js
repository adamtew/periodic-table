var React = require('react')
var render = require('react-dom').render

var Root = React.createClass({
	render: function() {
		return <div> Hello World </div>;
	}
})

render(
	<Root />,
	document.getElementById('root');
)