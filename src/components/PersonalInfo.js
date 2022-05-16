import React, { useState } from 'react';
import '../styles/forms.css';

function PersonalInfo(props) {
	const [editable, setEditable] = useState(true);

	const handleSubmit = (event) => {
		event.preventDefault();

		setEditable(!editable);
	};

	return (
		<div className='section' data-source='personal'>
			<div className='form-header'>
				<h2>Personal Information</h2>
				<button type='button' onClick={handleSubmit}>
					{editable ? 'Save Section' : 'Edit Section'}
				</button>
			</div>
			<form className='personal-form' onSubmit={handleSubmit}>
				<div className='form-input-section'>
					<label htmlFor='firstName'>First Name</label>
					{editable ? (
						<input
							id='firstName'
							type='text'
							name='firstName'
							placeholder='First Name'
							onChange={props.handleChange}
							value={props.data.firstName}
						/>
					) : props.data.firstName ? (
						props.data.firstName
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='lastName'>Last Name</label>
					{editable ? (
						<input
							id='lastName'
							type='text'
							name='lastName'
							placeholder='Last Name'
							onChange={props.handleChange}
							value={props.data.lastName}
						/>
					) : props.data.lastName ? (
						props.data.lastName
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='email'>Email</label>
					{editable ? (
						<input
							id='email'
							type='text'
							name='email'
							placeholder='Email'
							onChange={props.handleChange}
							value={props.data.email}
						/>
					) : props.data.email ? (
						props.data.email
					) : (
						'?'
					)}
				</div>
				<div className='form-input-section'>
					<label htmlFor='phone'>Phone</label>
					{editable ? (
						<input
							id='phone'
							type='text'
							name='phone'
							placeholder='Phone'
							onChange={props.handleChange}
							value={props.data.phone}
						/>
					) : props.data.phone ? (
						props.data.phone
					) : (
						'?'
					)}
				</div>
			</form>
		</div>
	);
}

export default PersonalInfo;
