import uniqid from 'uniqid';

function EducationItemFactory(obj) {
	const id = uniqid();
	const orgName = obj ? obj.orgName : '';
	const courseName = obj ? obj.courseName : '';
	const startDate = obj ? obj.startDate : '';
	const endDate = obj ? obj.endDate : '';

	return { id, orgName, courseName, startDate, endDate };
}

export default EducationItemFactory;
