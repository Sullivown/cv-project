import React from 'react';
import formatDate from '../helpers/formatDate';

function CvEducationItem(props) {
	const { orgName, courseName, startDate, endDate } = props.data;
	return (
		<div className='cv-item'>
			<div className='space-between'>
				<span className='bold'>{courseName}</span>{' '}
				<span className='dates'>
					{formatDate(startDate)} - {formatDate(endDate)}
				</span>
			</div>
			<div className='italic'>{orgName}</div>
		</div>
	);
}

export default CvEducationItem;
