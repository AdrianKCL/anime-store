import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <div className="anime__wrapper">
      <div className="anime__card">
        <figure className="anime__img--wrapper">
          <img src={anime.image_url} alt="Anime Image" className="anime__img" />
        </figure>
        <div className="anime__description">
          <div className="anime__title">{anime.title}</div>
          <Link to={`/details/${anime.mal_id}`}>
            <button className="anime__button">See details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
