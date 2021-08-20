import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IronManPage, LandingPage, NotFoundPage, SearchPage } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/iron-man" component={IronManPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
