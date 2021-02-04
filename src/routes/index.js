import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./home";
import Items from "./item-list";
import ItemDetail from "./item-detail";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/items" exact component={Items} />
        <Route path="/items/:id" component={ItemDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
