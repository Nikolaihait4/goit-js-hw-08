import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
// console.log(form);
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};
form.addEventListener('input', throttle(savedForm, 500));
textArea();
// функция для записи в локал сторедж
function savedForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

// функция для отправки формы
form.addEventListener('submit', OnFormSubmit);

function OnFormSubmit(e) {
  e.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('Все поля должны быть заполнены!!!');
  } else {
    console.log(formData);
    // e.currentTarget.reset();
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

// функция на перезагрузку страницы
function textArea() {
  const savedText = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedText) {
    const formDataInput = JSON.parse(savedText);
    emailInput.value = formDataInput.email ?? '';
    messageInput.value = formDataInput.message ?? '';
    formData.email = emailInput.value;
    formData.message = messageInput.value;
  }
}
