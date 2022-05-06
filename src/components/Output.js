import React, { Component } from 'react';
import CVOutput from './CVOutput';
import ReactToPrint from 'react-to-print';

import '../styles/output.css';

class Output extends Component {
	render() {
		return (
			<div id='output'>
				<div className='page'>
					<CVOutput
						data={this.props.data}
						ref={(el) => (this.componentRef = el)}
					/>
				</div>
				<div className='controls'>
					<ReactToPrint
						trigger={() => {
							return <button>Print / Save as PDF</button>;
						}}
						content={() => this.componentRef}
					/>
				</div>
			</div>
		);
	}
}

export default Output;
