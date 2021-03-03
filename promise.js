// Synchronous Code Example

// function otherFunct() {
    // console.log("We are in another function");
    // console.log("Do some stuff");
// }
// console.log("Start");
// otherFunct();
// console.log("End");

// Asynchronous Code Example

console.log("Start");
setTimeout(() => {
console.log("We are in the timeout")
}, 5000);

console.log("End");