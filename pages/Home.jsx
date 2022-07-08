import React from "react";
import Nav from "../components/Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ({ search, setSearch, setAnimeList }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async () => {
    setLoading(true);
    fetchAnime(search);
    setTimeout(() => {
      navigate("/anime");
    }, 1000);
  };

  async function fetchAnime(query) {
    const { data } = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=8`
    );

    setAnimeList(data.results);
  }
  return (
    <div className="home">
      <Nav />
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for an anime..."
              onKeyPress={(event) => event.key === "Enter" && onSubmit()}
            />
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
        <img src="../assets/headerimg.svg" className="header__img"></img>
      </header>
    </div>
  );
}
