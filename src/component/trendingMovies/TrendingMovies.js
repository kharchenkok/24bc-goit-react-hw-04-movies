import React from "react";
import { Link } from "react-router-dom";
// import { getFetchTrendingMovies } from '../../services/getFetch'
// import ErrorMassage from '../errorMassage/ErrorMassage'

const TrendingMovies = ({ trandingList }) => {
  return (
    <ul>
      {trandingList.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingMovies;
