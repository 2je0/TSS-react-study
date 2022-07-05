import { Switch } from "react-router-dom";
import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import ProjectList from "../section14/components/Project/ProjectList";

const Projectpage = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.url} exact>
        <ProjectList />
      </Route>
      <Route path={match.url + "/14"}>
        <p>14 content</p>
      </Route>
      <Route path={`${match.url}/comments`}>
        <p>some content</p>
      </Route>
    </Switch>
  );
};

export default Projectpage;
