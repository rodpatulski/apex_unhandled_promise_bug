/**
 * @jest-environment jsdom
 * @jest-environment-options {"html": "<html><div id='chart'</html>"}
 */

/* NOTE #CHART IS DEFINED ABOVE ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */

// the ResizeObserver import is to create window.ResizeObserver which is not present in jsdom I assumet
import ResizeObserver from './__mocks__/ResizeObserver';

beforeAll(() => {
	console.log('INSIDE BEFOREALL');
});

import chart from './myapex.js';

test('use jsdom in a test file', () => {
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