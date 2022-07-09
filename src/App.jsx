import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { useState } from "react";
import Anime from "../pages/Anime";
import AnimeDetails from "../pages/AnimeDetails";

export default function App() {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                setSearch={setSearch}
                setAnimeList={setAnimeList}
              />
            }
          />
          <Route
            path="/anime"
            element={
              <Anime
                search={search}
                setSearch={setSearch}
                animeList={animeList}
                setAnimeList={setAnimeList}
              />
            }
          />
          <Route path="/details/:mal_id" element={<AnimeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
