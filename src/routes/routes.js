import React, { lazy } from "react";

export const routers={
    homePage:'/',
    moviesPage:'/movies',
    movieDetailsPage:'/movies/:movieId'
}

// export  const routes= [
//   {
//     path: "/",
//     name: "HomePage",
//     exact: true,
//     component: {HomePage},
//     // component: lazy(() => import("../pages/Home" /* webpackChunkName: "home"*/))
//   },
//   {
//     path: "/movies",
//     name: "MoviesPage",
//     exact: true,
//     component: {MoviesPage},
//   },
//   {
//     path: "/movies/:movieId",
//     name: "MovieDetailsPage",
//     exact: true,
//     component: {MovieDetailsPage},
//   },
  
// ];
