const continueBtns = document.querySelectorAll('.continue');
const backBtns = document.querySelectorAll('.back');
const values = document.querySelectorAll('[data-value]');
const numSpans = document.querySelectorAll('.stepper-number span');

function open(elem) {
	let height = elem.scrollHeight;
	elem.style.maxHeight = `${height}px`;
}

function close(elem) {
	elem.style.maxHeight = null;
}

// Initially all value divs are hidden except the first
open(values[0]);
values[0].classList.add('open');

// Setting all step numbers to have grey bg's except the first
numSpans.forEach((span) => {
	span.style.background = 'rgba(0,0,0,0.4)';
});

numSpans[0].style.background = '#26a69a';

// Main logic for handling the events of continue and back btns
continueBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let stepValue = parseInt(btn.getAttribute([ 'data-current' ]));
		values[stepValue - 1].classList.remove('open');
		close(values[stepValue - 1]);
		values[stepValue].classList.add('open');
		open(values[stepValue]);
		numSpans[stepValue].style.background = '#26a69a';
	});
});

backBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let stepValue = parseInt(btn.getAttribute([ 'data-current' ]));
		values[stepValue - 1].classList.remove('open');
		close(values[stepValue - 1]);
		numSpans[stepValue - 1].style.background = 'rgba(0,0,0,0.4)';
		values[stepValue - 2].classList.add('open');
		open(values[stepValue - 2]);
	});
});
