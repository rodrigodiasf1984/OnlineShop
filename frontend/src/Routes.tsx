import { Redirect, Route, Switch } from 'react-router-dom';
import { Cart, Home, NavBar, NotFound } from './components';

const Routes = () => (
  <>
    <Switch>
      <Route path="/cart" exact component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Home} />
      <Redirect to="/not-found" />
    </Switch>
  </>
);

export default Routes;
