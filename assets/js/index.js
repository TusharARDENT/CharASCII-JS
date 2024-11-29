// Functionality of the page should appear here
function keyPress(event) {
    console.log(event.key);
    const key = event.key;
    let value = key.charCodeAt(0);
    // console.log(value);
    const valid = isValid(key);
    if (valid) {
        console.log("valid");     
        document.querySelector(".output").textContent = `You have entered ${key} and it's ASCII value is ${value}`;
        document.querySelector(".charInput").addEventListener("keydown", keyDown);        
        // console.log(isValid(key));
        document.querySelector(".body").classList.remove("error")
        document.querySelector(".output").classList.remove("error-word");

    } else {
        console.log("Invalid");    
        document.querySelector(".charInput").addEventListener("keydown", keyDown);  
        document.querySelector(".output").textContent = `You have not entered a valid input`;      
        document.querySelector(".output").classList.add("error-word");
        console.log(document.querySelector(".body").classList.add("error"));
    }
}

function keyDown(event) {
    let newKey = event.key;
    if(newKey.length === 1){
        document.querySelector(".charInput").value = newKey;
    }else{
        document.querySelector(".charInput").value = "";
        document.querySelector(".output").textContent = `JS Output`;
    }
}

function isValid(val) {
    const myRegEx = /^[A-Za-z0-9]/;
    const isValid = myRegEx.test(val);
    return isValid;
}
