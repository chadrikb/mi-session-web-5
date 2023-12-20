import { Link } from "react-router-dom";
import "./Header.css";
import MenuBurger from "./MenuBurger";
import logo from "/src/assets/logo.svg";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(true);
  const receiveChildValue = (value) => {
    setOpen(value);
    // console.log(value);
  };
  return (
    <header className="h-full flex flex-row items-center place-content-between">
      <div className="logo z-50">
        <img src={logo} alt="logo" className="m-auto w-full h-44 p-8 " />
      </div>

      <MenuBurger sendValueToParent={receiveChildValue} />
      <div
        className={
          !open
            ? "slider-menu absolute top-0 left-0 h-screen w-full z-40 bg-white flex flex-col text-4xl text-rouge-pale place-content-evenly m-auto items-center"
            : "hidden"
        }
      >
        <Link to="/authentification" className="mt-16">
          Profile
        </Link>
        <Link to="/menu" className="">
          Menu
        </Link>
        <Link to="/num-de-commande" className="">
          Commande en cours
        </Link>
      </div>
    </header>
  );
};
export default Header;
