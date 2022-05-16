import React from 'react';

import CvWorkHistoryItem from './CvWorkHistoryItem';
import CvEducationItem from './CvEducationItem';

import uniqid from 'uniqid';

const CVOutput = React.forwardRef((props, ref) => {
	const { personal, education, work } = props.data;

	const educationItemsArray = education.map((item) => {
		return <CvEducationItem key={uniqid()} data={item} />;
	});

	const workItemsArray = work.map((item) => {
		return <CvWorkHistoryItem key={uniqid()} data={item} />;
	});

	return (
		<div ref={ref}>
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
});

export default CVOutput;
