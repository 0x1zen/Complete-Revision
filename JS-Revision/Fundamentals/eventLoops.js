console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);

console.log("End");

// 1.Callback registers in Api
// 2.After 5 seconds goes into callback queue
// 3.Event loop after checking call stack,pushes callback function from callback queue to call stack

// Fetch Request

fetch("https://google.com").then(
    function cbF(){
        console.log("Google Data");
    }
)

// 1.Callback registers in Api
// 2.After the response is received,the callback goes to microtask queue
// 3.Event loop after checking call stack,pushes callback function from callback queue to call stack
