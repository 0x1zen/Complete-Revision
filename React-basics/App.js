import React from "react";
import ReactDOM from "react-dom/client";

// Using core React
// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// using JSX
const jsxHeading = <h1>Hello world from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
console.log(jsxHeading);
