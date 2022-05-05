import React, { Component } from 'react';
import WorkHistoryItem from './WorkHistoryItem';

class WorkHistory extends Component {
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

		const workHistoryItemsArray = this.props.data.map((item) => {
			return (
				<WorkHistoryItem
					key={item.id}
					data={item}
					editable={editable}
					handleClick={this.props.handleClick}
					handleChange={this.props.handleChange}
				/>
			);
		});

		return (
			<div className='section' data-source='work'>
				<div className='form-header'>
					<h2>Work History</h2>
					<button type='button' onClick={this.handleSubmit}>
						{editable ? 'Save Section' : 'Edit Section'}
					</button>
				</div>
				<div id='workHistoryDiv'> {workHistoryItemsArray} </div>
				{editable ? (
					<button
						className='addNew'
						type='button'
						data-command='addNew'
						onClick={this.props.handleClick}
					>
						Add New Work History Item
					</button>
				) : null}
			</div>
		);
	}
}

export default WorkHistory;
