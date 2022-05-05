import React, { Component } from 'react';
import CvWorkHistoryItem from './CvWorkHistoryItem';
import CvEducationItem from './CvEducationItem';

import '../styles/output.css';

class Output extends Component {
	render() {
		const { personal, education, work } = this.props.data;

		const educationItemsArray = education.map((item) => {
			return <CvEducationItem key={item.id} data={item} />;
		});

		const workItemsArray = work.map((item) => {
			return <CvWorkHistoryItem key={item.id} data={item} />;
		});

		return (
			<div id='output'>
				<div className='page'>
					<section className='personal'>
						<div>
							{personal.firstName || 'First Name'}{' '}
							{personal.lastName || 'Last Name'}
						</div>
						<div>{personal.email || 'Email'}</div>
						<div>{personal.phone || 'Phone'}</div>
					</section>

					<section className='education'>
						<div>Education</div>
						<div>{educationItemsArray}</div>
					</section>
					<section className='work'>
						<div>Work History</div>
						<div>{workItemsArray}</div>
					</section>
				</div>
				<div className='controls'>
					<button type='button'>Save as PDF</button>
					<button type='button'>Print</button>
				</div>
			</div>
		);
	}
}

export default Output;
