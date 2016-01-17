import React, { Component, PropTypes } from 'react';
import Element from 'Element';
import FullElement from 'FullElement';
import { 
	A1, A2, B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, A3, A4, A5, A6, A7, A8
} from '../data/elements'

//------------------------------------------------------------------------------
// 
//------------------------------------------------------------------------------


const Column = class extends Component {
	render() { return <div style={{ float: 'left' }}>{ this.props.children }</div> }
}

export default class App extends Component {
	constructor() {
		super()
		this.makeColumn = this.makeColumn.bind(this);
		this.handleElementHover = this.handleElementHover.bind(this);
	}

//------------------------------------------------------------------------------
// Lifecycle Events 
//------------------------------------------------------------------------------
	
	componentWillMount() {
		this.setState({ element: 'aslkdfjlkasdj' })
	}

//------------------------------------------------------------------------------
// User Defined Functions
//------------------------------------------------------------------------------

	makeColumn(arrayOfElements) {
		return arrayOfElements.map((item, index) => {
			const { number, name, acronym, weight } = item;
			return (
				<Element 
					acronym={ acronym } 
					name={ name }
					number={ number }
					onElementHover={ this.handleElementHover } 
					weight={ weight }
					key={ index }
				/>
			) 
		})
	}



	handleElementHover(element) {
		this.setState({ element })
	}

	render() {
	const elements = [ 
		this.makeColumn(A1),
		this.makeColumn(A2),
		this.makeColumn(B1),
		this.makeColumn(B2),
		this.makeColumn(B3),
		this.makeColumn(B4),
		this.makeColumn(B5),
		this.makeColumn(B6),
		this.makeColumn(B7),
		this.makeColumn(B8),
		this.makeColumn(B9),
		this.makeColumn(B10),
		this.makeColumn(A3),
		this.makeColumn(A4),
		this.makeColumn(A5),
		this.makeColumn(A6),
		this.makeColumn(A7),
		this.makeColumn(A8)
	 ]
	const elementTable = elements.map((item, index) => {
		return <Column key={ index }>{ item }</Column>
				// <div style={{ clear: 'both' }}>&nbsp;</div>
	})
		return (
			<div style={{ margin: '10 50%' }}>
				<div>
					{ elementTable }
				</div>
				<div style={{ float: 'left', padding: 10 }}>
					<FullElement 
						acronym={ this.state.element.acronym } 
						name={ this.state.element.name }
						number={ this.state.element.number }
						onElementHover={ this.handleElementHover } 
						weight={ this.state.element.weight }
						key={ this.state.element.index }
					/>
				</div>
			</div>
		)
	}
};