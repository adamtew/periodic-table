import React, { Component, PropTypes } from 'react';

const propTypes = {
	onElementHover: PropTypes.func.isRequired
}

export default class Element extends Component {
	speak() {
		console.log('my props are', this.props)
		this.props.onElementHover(this.props)
	}
	render() {
		const { children, number, name, acronym, weight } = this.props;
		return(
			<div 
				style={{ 
					height: 35,
					width: 35,
					border: '1px solid silver', 
					padding: 4,
				}}
				onMouseOver={ this.speak.bind(this) }
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