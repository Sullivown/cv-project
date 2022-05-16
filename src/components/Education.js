import React, { useState } from 'react';
import EducationItem from './EducationItem';

function Education(props) {
	const [editable, setEditable] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();
		setEditable(!editable);
	};

	const educationItemsArray = props.data.map((item) => {
		return (
			<EducationItem
				key={item.id}
				data={item}
				editable={editable}
				handleClick={props.handleClick}
				handleChange={props.handleChange}
			/>
		);
	});

	return (
		<div className='section' data-source='education'>
			<div className='form-header'>
				<h2>Education</h2>
				<button type='button' onClick={handleSubmit}>
					{editable ? 'Save Section' : 'Edit Section'}
				</button>
			</div>
			<div id='educationDiv'> {educationItemsArray} </div>
			{editable ? (
				<button
					className='addNew'
					type='button'
					data-command='addNew'
					onClick={props.handleClick}
				>
					Add New Education Item
				</button>
			) : null}
		</div>
	);
}

export default Education;
