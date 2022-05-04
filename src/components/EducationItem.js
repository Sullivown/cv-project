import React, { Component } from 'react';

class EducationItem extends Component {
	formatDate = (date) => {
		const d = new Date(date);
		return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
	};

	render() {
		const { editable, handleClick, handleChange } = this.props;
		const { id, orgName, courseName, startDate, endDate } = this.props.data;

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
						<label htmlFor='courseName'>
							Course / Qualification
						</label>
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
							this.formatDate(startDate)
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
							this.formatDate(endDate)
						) : (
							'?'
						)}
					</div>
					{editable ? (
						<button
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
}

export default EducationItem;
