import React, { Component, PropTypes } from 'react';
const { render } = require('react-dom');

const Element = class extends Component {
	render() {
		return(
			<div> { this.props.children } </div>
		)
	}
}

const Title = class extends Component {
	render() {
		return(
			<h1> { this.props.title } </h1>
		)
	}
}

const MyTitle = <Title title="React Title" />
const MyOther = <Title />
const Elements = <Element> { MyTitle } </Element>

render(
  <Element> { MyTitle } { MyOther } { Elements } </Element>,
  document.getElementById('root')
)