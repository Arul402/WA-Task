import React from "react";
import { IoSearch, IoTimerOutline } from "react-icons/io5";
import CoconutRice from "../components/assets/images/Coconutrice.jpg";
import vegLogo from "../components/assets/images/veglogo.jpg";
import redChilli from "../components/assets/images/redchilli2.jpg";
import idli from "../components/assets/images/idli.jpg";
import puliyotharaiRice from "../components/assets/images/puliyotharai.jpg";
import lemonRice from "../components/assets/images/lemonrice.jpg";
import tomatoRice from "../components/assets/images/tomatorice.jpg";
import curdRice from "../components/assets/images/curdrice.jpg";
import { Link } from "react-router-dom";

function Menu() {
  const foodItems = [
    { name: "Coconut Rice", image: CoconutRice },
    { name: "Puliyotharai Rice", image: puliyotharaiRice },
    { name: "Lemon Rice", image: lemonRice },
    { name: "Tomato Rice", image: tomatoRice },
    { name: "Curd Rice", image: curdRice },
    { name: "Idli", image: idli },
  ];

  return (
    <>
      <div className="container2">
        <div>
          <h2 className="title-name">TamilNadu Foods</h2>
        </div>
        <div className="nav__search">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-btn">
            <IoSearch />
          </button>
        </div>
      </div>

      <div className="container">
        {foodItems.map((food, index) => (
          <Link to={`/detail/${index}`} key={index} className="product-card">
            <div className="badge">
              <img src={vegLogo} alt="Veg" className="veg-pic" />
            </div>
            <div className="product-image">
              <img src={food.image} alt={food.name} className="profile-pic" />
              <div className="image-overlay">
                <h3>{food.name}</h3>
              </div>
            </div>
            <div className="product-footer">
              <span>
                <img src={redChilli} alt="Red Chilli" className="redchilli-pic" />
              </span>
              <span>
                <h3>
                  <IoTimerOutline />
                  &nbsp; 30 mins
                </h3>
              </span>
            </div>
          </Link>

          
        ))}

{foodItems.map((food, index) => (
          <Link to={`/detail/${index}`} key={index} className="product-card">
            <div className="badge">
              <img src={vegLogo} alt="Veg" className="veg-pic" />
            </div>
            <div className="product-image">
              <img src={food.image} alt={food.name} className="profile-pic" />
              <div className="image-overlay">
                <h3>{food.name}</h3>
              </div>
            </div>
            <div className="product-footer">
              <span>
                <img src={redChilli} alt="Red Chilli" className="redchilli-pic" />
              </span>
              <span>
                <h3>
                  <IoTimerOutline />
                  &nbsp; 30 mins
                </h3>
              </span>
            </div>
          </Link>

          
        ))}
      </div>
    </>
  );
}

export default Menu;
