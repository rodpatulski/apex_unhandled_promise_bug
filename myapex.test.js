/**
 * @jest-environment jsdom
 * @jest-environment-options {"html": "<html><div data-id='chart' id='chart'>hello</div></html>"}
 */

/* NOTE #CHART IS DEFINED ABOVE ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */

// the ResizeObserver import is to create window.ResizeObserver which is not present in jsdom I assumet
import ResizeObserver from './__mocks__/ResizeObserver';


// query utilities:
import {
	getByLabelText,
	getByText,
	getByTestId,
	queryByTestId,
	findByText,
	// Tip: all queries are also exposed on an object
	// called "queries" which you could import here as well
	waitFor,
	screen
} from '@testing-library/dom'

import chart from './myapex.js';

test('draw a chart', () => {
	//const element = document.createElement('div');
	//element.id = 'chart';
	
	//const root = global.document.getElementById('root');
	//document.body.appendChild(element);

	console.log(`The value of chart is ${chart}`);

	 let p = chart.render()
		// Prints "caught woops"
		.catch(error => {
			console.log('caught --------------------', error.message);
			console.log(error.stack);
		});
	//Promise.reject(new Error('woops')).catch(error => { console.info('caught', error.message); });


	const mychart = document.getElementById("chart");
	//const other = global.document.getElementsByTagName('p');

	console.log('************');
	//console.log(`Root is ${root}`);
	console.log(`Object is  ${mychart}`);
	console.log(`Length is  ${document.getElementsByTagName('*').length}`);
	//expect(mychart).toHaveLength(1);
	//expect(mychart.length).toBeGreaterThan(0);
	expect(mychart).not.toBeNull();
});


/* use this command to only run this test
npm run test -- -t 'use dom testing library'
*/
test('use dom testing library', () => {
	let div = screen.getByTestId('chart');
	console.log(screen);
});