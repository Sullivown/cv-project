import React, { Component } from 'react';
import EducationItem from './EducationItem';
import EducationItemFactory from '../factories/EducationItemFactory';

class Education extends Component {
	constructor() {
		super();
		// Default data for testing
		const defaultData = EducationItemFactory({
			orgName: 'University of Hull',
			courseName: 'Maths BSc',
			startDate: '2000-01-02',
			endDate: '2005-04-12',
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
		if (event.target.id === 'addNewEducationItem') {
			const newArr = [...this.state.items];
			const item = EducationItemFactory();
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

		const educationItemsArray = this.state.items.map((item) => {
			return (
				<EducationItem
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
					<h2>Education</h2>
					<button type='button' onClick={this.handleSubmit}>
						{editable ? 'Save Section' : 'Edit Section'}
					</button>
				</div>
				<div id='educationDiv'> {educationItemsArray} </div>
				{editable ? (
					<button
						type='button'
						id='addNewEducationItem'
						onClick={this.handleClick}
					>
						Add New Education Item
					</button>
				) : null}
			</div>
		);
	}
}

export default Education;
