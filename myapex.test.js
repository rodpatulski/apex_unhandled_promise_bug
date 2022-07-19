/**
 * @jest-environment jsdom
 */

test('use jsdom in a test file', () => {
	const element = global.document.createElement('div');
	element.id = 'myid';
	
	const root = global.document.getElementById('root');
	root.appendChild(element);


	const mychart = global.document.getElementById("myid");
	//const other = global.document.getElementsByTagName('p');

	console.log('************');
	console.log(`Root is ${root}`);
	console.log(`Object is  ${mychart}`);
	console.log(`Length is  ${document.getElementsByTagName('*').length}`);
	//expect(mychart).toHaveLength(1);
	//expect(mychart.length).toBeGreaterThan(0);
	expect(mychart).not.toBeNull();
});