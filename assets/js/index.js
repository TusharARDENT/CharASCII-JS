// Functionality of the page should appear here
console.log("Hello ASCII");

// const output = document.getElementsByClassName("output");
// const input = document.getElementsByClassName("charInput");

console.log(document.getElementsByClassName(""));

function keyPress(event) {
  console.log(event.key);
  let key = event.key;
  let value = key.charCodeAt(0);
  console.log(value);
  const valid = isValid(key);
  document.querySelector(
    ".output"
  ).textContent = `You have entered ${key} and it's ASCII value is ${value}`;
  document.querySelector(".charInput").addEventListener("keydown", keyDown);

  if (key.length > 1) {
    return false;
  }

  console.log(isValid(key));
  if (valid) {
    console.log("valid");
  } else if (!valid) {
    console.log("Invalid");
    document.querySelector(
      ".output"
    ).textContent = `You have entered ${key} and It is not a valid input`;
    document.getElementsByTagName("body").classList.addClass("");
  }
}

function keyDown(event) {
  let newKey = event.key;
  document.querySelector(".charInput").value = newKey;
}

function isValid(val) {
  const myRegEx = /^[A-Za-z0-9]/;
  console.log(myRegEx);
  const isValid = myRegEx.test(val);
  return isValid;
}
