import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import SelectedAnimeDetails from "../components/SelectedAnimeDetails";

export default function AnimeDetails() {
  const [animeDetails, setAnimeDetails] = useState([]);
  const [animeImg, setAnimeImg] = useState([]);
  const [date, setDate] = useState([]);

  const { mal_id } = useParams();
  useEffect(
    () =>
      async function fetchAnime(animeId) {
        const { data } = await axios.get(
          `https://api.jikan.moe/v4/anime/${animeId || mal_id}`
        );
        console.log(data.data);
        setAnimeDetails(data.data);
        setAnimeImg(data.data.images.jpg);
        setDate(data.data.aired);
      },
    [mal_id]
  );

  return (
    <div className="details__container">
      <Nav />
      <main>
        <Link to="/anime">
          <button className="details__button">
            <h2 className="back__button">
              <i className="fa-solid fa-arrow-left"> Back</i>
            </h2>
          </button>
        </Link>
        <SelectedAnimeDetails
          animeDetails={animeDetails}
          animeImg={animeImg}
          date={date}
        />
      </main>
    </div>
  );
}
