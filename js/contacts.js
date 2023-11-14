const submit = document.querySelector('.form__btn');
const approveWindow = document.querySelector('.approve-window');
const closeBtn = document.querySelector('.approve-window__close');
const objectForm = document.forms.objectform;
const formCheckbox = document.querySelector('input[type=checkbox]');
const inputRequired = document.querySelectorAll('.required');



// fake send request and get success respond
submit.addEventListener('click', function (event) {

  const name = objectForm.username.value;
  const message = objectForm.usermessage.value;
  const email = objectForm.useremail;
  const isChecked = formCheckbox.checked;

  if (!name.trim() || !message.trim() || !isChecked || (isValidEmail(email))) {
    event.preventDefault();
  } else {
    approveWindow.classList.remove('hidden');
    body.classList.add('scrollock');
  }

  if (isValidEmail(email)) {
    email.classList.add('invalid');
  } else {
    email.classList.remove('invalid');
  }

  for (let i = 0; i <= inputRequired.length; i++) {
    if (inputRequired[i].value.trim()) {
      inputRequired[i].classList.remove('invalid');
    } else {
      inputRequired[i].classList.add('invalid');
    }
  }
});


// .value.length === 0
// setTimeout(() => {
//   approveWindow.classList.add('hidden');
//   body.classList.remove('scrollock');
// }, 3000);
// }

closeBtn.addEventListener('click', () => {
  approveWindow.classList.add('hidden');
  body.classList.remove('scrollock');
});

function isValidEmail(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


