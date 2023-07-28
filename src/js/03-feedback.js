import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
// console.log(form);
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};
textArea();
form.addEventListener('input', throttle(savedForm, 500));

function savedForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', OnFormSubmit);

function OnFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function textArea() {
  const savedText = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedText) {
    try {
      let formenData = JSON.parse(savedText);
      emailInput.value = formenData.email;
      messageInput.value = formenData.message;
    } catch (error) {
      console.error('Error parsing saved form data:', error);
    }
  }
}
