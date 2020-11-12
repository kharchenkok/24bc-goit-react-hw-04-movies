import React, { Component } from "react";
import ErrorMassage from "../component/errorMassage/ErrorMassage";
import GoBackButton from "../component/goBackButton/GoBackButton";
import MovieAdditional from "../component/movieAdditional/MovieAdditional";
import MovieDetails from "../component/movieDetails/MovieDetails";
import { getFetchMovieDetails } from "../services/getFetch";

export default class MovieDetailsPage extends Component {
  state = {
    movie: {
      title: "",
      releaseYear: "",
      score: "",
      overview: "",
      genres: [],
      posterSrc: "",
    },
    from: "",
    search: "",
    error: null,
  };

  async componentDidMount() {
    const { match, location } = this.props;
    const id = match.params.movieId;
    // console.log(this.props.match.params.movieId);
    location.state?.from &&
      this.setState({
        from: location.state.from.pathname,
        search: location.state.from.search,
      });

    await getFetchMovieDetails(id)
      .then(
        ({
          title,
          release_date,
          vote_average,
          overview,
          genres,
          poster_path,
        }) => {
          this.setState({
            movie: {
              title: title,
              releaseYear: new Date(release_date).getFullYear(),
              score: vote_average,
              overview: overview,
              genres: genres,
              posterSrc: poster_path,
            },
          });
        }
      )
      .catch((error) => this.setState({ error: error }));
  }

  render() {
    const { movie, error, from, search } = this.state;

    return (
      <>
        {error ? (
          <ErrorMassage />
        ) : (
          <>
            <GoBackButton from={from} search={search} {...this.props} />
            <MovieDetails movie={movie} />

            <MovieAdditional {...this.props} />
          </>
        )}
      </>
    );
  }
}
