import "./menu-burger.css";
import { useState } from "react";
const MenuBurger = ({ sendValueToParent }) => {
  const [localOpen, setLocalOpen] = useState(false);

  const toggleButton = (e) => {
    e.preventDefault();
    setLocalOpen(!localOpen);
    sendValueToParent(localOpen);
    const burger = document.querySelector(".burger");
    burger.classList.toggle("animate");
  };

  return (
    <label
      className={`burger ${localOpen ? "animate" : ""} z-50`}
      htmlFor="burger"
      onClick={toggleButton}
    >
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default MenuBurger;
