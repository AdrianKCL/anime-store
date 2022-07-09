import React from "react";

export default function SelectedAnimeDetails({ animeDetails, animeImg, date }) {
  return (
    <>
      <div className="selected__anime">
        <figure className="selected__anime--container">
          <img src={animeImg.image_url} alt="" />
        </figure>
        <div className="anime__selected--description">
          <h1 className="anime__selected--title">{animeDetails.title}</h1>
          <div className="anime__selected--year">
            {date.string} • {animeDetails.status}
          </div>
          <div className="anime__selected--popularity">
            <h2>Popularity rank</h2>
            <span>{animeDetails.popularity}</span>
          </div>
          <div className="anime__selected--score">
            <h2>Score</h2>
            <span>{animeDetails.score}/10</span>
          </div>
          <div className="anime__selected--overview">
            <h2>Overview</h2>
            <span>{animeDetails.synopsis}</span>
          </div>
        </div>
      </div>
    </>
  );
}
