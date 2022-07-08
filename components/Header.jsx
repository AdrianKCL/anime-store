import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderImage from "../assets/Header.png";

export default function Header(props) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/anime");
    }, 1000);
  };
  return (
    <header>
      <div className="header__description">
        <h2 className="header__title">
          Germany's most awarded free anime platform.
        </h2>
        <h3 className="header__subtitle">
          Find your favourite <span className="color">anime</span>
        </h3>
        <div className="header__input--container">
          <input
            type="text"
            className="header__search--input"
            placeholder="Search for an anime..."
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          ></input>
          <button
            onClick={() => {
              if (!loading) {
                onSubmit();
              }
            }}
            className={`header__input--button${
              loading ? " header__input--search--loading" : ""
            }`}
          >
            {!loading && <i className="fa-solid fa-search"></i>}
            {loading && <i className="fa-solid fa-spinner"></i>}
          </button>
        </div>
      </div>
      <img src={HeaderImage} className="header__img"></img>
    </header>
  );
}
