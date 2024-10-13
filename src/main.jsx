import React  from "react";
import ReactDOM from "react-dom/client"

const elem=<span >Hello JavaScript</span>;

// Functional Component

const HeadingComponent= () =>
(
    <div id="container">
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);


const title=(
    <h1 className="head" tabIndex="5">
        {elem} <br />
        Namaste React using JSX
        <HeadingComponent></HeadingComponent>
    </h1>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(title);











// const heading= React.createElement("h1",{id: "heading"},"Hello React")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

// How to create component by using JSX

// const jsxHeading=<h1 id="Head">Hello Namaste React</h1>
// const root1=ReactDOM.createRoot(document.getElementById("root"))
// root1.render(jsxHeading);

// const Heading= () =>
// {
//     return    <h1> Namaste React</h1>    
// };  


// const jsxHeading1=<h1 id="hello">hello player</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(jsxHeading1)
