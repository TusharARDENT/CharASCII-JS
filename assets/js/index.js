// Functionality of the page should appear here

const input = document.querySelector(".charInput");
const output = document.querySelector(".output");
const body = document.querySelector(".body");

input.addEventListener("keydown", keyPress);

function keyPress(event) {
    console.log(event.key);
    const key = event.key;
    let value = key.charCodeAt(0);
    const valid = isValid(key);

    if (valid) {
        console.log("valid");
        output.textContent = `You have entered ${key} and it's ASCII value is ${value}`;
        if (key.length === 1) {
            event.target.value = key;
        } else {
            event.target.value = "";
            output.textContent = `JS Output`;
        }
        body.classList.remove("error")
        output.classList.remove("error-word");
    } else {
        console.log("Invalid");
        output.textContent = `You have entered ${key} it is not a valid input`;
        output.classList.add("error-word");
        console.log(body.classList.add("error"));
    }
    console.log(event.target.value)
}

function isValid(val) {
    const myRegEx = /^[A-Za-z0-9]/;
    const isValid = myRegEx.test(val);
    return isValid;
}
