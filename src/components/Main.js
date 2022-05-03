import React, { Component } from 'react';
import Education from './Education';
import PersonalInfo from './PersonalInfo';
import WorkHistory from './WorkHistory';

class Main extends Component {
	render() {
		return (
			<main>
				<PersonalInfo />
				<Education />
				<WorkHistory />
			</main>
		);
	}
}

export default Main;
