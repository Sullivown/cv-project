import React, { Component } from 'react';
import Education from './Education';
import PersonalInfo from './PersonalInfo';
import WorkHistory from './WorkHistory';
import Output from './Output';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			personal: {},
			education: {},
			work: {},
		};
	}
	render() {
		return (
			<main>
				<div>
					<PersonalInfo data={this.state.personal} />
					<Education data={this.state.education} />
					<WorkHistory data={this.state.work} />
				</div>
				<div>
					<Output />
				</div>
			</main>
		);
	}
}

export default Main;
