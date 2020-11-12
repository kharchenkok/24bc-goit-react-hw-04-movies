import React, { Component, Suspense } from "react";

import { Route, Switch } from "react-router-dom";
import style from "./MovieAdditional.module.css";

import LoaderSpiner from "../loaderSpiner/LoaderSpiner";
import {
  getFetchMovieCredits,
  getFetchMovieReviews,
} from "../../services/getFetch";

import AditionalList from "../aditionalList/AditionalList";

import { movieDetailsPageRoute } from "../../routes/routes";

export default class MovieAdditional extends Component {
  state = {
    cast: [],
    reviews: [],
    error: null,
  };

  getHandleCast = () => {
    const { match } = this.props;
    const id = match.params.movieId;
    getFetchMovieCredits(id)
      .then((data) => this.setState({ cast: data }))
      .catch((error) => this.setState({ error: error }));
  };

  getHandleReviews = () => {
    const { match } = this.props;
    const id = match.params.movieId;
    getFetchMovieReviews(id)
      .then((data) => this.setState({ reviews: data }))
      .catch((error) => this.setState({ error: error }));
  };

  render() {
    const { match } = this.props;
    const { cast, reviews } = this.state;

    return (
      <div className={style.additionalWrapper}>
        <AditionalList
          match={match}
          getHandleCast={this.getHandleCast}
          getHandleReviews={this.getHandleReviews}
        />
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            {movieDetailsPageRoute.map(
              ({ path, exact, component: Page, name }) => {
                const routePath = path.slice(1);

                return (
                  <Route
                    key={name}
                    path={`${match.url}${path}`}
                    exact={exact}
                    render={(props) => (
                      <Page
                        infoArr={routePath === "cast" ? cast : reviews}
                        {...props}
                      />
                    )}
                  />
                );
              }
            )}
          </Switch>
        </Suspense>
      </div>
    );
  }
}
