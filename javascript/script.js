"use strict";
const btn = document.querySelector(".main-hero-form-btn");
const input = document.querySelector(".main-hero-form-input");
const errorMessage = document.querySelector(".main-hero-form-error");

btn.addEventListener("click", function () {
   if (input.checkValidity() == false) {
      errorMessage.style.visibility = "visible";
      input.style.border = "1px solid red";
   }
});
