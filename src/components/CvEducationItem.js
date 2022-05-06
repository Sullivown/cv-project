import React, { Component } from 'react';
import formatDate from '../helpers/formatDate';

class CvEducationItem extends Component {
	render() {
		const { orgName, courseName, startDate, endDate } = this.props.data;
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
}

export default CvEducationItem;
