import Nav from "../components/Nav";
import AnimeCard from "../components/AnimeCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ({ search, setSearch, animeList, setAnimeList }) {
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetchAnime;
  }, []);
  async function fetchAnime(query) {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=8`
    );
    setLoading(false);
    setAnimeList(data.results);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };
  return (
    <div className="anime">
      <div className="overlay">
        <div className="container">
          <Nav />
          <header>
            <h1 className="header__title--overlay">Browse our animes</h1>
            <div className="header__search--container">
              <input
                type="text"
                className="header__search--input"
                placeholder="Search for an anime..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(event) =>
                  event.key === "Enter" && fetchAnime(search)
                }
              />
              <button
                type="submit"
                className="header__search"
                onClick={handleSearch}
              >
                <i className="fa-solid fa-search"></i>
              </button>
            </div>
          </header>
        </div>
      </div>

      <div className="top__container">
        <h2 className="search__results">
          Search results for <span className="orange">{search}</span>
        </h2>
      </div>
      <main>
        <div className="anime__list">
          {loading
            ? new Array(8).fill(0).map((_, index) => (
                <div className="anime__wrapper" key={index}>
                  <div className="anime__card--skeleton"></div>
                </div>
              ))
            : animeList.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
        </div>
      </main>
    </div>
  );
}
