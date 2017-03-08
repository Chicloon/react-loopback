import React, { Component } from 'react';
import '../public/stylesheets/boilerplate.css';

class DumbComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1> Welcome! </h1>
				<p className="text">
					Hello World!!!
				</p>
			</div>

		);
	}
}

export default DumbComponent;