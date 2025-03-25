"use strict";

const loginField = document.querySelector("#login");
// console.log(loginField);
const pwdField = document.querySelector("#password");
// console.log(pwdField);
const checkBox = document.querySelector("#acceptPolicy");
// console.log(checkBox);
const loginForm = document.querySelector("#loginForm");
// console.log(loginForm);


loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  if (loginField.value.length < 2 || loginField.value.length > 10) {
    loginField.classList.add("is-invalid");
    isValid = false;
  } 
  
  if (pwdField.value.length < 6 || pwdField.value.length > 20) {
    pwdField.classList.add("is-invalid");
    isValid = false;
  } 

  if (!checkBox.checked) {
    checkBox.classList.add("is-invalid");
    isValid = false;
  } 

  if (isValid) {
    const inputs = loginForm.querySelectorAll("input")
    for (let input of inputs){
      input.classList.remove('is-invalid')
    }
    console.log(`login : ${loginField.value}`)
    console.log(`password : ${pwdField.value}`)
  }
});
