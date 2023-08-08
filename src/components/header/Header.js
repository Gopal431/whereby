import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar">
        <Link to='/'><img  src={logo} alt="logo" /></Link>
      <ul className="nav-links">
        <li><Link>Products</Link></li>
        <li><Link>Pricing</Link></li>
        <li><Link>Developers</Link></li>
        <li><Link>Resources</Link></li>
        <li><Link to="/read">CRUD</Link></li>
      </ul>
      <div>
        <button className="btn login">Login</button>
        <button className="btn free">Try for free</button>
      </div>
    </nav>
  );
};

export default Header;
