const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', handleInput);

function handleInput(event) {
  const key = event.target.name;
  const value = event.target.value.trim();

  formData[key] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function getFormData() {
  const data = localStorage.getItem('feedback-form-state');
  if (data) {
    const parseData = JSON.parse(data);
    formData.email = parseData.email || '';
    formData.message = parseData.message || '';
  }
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
getFormData();

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log('Data:', formData);
    event.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
