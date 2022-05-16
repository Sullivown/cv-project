import React, { useState } from 'react';
import WorkHistoryItem from './WorkHistoryItem';

function WorkHistory(props) {
	const [editable, setEditable] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		setEditable(!editable);
	};

	const workHistoryItemsArray = props.data.map((item) => {
		return (
			<WorkHistoryItem
				key={item.id}
				data={item}
				editable={editable}
				handleClick={props.handleClick}
				handleChange={props.handleChange}
			/>
		);
	});

	return (
		<div className='section' data-source='work'>
			<div className='form-header'>
				<h2>Work History</h2>
				<button type='button' onClick={handleSubmit}>
					{editable ? 'Save Section' : 'Edit Section'}
				</button>
			</div>
			<div id='workHistoryDiv'> {workHistoryItemsArray} </div>
			{editable ? (
				<button
					className='addNew'
					type='button'
					data-command='addNew'
					onClick={props.handleClick}
				>
					Add New Work History Item
				</button>
			) : null}
		</div>
	);
}

export default WorkHistory;
