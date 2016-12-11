/**
 * Project Name: Kickoff
 * @description The Kickoff boilerplate js file
 * @author The Kickoff team
 *
 * Need help using JSDoc? Find out more at http://usejsdoc.org/
 */

'use-strict';

// their code e.g. npm modules
import ready from 'lite-ready'; // https://github.com/nicbell/liteready
import $$ from 'double-dollar'; // https://github.com/mrmartineau/double-dollar
import svg4everybody from 'svg4everybody'; // https://github.com/jonathantneal/svg4everybody

// Global libs that don't return a value
import 'console';
import 'kickoff-welcome.js'; // The Kickoff message in the js console. Remove it if you like :)

window.$$ = $$; // add double-dollar to global scope

// DOM ready code goes in here
ready(() => {
	// moduleTest(); // this is a test, uncomment this line to try it
	svg4everybody();

	bob();
});



function bob() {

	console.log('test');

	var rsvpBtn  = document.querySelectorAll('#btn-rsvp'),
		sunnies = document.querySelector('.heartTree');

	rsvpBtn[0].addEventListener('mouseover', function () {
		sunnies.classList.add('is-active');
	});

	rsvpBtn[0].addEventListener('mouseout', function () {
		sunnies.classList.remove('is-active');
	});

}
