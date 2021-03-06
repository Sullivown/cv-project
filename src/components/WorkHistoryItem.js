import React from 'react';
import formatDate from '../helpers/formatDate';

function WorkHistoryItem(props) {
	const { editable, handleClick, handleChange } = props;
	const { id, orgName, jobTitle, jobDescription, startDate, endDate } =
		props.data;

	return (
		<div>
			<form data-id={id}>
				<div className='form-input-section'>
					<label htmlFor='orgName'>Company / Organisation</label>
					{editable ? (
						<input
							id='orgName'
							type='text'
							name='orgName'
							placeholder='Company / Organisation'
							onChange={handleChange}
							value={orgName}
						/>
					) : orgName ? (
						orgName
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='jobTitle'>Job Title</label>
					{editable ? (
						<input
							id='jobTitle'
							type='text'
							name='jobTitle'
							placeholder='Job Title'
							onChange={handleChange}
							value={jobTitle}
						/>
					) : jobTitle ? (
						jobTitle
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='jobDescription'>Job Description</label>
					{editable ? (
						<textarea
							id='jobDescription'
							name='jobDescription'
							placeholder='Job Description'
							rows='10'
							onChange={handleChange}
							value={jobDescription}
						/>
					) : jobDescription ? (
						jobDescription
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='startDate'>Start Date</label>
					{editable ? (
						<input
							id='startDate'
							type='date'
							name='startDate'
							onChange={handleChange}
							value={startDate}
						/>
					) : startDate ? (
						formatDate(startDate)
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='endDate'>End Date</label>
					{editable ? (
						<input
							id='endDate'
							type='date'
							name='endDate'
							onChange={handleChange}
							value={endDate}
						/>
					) : endDate ? (
						formatDate(endDate)
					) : (
						'?'
					)}
				</div>
				{editable ? (
					<button
						className='delete'
						type='button'
						data-command='delete'
						data-id={id}
						onClick={handleClick}
					>
						Delete
					</button>
				) : null}
			</form>
		</div>
	);
}

export default WorkHistoryItem;
