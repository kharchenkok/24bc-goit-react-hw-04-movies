import { lazy } from "react";

export const routesMovies = [
  {
    path: "/",
    name: "HomePage",
    exact: true,
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "HomePage"*/)
    ),
  },
  {
    path: "/movies",
    name: "MoviesPage",
    exact: true,
    component: lazy(() =>
      import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage"*/)
    ),
  },
  {
    path: "/movies/:movieId",
    name: "MovieDetailsPage",
    exact: false,
    component: lazy(() =>
      import(
        "../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/
      )
    ),
  },
];

export const movieDetailsPageRoute = [
  {
    path: "/cast",
    name: "Cast",
    exact: false,
    component: lazy(() =>
      import("../component/cast/Cast" /* webpackChunkName: "Cast"*/)
    ),
  },
  {
    path: "/reviews",
    name: "Reviews",
    exact: false,
    component: lazy(() =>
      import("../component/reviews/Reviews" /* webpackChunkName: "Reviews"*/)
    ),
  },
];
