import React, { Component } from 'react';
import formatDate from '../helpers/formatDate';

class CvWorkHistoryItem extends Component {
	render() {
		const { orgName, jobTitle, jobDescription, startDate, endDate } =
			this.props.data;
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
}

export default CvWorkHistoryItem;
