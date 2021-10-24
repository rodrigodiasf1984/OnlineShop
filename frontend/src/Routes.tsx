import { Redirect, Route, Switch } from 'react-router-dom';
import { Admin, Home } from './pages';
import { Cart, NotFound } from './components';

const Routes = () => (
  <>
    <Switch>
      <Route path="/cart" exact component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Home} />
      <Route path="/Admin" exact component={Admin} />
      <Redirect to="/not-found" />
    </Switch>
  </>
);

export default Routes;
