const heading=React.createElement("h1",{className:"heading",id:"hello"},"Hello World From React!");
const heading2=React.createElement("h2",{className:"heading2",id:"hello2"},"Hello World From React2!");
const child=React.createElement("div",{id:"child"},[heading,heading2]);
const child2=React.createElement("div",{id:"child"},[heading,heading2]);
const parent=React.createElement("div",{id:"parent"},[child,child2]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);