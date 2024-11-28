// Functionality of the page should appear here
console.log("Hello ASCII")

// const output = document.getElementsByClassName("output");
// const input = document.getElementsByClassName("charInput");

console.log(document.getElementsByClassName(""));

function keyPress(event){
    console.log(event.key)
    let key = event.key;
    let value = key.charCodeAt(0)
    console.log(value)
    document.querySelector(".output").textContent = `You have entered ${key} and it's ASCII value is ${value}`;

    document.querySelector(".charInput").addEventListener("keydown", function(event){
        let newKey = event.key;
        console.log("keyUp")
        document.querySelectorAll(".charInput").value = newkey;
    })
}


// console.log(event.key)
// let key = event.key;
// let value = key.charCodeAt(0)
// console.log(value)
// document.querySelector(".output").textContent = `You have entered ${key} and it's ASCII value is ${value}`;

// document.querySelector(".charInput").removeEventListener("keydown",keyDown)
// document.querySelector(".charInput").addEventListener("keydown", keyDown);
// }
// function keyDown(event){
// let newKey = event.key;
// console.log("keyUp",newKey);
// document.querySelector(".charInput").value = newKey;
// }
