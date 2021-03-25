import React from "react";
import MenuItemsFoods from "./MenuItemsFoods";
import "./MenuItems.css";
function MenuItems(props) {
  var foodDetails = props.foodData;

  const foods = foodDetails.map((food) => (
    <MenuItemsFoods foods={food} addToCart={props.addToCart} />
  ));

  return (
    <div className="menuItems">
      <h2 style={{ fontSize: "35pxs" }}>Menu</h2>
      {foods}
    </div>
  );
}

export default MenuItems;
