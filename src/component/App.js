import React, {Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { routesMovies } from '../routes/routes';
import Layout from './layout/Layout';
import LoaderSpiner from './loaderSpiner/LoaderSpiner';

const App = () => {
  return (
    <Layout>
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