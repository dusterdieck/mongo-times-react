import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import Main from "../components/Main";
import Saved from "../components/Saved";
import Articles from "../components/Articles";

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
	    <Route path="saved" component={Saved} />
	    <IndexRoute component={Articles} />
    </Route>
  </Router>
);

export default routes;
