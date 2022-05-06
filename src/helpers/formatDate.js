function formatDate(date) {
	const d = new Date(date);

	if (!date) {
		return null;
	} else {
		return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
	}
}

export default formatDate;
