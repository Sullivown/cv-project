import React, { useRef } from 'react';
import CVOutput from './CVOutput';
import { useReactToPrint } from 'react-to-print';

import '../styles/output.css';

function Output(props) {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	return (
		<div id='output'>
			<div className='page'>
				<CVOutput data={props.data} ref={componentRef} />
			</div>
			<div className='controls'>
				<button onClick={handlePrint}>Print / Save as PDF</button>
			</div>
		</div>
	);
}

export default Output;
