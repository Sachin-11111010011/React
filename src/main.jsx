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
const styleCard =           
{
  backgroundColor: "#f0f0f0"
}
const RestaurantCard = (props) => {
 const {resData}= props;
  return (
    <div className="res-card" style={styleCard}>   
        <img className="img " height="140px" width="210px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaeBlIywcv4RMaVlvzAk-ygkpjyiX0juwM6Q&s" alt="" />  
      <h3>{resData.info.resName}</h3>
      <h4>{resData.info.cuisines.join(" , ")}</h4> 
      <h4>{resData.info.avgRating}</h4> 
      <h4>{resData.info.costForTwo / 100} FOR TWO</h4>
      <h4>{resData.info.deliveryTime}minutes</h4>
    </div>
  );
};
const resObj =
{
  "info": {
                      "id": "240669",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/ba3ea4d4-e498-4b7e-aa29-ef3b5f240f43_240669.jpg",
                      "locality": "Indira Nagar",
                      "areaName": "Adarsh Nagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.3,
                      "parentId": "166",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "17K+",
                      "sla": {
                        "deliveryTime": 42,
                        "lastMileTravel": 7.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "7.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2024-10-21 04:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                                  "description": "Delivery!"
                                }
                              },
                              {
                                "attributes": {
                                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                                  "description": "Delivery!"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=240669",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  }
                  
const Body = () => {
  return (
    <div className="body">
      <div className="search"> </div>
      <div className="res-containers">
        <RestaurantCard resData={resObj}/>
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


  