import "./themes/main/style.css";


/* Валидация формы */
const form = document.querySelector('.search__form');
const submit = document.querySelector('.search__button');

submit.addEventListener('click', sendForm);

function validate(element) {
    if(!element.checkValidity()) {
        document.querySelector('.search__error').style.display = 'block';
    }
}

function sendForm (event) {
    event.preventDefault();
    validate(form.elements.theme);
}
/* --------------- */