import React, { Component } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import EducationItemFactory from '../factories/EducationItemFactory';
import WorkHistory from './WorkHistory';
import WorkHistoryItemFactory from '../factories/WorkHistoryItemFactory';

import Output from './Output';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			personal: { firstName: '', lastName: '', email: '', phone: '' },
			education: [],
			work: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
	}

	handleChange = (event) => {
		const source = event.target.closest('.section').dataset.source;
		if (source === 'personal') {
			const newObj = { ...this.state.personal };
			newObj[event.target.name] = event.target.value;
			this.setState({
				personal: newObj,
			});
		} else {
			const newArr = [...this.state[source]];
			const index = newArr.findIndex(
				(item) => item.id === event.target.closest('form').dataset.id
			);
			const item = newArr[index];
			item[event.target.name] = event.target.value;
			newArr.splice(index, 1, item);
			this.setState({
				items: newArr,
			});
		}
	};

	handleClick(event) {
		const source = event.target.closest('.section').dataset.source;

		if (event.target.dataset.command === 'addNew') {
			const newArr = [...this.state[source]];
			const item =
				source === 'education'
					? EducationItemFactory()
					: WorkHistoryItemFactory();
			newArr.push(item);
			this.setState({
				[source]: newArr,
			});
		}

		if (event.target.dataset.command === 'delete') {
			this.deleteEntry(event.target.dataset.id, source);
		}
	}

	deleteEntry = (id, source) => {
		const newArr = [...this.state[source]];
		const index = newArr.findIndex((item) => item.id === id);
		newArr.splice(index, 1);
		this.setState({
			[source]: newArr,
		});
	};

	render() {
		return (
			<main>
				<div id='leftDiv'>
					<PersonalInfo
						data={this.state.personal}
						handleChange={this.handleChange}
						handleClick={this.handleClick}
					/>
					<Education
						data={this.state.education}
						handleChange={this.handleChange}
						handleClick={this.handleClick}
					/>
					<WorkHistory
						data={this.state.work}
						handleChange={this.handleChange}
						handleClick={this.handleClick}
					/>
				</div>
				<div id='rightDiv'>
					<Output data={this.state} />
				</div>
			</main>
		);
	}
}

export default Main;
