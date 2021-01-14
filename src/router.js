import React, { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const Home = lazy(() => import('modules/home/Home'))

function Loading() {
  return <div>Loading...</div>
}

const Routes = (
  <Router>
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Suspense>
  </Router>
);
export default Routes;
