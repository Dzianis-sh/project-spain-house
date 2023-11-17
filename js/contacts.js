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

// function autoCloseWindow(delay) {
//   for (let i = 0; i <= delay; i++) {
//     delay--;
//     console.log(1)
//   }

//   approveWindow.insertAdjacentHTML(
//     'afterbegin',
//     '<div>Window automatically close after 3 sec</div>'
//   );
//   setTimeout(() => {
//     approveWindow.classList.add('hidden');
//     body.classList.remove('scrollock');
//   }, 3000);
// }

closeBtn.addEventListener('click', () => {
  approveWindow.classList.add('hidden');
  body.classList.remove('scrollock');
});

function isValidEmail(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


