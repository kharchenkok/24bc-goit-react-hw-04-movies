import React, {Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import HomePage from '../pages/HomePage';
// import MovieDetailsPage from '../pages/MovieDetailsPage';
// import MoviesPage from '../pages/MoviesPage';
import { routesMovies } from '../routes/routes';
import Layout from './layout/Layout';
import LoaderSpiner from './loaderSpiner/LoaderSpiner';
// import Navigation from './navigation/Navigation';
// import { routers } from '../routes/routes';

const App = () => {
  return (
    <Layout>
    {/* <Navigation/> */}
     <Suspense fallback={<LoaderSpiner/>} >
          <Switch>
            {routesMovies.map(({ path, exact, component: Page, name }) => {
              return <Route
                key={name}
                path={path}
                exact={exact}
                render={(props) => <Page {...props} />}
              />
            })}
            <Redirect to='/'/>
          </Switch>
          </Suspense>
      
    </Layout>
  );
};

export default App;