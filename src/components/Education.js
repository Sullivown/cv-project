import React, { Component } from 'react';
import EducationItem from './EducationItem';

class Education extends Component {
	constructor(props) {
		super(props);

		this.state = {
			editable: true,
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			editable: !this.state.editable,
		});
	};

	render() {
		const { editable } = this.state;

		const educationItemsArray = this.props.data.map((item) => {
			return (
				<EducationItem
					key={item.id}
					data={item}
					editable={editable}
					handleClick={this.props.handleClick}
					handleChange={this.props.handleChange}
				/>
			);
		});

		return (
			<div className='section' data-source='education'>
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
						data-command='addNew'
						onClick={this.props.handleClick}
					>
						Add New Education Item
					</button>
				) : null}
			</div>
		);
	}
}

export default Education;
