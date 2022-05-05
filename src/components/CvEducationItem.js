import React, { Component } from 'react';

class CvEducationItem extends Component {
	render() {
		const { orgName, courseName, startDate, endDate } = this.props.data;
		return (
			<div>
				<div>
					<span>{orgName}</span>{' '}
					<span>
						{startDate} {endDate}
					</span>
				</div>
				<div>{courseName}</div>
			</div>
		);
	}
}

export default CvEducationItem;
