import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage';
import { routers } from '../routes/routes';

const App = () => {
  return (
    <>
      <Switch>
      <Route exact path={routers.homePage} component={HomePage} />
      <Route exact path={routers.moviesPage} component={MoviesPage} />
              <Route
                path={routers.movieDetailsPage}
                component={MovieDetailsPage}
              />
              <Redirect to={routers.homePage} />
    </Switch>
    </>
  );
};

export default App;