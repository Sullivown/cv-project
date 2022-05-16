import React from 'react';
import formatDate from '../helpers/formatDate';

function CvWorkHistoryItem(props) {
	const { orgName, jobTitle, jobDescription, startDate, endDate } =
		props.data;
	return (
		<div className='cv-item'>
			<div className='space-between'>
				<span className='bold'>{jobTitle}</span>{' '}
				<span className='dates'>
					{formatDate(startDate)} - {formatDate(endDate)}
				</span>
			</div>
			<div className='italic'>{orgName}</div>
			<div>{jobDescription}</div>
		</div>
	);
}

export default CvWorkHistoryItem;
