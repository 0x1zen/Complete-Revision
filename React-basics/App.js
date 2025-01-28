import React from "react";
import ReactDOM from "react-dom/client";

// Using core React
// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// using JSX
const heading = <h1 id="hello">Hello world from JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);
function retSom({ num }) {
  return num == 95 ? "correct" : "not";
}

const Title = () => <h1 id="title">Welcome To React!</h1>;
const num = 95;
const HeadingComponent = ({ num }) => (
  <div id="heading">
    {/* <Title /> */}
    {Title()}
    {retSom({ num })}
    <p>This is Interesting!</p>
  </div>
);
root.render(<HeadingComponent num={num} />);
