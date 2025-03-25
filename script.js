const loginField = document.querySelector("#login");
// console.log(loginField);
const pwdField = document.querySelector("#password");
// console.log(pwdField);
const checkBox = document.querySelector("#acceptPolicy");
// console.log(checkBox);
const myForm = document.querySelector("#loginForm");
// console.log(myForm);

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (loginField.value.length < 2 || loginField.value.length > 10) {
    loginField.classList.add("is-invalid", "invaid-feedback");
  } else {
    console.log(loginField.value);
  }
  if (pwdField.value.length < 6 || pwdField.value.length > 20) {
    pwdField.classList.add("is-invalid", "invaid-feedback");
  } else {
    console.log(pwdField.value);
  }
  if (!checkBox.checked) {
    checkBox.classList.add("is-invalid", "invaid-feedback");
  } else {
    return;
  }
});
