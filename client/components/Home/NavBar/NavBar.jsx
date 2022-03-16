import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.scss"

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <div className="nav-logo__img">
          <img src="https://icones.pro/wp-content/uploads/2021/03/icone-de-portefeuille-d-argent-violet.png" />
        </div>
        <h3 className="nav-logo__title">WalletApp</h3>
      </div>
      <ul className="nav-links">
        <Link className="nav-links__link" to={"/login"}>Login</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
