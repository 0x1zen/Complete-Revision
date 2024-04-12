console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

// fetch(): fetch("https://google.com") initiates a network request and returns a promise.
// Promise: The returned promise represents the result of the network request. It will resolve with a response object when the request is
//  successful, or reject with an error if there is a failure.
// Attaching Callback: You attach a callback function (cbF) to the promise using the .then() method. This function will be executed when 
// the promise resolves.
// Callback Execution: Once the network request is complete and the promise resolves, the callback function (cbF) is enqueued in the 
// microtask queue and executed by the event loop when the JavaScript call stack is empty.

// Fetch Request

fetch("https://google.com").then(
    function cbF(){
        console.log("Google Data");
    }
)

// 1.Callback registers in Api
// 2.After the response is received,the callback goes to microtask queue
// 3.Event loop after checking call stack,pushes callback function from callback queue to call stack
