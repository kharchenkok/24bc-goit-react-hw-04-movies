import React from "react";
import style from "./MovieDetails.module.css";

const MovieDetails = ({movie}) => {
    const{title,releaseYear,score,overview,genres,posterSrc} = movie
  
  return (
      
    <div className={style.movieWrapper}>
      <div className={style.moviePosterImg}>
        {posterSrc && (
          <img
            src={`https://image.tmdb.org/t/p/original/${posterSrc}`}
            alt={title}
            width="250"
          />
        )}
      </div>
      <div className={style.movieDescription}>
        <h2 className={style.movieTitle}>
          {title}({releaseYear})
        </h2>
        <ul className={style.movieList}>
          <li className={style.movieListItem}>
            <p className={style.movieListItemTitle}>User Score:</p>
            <p>{score}</p>
          </li>
          <li className={style.movieListItem}>
            <p className={style.movieListItemTitle}>Overview:</p>
            <p>{overview}</p>
          </li>
          <li className={style.movieListItem}>
            <p className={style.movieListItemTitle}>Genres:</p>
            <p>
              {genres.map((genre) => (
                <span key={genre.id} className={style.movieListItemSpan}>
                  "{genre.name}"
                </span>
              ))}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
