const myInput = document.querySelector("#name-input");
const myOutput = document.querySelector("#name-output");

myInput.addEventListener("input", e => {
  myOutput.textContent = e.currentTarget.value;

  if (e.currentTarget.value.length === 0) {
    myOutput.textContent = "Anonymous";
  }
});
