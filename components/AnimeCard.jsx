import React from "react";

export default function AnimeCard({ anime }) {
  return (
    <div className="anime__wrapper">
      <div className="anime__card">
        <figure className="anime__img--wrapper">
          <img src={anime.image_url} alt="Anime Image" className="anime__img" />
        </figure>
        <div className="anime__description">
          {anime.title}
          <button>See details</button>
        </div>
      </div>
    </div>
  );
}
