import React, { Component, PropTypes } from 'react';

const propTypes = { 
	acronym: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.number.isRequired,
	weight: PropTypes.number.isRequired
};

export default class FullElement extends Component {
	render() {
		const { acronym, name, number, weight } = this.props;
		return (
			<div style={{ height: 100, width: 100, padding: 20, margin: 50, border: '1px solid orange' }}>
				<P>{ number }</P>
				<Title title={ name } />
				<P>{ acronym }</P>
				<P>{ weight }</P>
			</div>
		)
	}
};

FullElement.propTypes = propTypes;


const Title = class extends Component {
	render() { return <h4 style={{ margin: '0', padding: 0, textAlign: 'center' }}> { this.props.title } </h4> }
}

const P = class extends Component {
	render() { return <p style={{ margin: '0', padding: 0, textAlign: 'center' }}>{ this.props.children }</p> }
}