import React, { Component } from 'react';
import CvWorkHistoryItem from './CvWorkHistoryItem';
import CvEducationItem from './CvEducationItem';

class CVOutput extends Component {
	render() {
		const { personal, education, work } = this.props.data;

		const educationItemsArray = education.map((item) => {
			return <CvEducationItem key={item.id} data={item} />;
		});

		const workItemsArray = work.map((item) => {
			return <CvWorkHistoryItem key={item.id} data={item} />;
		});

		return (
			<div>
				<section className='personal'>
					<div className='cv-heading'>
						{personal.firstName || 'First Name'}{' '}
						{personal.lastName || 'Last Name'}
					</div>
					<div>{personal.email || 'Email'}</div>
					<div>{personal.phone || 'Phone'}</div>
				</section>
				<section className='education'>
					<div className='cv-heading'>Education</div>
					<hr />
					<div>{educationItemsArray}</div>
				</section>
				<section className='work'>
					<div className='cv-heading'>Work History</div>
					<hr />
					<div>{workItemsArray}</div>
				</section>
			</div>
		);
	}
}

export default CVOutput;
