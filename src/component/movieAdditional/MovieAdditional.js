import React, { Component, lazy, Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import style from "./MovieAdditional.module.css";

import LoaderSpiner from "../loaderSpiner/LoaderSpiner";
import {
  getFetchMovieCredits,
  getFetchMovieReviews,
} from "../../services/getFetch";

import AditionalList from "../aditionalList/AditionalList";


const Cast = lazy(() => import("../cast/Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

export default class MovieAdditional extends Component {
  state = {
    cast: [],
    reviews: [],
    error: null,
  };

  async componentDidMount() {
    const { match } = this.props;
    const id = match.params.movieId;
    await getFetchMovieCredits(id)
      .then((data) => this.setState({ cast: data }))
      .catch((error) => this.setState({ error: error }));
    await getFetchMovieReviews(id)
      .then((data) => this.setState({ reviews: data }))
      .catch((error) => this.setState({ error: error }));
  }

  render() {
    const { match } = this.props;
    const { cast, reviews } = this.state;

    return (
      <div className={style.additionalWrapper}>
        <AditionalList match={match} />
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            <Route
              path={`${match.url}/cast`}
              render={(props) => <Cast {...props} castArr={cast} />}
            />
            <Route
              path={`${match.url}/reviews`}
              render={(props) => <Reviews {...props} reviewsArr={reviews} />}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
