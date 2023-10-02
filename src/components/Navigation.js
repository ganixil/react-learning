import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        <div className="mobileNav">
          <Link className="hover-effect" to="/">
            <h2>Home</h2>
          </Link>
          <Link className="hover-effect" to="/about">
            <h2>About</h2>
          </Link>
            <a
              className="hover-effect"
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              <h2>Menu</h2>
            </a>
          <Link className="hover-effect" to="/reservations">
            <h2>Reservations</h2>
          </Link>
          <Link className="hover-effect" to="/order">
            <h2>Order</h2>
          </Link>
          <Link className="hover-effect" to="/login">
            <h2>Login</h2>
          </Link>
        </div>
      ) : (
        <div className="desktopNav">
          <Link to="/">
            <img
              src={require("../assets/nav-logo.png")}
              alt="Little Lemon logo"
              className="nav-image"
            ></img>
          </Link>
          <Link className="hover-effect" to="/">
            <h2>Home</h2>
          </Link>
          <Link className="hover-effect" to="/about">
            <h2>About</h2>
          </Link>
            <a
              className="hover-effect"
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              <h2>Menu</h2>
            </a>
          <Link className="hover-effect" to="/reservations">
            <h2>Reservations</h2>
          </Link>
          <Link className="hover-effect" to="/order">
            <h2>Order</h2>
          </Link>
          <Link className="hover-effect" to="/login">
            <h2>Login</h2>
          </Link>
        </div>
      )}      
    </menu>
  );
}
