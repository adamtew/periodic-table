import React, { Component, PropTypes } from 'react';

const propTypes = {
	onElementHover: PropTypes.func.isRequired
}

export default class Element extends Component {
	componentWillMount() {
		this.setState({ backgroundColor: 'white' })
	}

	handleMouseOver() {
		this.setState({ backgroundColor: 'yellow' })
		this.props.onElementHover(this.props)
	}

	handleMouseOut() {
		this.setState({ backgroundColor: 'white' })
	}
	render() {
		const { children, number, name, acronym, weight } = this.props;
		const { backgroundColor } = this.state
		return(
			<div 
				style={{ 
					backgroundColor,
					height: 35,
					width: 35,
					border: '1px solid silver', 
					padding: 4,
				}}
				onMouseOver={ this.handleMouseOver.bind(this) }
				onMouseOut={ this.handleMouseOut.bind(this) }
			> 
				<P>{ number }</P>
				<Title title={ acronym } />
			</div>
		)
	}
}

const Title = class extends Component {
	render() { return <h4 style={{ margin: '0', padding: 0, textAlign: 'center' }}> { this.props.title } </h4> }
}

const P = class extends Component {
	render() { return <p style={{ margin: '0', padding: 0, textAlign: 'center' }}>{ this.props.children }</p> }
}