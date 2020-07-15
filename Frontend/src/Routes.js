import React from "react";
import { BrowserRouter, Link, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Feeds from "./pages/Feeds";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Dashboard} />
        <Link path="/users" component={Users} />
        <Link path="/feeds" component={Feeds} />
      </Switch>
    </BrowserRouter>
  );
}
