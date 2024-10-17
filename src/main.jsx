import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20230520/original/pngtree-burger-logo-png-image_9166715.png"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeBlIywcv4RMaVlvzAk-ygkpjyiX0juwM6Q&s" alt="" />  
      <h3>Meghna Foods</h3>
      <h4>Biryani,North Indian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>

    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> </div>
      <div className="res-containers">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );n
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



// const elem=<span >Hello JavaScript</span>;

// Functional Component

// const HeadingComponent= () =>
// (
//     <div id="container">
//         <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );


// const title=(
//     <h1 className="head" tabIndex="5">
//         {elem} <br />
//         Namaste React using JSX
//         <HeadingComponent></HeadingComponent>
//     </h1>
// )



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


  