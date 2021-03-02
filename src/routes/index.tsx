import { Switch, Route } from 'react-router-dom';

import Dashboard from '@pages/Dashboard';
import Anime from '@pages/Anime';
import Categories from '@pages/Categories';

const Routes = () => (
  <Switch>
    <Route component={Dashboard} path="/" exact />
    <Route component={Anime} path="/anime/:animeId" />
    <Route component={Categories} path="/categories/:category/:sub_category" />
  </Switch>
);

export default Routes;
