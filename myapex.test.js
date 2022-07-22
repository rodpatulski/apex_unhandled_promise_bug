/**
 * @jest-environment jsdom
 */

import chart from './myapex.js';

test('use jsdom in a test file', () => {
	const element = document.createElement('div');
	element.id = 'chart';
	
	//const root = global.document.getElementById('root');
	document.body.appendChild(element);

	chart.render();


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