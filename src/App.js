import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GiphyLogo from "./giphy-logo.svg";
import { IronManPage, LandingPage, NotFoundPage, SearchPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <LandingPage {...props} logo={GiphyLogo} />}
        />
        <Route path="/iron-man" component={IronManPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
