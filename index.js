let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);


const signNowButton = document.getElementById("sign-now-button");


const addSignature = () => {

    // Write your code to manipulate the DOM here
    let fname = document.getElementById("name").value;
    let hometown = document.getElementById("hometown").value;

    let newSignature = document.createElement('p');
    newSignature.textContent = "🖊️ "+fname+" from "+ hometown +" supports this cause.";

    let signatures = document.querySelector(".signatures");
    signatures.appendChild(newSignature);
}

const validateForm = () => {

  let containErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  for (var i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!email.value.includes('.com')) {
    containErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  if (!containErrors){
    addSignature();

    for (var i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      petitionInputs[i].classList.remove('error');
    }
  }
}

signNowButton.addEventListener('click', validateForm);
