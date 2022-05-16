import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import EducationItemFactory from '../factories/EducationItemFactory';
import WorkHistory from './WorkHistory';
import WorkHistoryItemFactory from '../factories/WorkHistoryItemFactory';

import Output from './Output';

function Main() {
	const [state, setState] = useState({
		personal: { firstName: '', lastName: '', email: '', phone: '' },
		education: [],
		work: [],
	});

	const handleChange = (event) => {
		const source = event.target.closest('.section').dataset.source;
		if (source === 'personal') {
			const newObj = { ...state.personal };
			newObj[event.target.name] = event.target.value;
			setState((prevState) => ({
				...prevState,
				personal: newObj,
			}));
		} else {
			const newArr = state[source];
			const index = newArr.findIndex(
				(item) => item.id === event.target.closest('form').dataset.id
			);
			const item = newArr[index];
			item[event.target.name] = event.target.value;
			newArr.splice(index, 1, item);
			setState((prevState) => ({
				...prevState,
				[source]: newArr,
			}));
		}
	};

	const handleClick = (event) => {
		const source = event.target.closest('.section').dataset.source;
		if (event.target.dataset.command === 'addNew') {
			const newArr = state[source];
			const item =
				source === 'education'
					? EducationItemFactory()
					: WorkHistoryItemFactory();
			newArr.push(item);
			setState((prevState) => ({
				...prevState,
				[source]: newArr,
			}));
		}

		if (event.target.dataset.command === 'delete') {
			deleteEntry(event.target.dataset.id, source);
		}
	};

	const deleteEntry = (id, source) => {
		const newArr = state[source];
		const index = newArr.findIndex((item) => item.id === id);
		newArr.splice(index, 1);
		setState((prevState) => ({
			...prevState,
			[source]: newArr,
		}));
	};

	return (
		<main>
			<div id='leftDiv'>
				<PersonalInfo
					data={state.personal}
					handleChange={handleChange}
					handleClick={handleClick}
				/>
				<Education
					data={state.education}
					handleChange={handleChange}
					handleClick={handleClick}
				/>
				<WorkHistory
					data={state.work}
					handleChange={handleChange}
					handleClick={handleClick}
				/>
			</div>
			<div id='rightDiv'>
				<Output data={state} />
			</div>
		</main>
	);
}

export default Main;
