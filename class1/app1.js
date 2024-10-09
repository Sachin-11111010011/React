const grandparent=React.createElement("div",
{id:"grandparent"},
    React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
           [ React.createElement("h1",{},"Hello im a child"),
            React.createElement("h2",{},"Hello im a child2")]
        )));
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(grandparent);