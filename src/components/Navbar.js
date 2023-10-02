import { useState } from "react";
import Navigation from "./Navigation";
import Hamburger from "../assets/hamburger.png";
import Close from "../assets/close.png";
import "./styles/Navbar.css";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <button className="burger-icon" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
          {navbarOpen ? <Navigation device="mobile" /> : ""}
        </button>
      </nav>
      <Navigation device="desktop" />
      
    </nav>
  );
}
