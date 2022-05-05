import React, { Component } from 'react';

class CvWorkHistoryItem extends Component {
	render() {
		const { orgName, jobTitle, jobDescription, startDate, endDate } =
			this.props.data;
		return (
			<div>
				<div>
					<span>{jobTitle}</span>{' '}
					<span>
						{startDate} {endDate}
					</span>
				</div>
				<div>{orgName}</div>
				<div>{jobDescription}</div>
			</div>
		);
	}
}

export default CvWorkHistoryItem;
