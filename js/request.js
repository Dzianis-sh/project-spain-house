const submit = document.querySelector('.form__btn');
const approveWindow = document.querySelector('.approve-window');
const closeBtn = document.querySelector('.approve-window__close');
const objectForm = document.forms.objectform;
const formCheckbox = document.querySelector('input[type=checkbox]');
// const timeCounter = document.querySelector('');
const inputs = document.querySelectorAll('.required');
const checkbox = document.querySelector('.form-input-checkbox-border');


// fake send request and get success respond
submit.addEventListener('click', function (event) {

  const name = objectForm.username.value;
  const email = objectForm.useremail.value;
  const message = objectForm.usermessage.value;
  const productcode = objectForm.productcode.value;
  const isChecked = formCheckbox.checked;
  if (!name || !email || !message || !isChecked || !productcode) {
    event.preventDefault();
  } else {
    approveWindow.classList.remove('hidden');
    body.classList.add('scrollock');
  }
  // for (let i = 0; i <= inputs.length; i++) {
  // if (inputs[i].value || checkbox === false) {
  //   checkbox.classList.remove('invalid');
  //   inputs[i].classList.remove('invalid');
  // } else {
  //   checkbox.classList.add('invalid');
  //   inputs[i].classList.add('invalid');
  // }
  // setTimeout(() => {
  //   approveWindow.classList.add('hidden');
  //   body.classList.remove('scrollock');
  // }, 3000);
  // }

});

closeBtn.addEventListener('click', () => {
  approveWindow.classList.add('hidden');
  body.classList.remove('scrollock');
});



