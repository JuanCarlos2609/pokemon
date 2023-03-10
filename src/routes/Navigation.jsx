import React from "react";
import { get, map, reduce } from "lodash";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { routesByRole, notFoundRoute } from "./routes";
import { Helmet } from "react-helmet";
import { metas } from "./metas";
import './Navigation.scss';
import { useAuth } from "../components/Auth/hooks/useAuth";


function Navigation() {
  const auth = useAuth();
  const role = auth?.user || 'public' ;
  let routes = routesByRole[role];

  return (
    <Router>
      <Switch>
        {role !== "public" &&
          map(
            reduce(
              routesByRole.public,
              (paths, route) => [
                ...paths,
                ...(!!route.path ? [route.path] : []),
              ],
              []
            ),
            (path, index) => (
              <Route
                key={`public-route-${index}`}
                path={path}
                exact={true}
                render={() => <Redirect to="/" />}
              />
            )
          )}

        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <>
                <Helmet>
                  <title>
                    {[route.titleMessage]}
                  </title>
                  {get(metas, route.path, []).map((meta, index) => (
                    <meta key={`meta-${index}`} {...meta} />
                  ))}
                </Helmet>
                <route.layout>
                  <div className="nav-container fadeIn">
                    <route.component {...props} />
                  </div>
                </route.layout>
              </>
            )}
          />
        ))}
        <Route
          render={(props) => (
            <>
              <Helmet>
                <title>
                  Página no encontrada
                </title>
              </Helmet>
                <notFoundRoute.component {...props} />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export { Navigation };
