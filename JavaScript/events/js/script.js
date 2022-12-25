const btn = document.querySelector('.btn');
const form = document.querySelector('.form');
const counter = document.querySelector('.counter span');
const text = document.querySelector('.text');
const limit = text.getAttribute('maxlength');
document.addEventListener('click', function(event) {
	if (event.target.closest('.btn')) {
		form.classList.toggle('form-show');
	} else if (!event.target.closest('.text') && !event.target.closest('.btn')){
		form.classList.remove('form-show');
	}
});
document.addEventListener('keyup', function (event) {
	if (event.code == 'Escape') {
		form.classList.remove('form-show');
	}
});
counter.innerHTML = limit;
text.addEventListener('keyup', texCounter);
text.addEventListener('keydown', function (event) {
	if (event.repeat) texCounter();
});
function texCounter() {
	counter.innerHTML = limit - text.value.length;
}