const button1 = document.querySelector('#button1');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal-close');

button1.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('hidden-off');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('hidden-off');
    modal.classList.add('hidden');
});
