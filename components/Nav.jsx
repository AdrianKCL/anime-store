import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  function openMenu() {
    document.body.classList.add("menu--open");
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <a href="/">
        <img src="../assets/logo.png"></img>
      </a>
      <ul className="nav__links">
        <li className="nav__list">
          <Link
            to="/"
            className="nav__link link__hover-effect link__hover-effect--orange orange"
          >
            Home
          </Link>
        </li>
        <li className="nav__list">
          <Link
            to="/anime"
            className="nav__link link__hover-effect link__hover-effect"
          >
            Browse our animes
          </Link>
        </li>
        <li className="nav__list">
          <Link
            to="/contact"
            className="nav__link link__hover-effect link__hover-effect no-cursor"
          >
            Contact
          </Link>
        </li>
      </ul>

      <button className="btn__menu" onClick={openMenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/browse" className="menu__link" onClick={closeMenu}>
              Browse Animes
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/contact" className="menu__link" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
