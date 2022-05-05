import React, { Component } from 'react';
import WorkHistoryItem from './WorkHistoryItem';
import WorkHistoryItemFactory from '../factories/WorkHistoryItemFactory';

class WorkHistory extends Component {
	constructor() {
		super();
		// Default data for testing
		const defaultData = WorkHistoryItemFactory({
			orgName: 'Pieland',
			jobTitle: 'Head Pie',
			jobDescription: 'Ate pies!',
			startDate: '2000-01-02',
			endDate: '2005-04-12',
			current: false,
		});

		this.state = {
			editable: true,
			items: [defaultData],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
	}

	handleChange = (event) => {
		const newArr = [...this.state.items];
		const index = newArr.findIndex(
			(item) => item.id === event.target.closest('form').dataset.id
		);
		const item = newArr[index];
		item[event.target.name] = event.target.value;
		newArr.splice(index, 1, item);
		this.setState({
			items: newArr,
		});
	};

	handleClick(event) {
		if (event.target.id === 'addNewWorkHistoryItem') {
			const newArr = [...this.state.items];
			const item = WorkHistoryItemFactory();
			newArr.push(item);
			this.setState({
				items: newArr,
			});
		}

		if (event.target.dataset.command === 'delete') {
			this.deleteEntry(event.target.dataset.id);
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			editable: !this.state.editable,
		});
	};

	deleteEntry = (id) => {
		const newArr = [...this.state.items];
		const index = newArr.findIndex((item) => item.id === id);
		newArr.splice(index, 1);
		this.setState({
			items: newArr,
		});
	};

	render() {
		const { editable } = this.state;

		const workHistoryItemsArray = this.state.items.map((item) => {
			return (
				<WorkHistoryItem
					key={item.id}
					data={item}
					editable={editable}
					handleClick={this.handleClick}
					handleChange={this.handleChange}
				/>
			);
		});

		return (
			<div>
				<div className='form-header'>
					<h2>Work History</h2>
					<button type='button' onClick={this.handleSubmit}>
						{editable ? 'Save Section' : 'Edit Section'}
					</button>
				</div>
				<div id='workHistoryDiv'> {workHistoryItemsArray} </div>
				{editable ? (
					<button
						type='button'
						id='addNewWorkHistoryItem'
						onClick={this.handleClick}
					>
						Add New Work History Item
					</button>
				) : null}
			</div>
		);
	}
}

export default WorkHistory;
