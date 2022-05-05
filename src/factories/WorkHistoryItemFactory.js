import uniqid from 'uniqid';

function WorkHistoryItemFactory(obj) {
	const id = uniqid();
	const orgName = obj ? obj.orgName : '';
	const jobTitle = obj ? obj.jobTitle : '';
	const jobDescription = obj ? obj.jobDescription : '';
	const startDate = obj ? obj.startDate : '';
	const endDate = obj ? obj.endDate : '';
	const current = obj ? obj.current : false;

	return {
		id,
		orgName,
		jobTitle,
		jobDescription,
		startDate,
		endDate,
		current,
	};
}

export default WorkHistoryItemFactory;
