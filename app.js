const continueBtns = document.querySelectorAll('.continue');
const backBtns = document.querySelectorAll('.back');
const values = document.querySelectorAll('[data-value]');
const numSpans = document.querySelectorAll('.stepper-number span');

// Initially all value divs are hidden except the first
values.forEach((valueDiv) => {
	valueDiv.classList.add('hidden');
});

values[0].classList.remove('hidden');

// Setting all step numbers to have grey bg's except the first
numSpans.forEach((span) => {
	span.style.background = 'rgba(0,0,0,0.4)';
});

numSpans[0].style.background = '#26a69a';

// Main logic for handling the events of continue and back btns
continueBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let stepValue = parseInt(btn.getAttribute([ 'data-current' ]));
		values[stepValue - 1].classList.add('hidden');
		values[stepValue].classList.remove('hidden');
		numSpans[stepValue].style.background = '#26a69a';
	});
});

backBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		let stepValue = parseInt(btn.getAttribute([ 'data-current' ]));
		values[stepValue - 1].classList.add('hidden');
		numSpans[stepValue - 1].style.background = 'rgba(0,0,0,0.4)';
		values[stepValue - 2].classList.remove('hidden');
	});
});
