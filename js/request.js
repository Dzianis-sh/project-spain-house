const submit = document.querySelector('.form__btn');
const approveWindow = document.querySelector('.approve-window');
const closeBtn = document.querySelector('.approve-window__close');
const objectForm = document.forms.objectform;
const formCheckbox = document.querySelector('input[type=checkbox]');
const inputsRequired = document.querySelectorAll('.required');


// fake send request and get success respond
submit.addEventListener('click', function (event) {

  const name = objectForm.username.value;
  const message = objectForm.usermessage.value;
  const productcode = objectForm.productcode.value;
  const email = objectForm.useremail;
  const isChecked = formCheckbox.checked;

  if (!name.trim() || !message.trim() || !isChecked || !productcode.trim() || (isValidEmail(email))) {
    event.preventDefault();
  } else {
    approveWindow.classList.remove('hidden');
    body.classList.add('scrollock');
    autoCloseWindow();
  }

  if (isValidEmail(email)) {
    email.classList.add('invalid');

  } else {
    email.classList.remove('invalid');
    event.preventDefault();
  }


  // for (let i of inputsRequired) {
  //   if (i.value.trim()) {
  //     i.classList.remove('invalid');
  //   } else {
  //     i.classList.add('invalid');
  //   }
  // }

  for (let i = 0; i < inputsRequired.length; i++) {

    if (inputsRequired[i].value.trim().length === 0) {
      inputsRequired[i].classList.add('invalid');
    } else {
      inputsRequired[i].classList.remove('invalid');
    }
  }
});


closeBtn.addEventListener('click', () => {
  approveWindow.classList.add('hidden');
  body.classList.remove('scrollock');
});

function isValidEmail(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

