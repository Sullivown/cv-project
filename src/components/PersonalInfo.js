import React, { Component } from 'react';
import '../styles/forms.css';

class PersonalInfo extends Component {
	constructor() {
		super();

		this.state = {
			editable: true,
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({
			editable: !this.props.editable,
		});
	};

	render() {
		const { editable } = this.state;

		return (
			<div className='section' data-source='personal'>
				<form onSubmit={this.handleSubmit}>
					<div className='form-header'>
						<h2>Personal Information</h2>
						<button type='button' onClick={this.handleSubmit}>
							{editable ? 'Save Section' : 'Edit Section'}
						</button>
					</div>
					<div className='form-input-section'>
						<label htmlFor='firstName'>First Name</label>
						{editable ? (
							<input
								id='firstName'
								type='text'
								name='firstName'
								placeholder='First Name'
								onChange={this.props.handleChange}
								value={this.props.firstName}
							/>
						) : this.props.firstName ? (
							this.props.firstName
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
								onChange={this.props.handleChange}
								value={this.props.lastName}
							/>
						) : this.props.lastName ? (
							this.props.lastName
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
								onChange={this.handleChange}
								value={this.props.email}
							/>
						) : this.props.email ? (
							this.props.email
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
								onChange={this.handleChange}
								value={this.props.phone}
							/>
						) : this.props.phone ? (
							this.props.phone
						) : (
							'?'
						)}
					</div>
				</form>
			</div>
		);
	}
}

export default PersonalInfo;
