import { lazy } from "react";


export  const routesMovies= [
  {
    path: "/",
    name: "HomePage",
    exact: true,
    component: lazy(() => import("../pages/HomePage" /* webpackChunkName: "HomePage"*/))
},
{
    path: "/movies",
    name: "MoviesPage",
    exact: true,
    component: lazy(() => import("../pages/MoviesPage" /* webpackChunkName: "MoviesPage"*/))
},
{
    path: "/movies/:movieId",
    name: "MovieDetailsPage",
    exact: false,
    component: lazy(() => import("../pages/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage"*/))
  },
  
];
