import React, { Component } from 'react';

class Output extends Component {
	render() {
		const { personal, education, work } = this.props.data;

		return (
			<div id='output'>
				<section>
					{personal.FirstName} {personal.lastName}
				</section>
			</div>
		);
	}
}

export default Output;
