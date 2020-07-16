import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Feeds from "./pages/Feeds";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/users" component={Users} />
        <Route path="/feeds" component={Feeds} />
      </Switch>
    </BrowserRouter>
  );
}
