import React from 'react';
import formatDate from '../helpers/formatDate';

function EducationItem(props) {
	const { editable, handleClick, handleChange } = props;
	const { id, orgName, courseName, startDate, endDate } = props.data;

	return (
		<div>
			<form data-id={id}>
				<div className='form-input-section'>
					<label htmlFor='orgName'>
						Place of Study / Organisation
					</label>
					{editable ? (
						<input
							id='orgName'
							type='text'
							name='orgName'
							placeholder='Place of Study / Organisation'
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
					<label htmlFor='courseName'>Course / Qualification</label>
					{editable ? (
						<input
							id='courseName'
							type='text'
							name='courseName'
							placeholder='Course / Qualification'
							onChange={handleChange}
							value={courseName}
						/>
					) : courseName ? (
						courseName
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

export default EducationItem;
