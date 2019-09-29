import React from "react";
import routes from "../routes";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/notfoundPage";
import { HelmetProvider } from "react-helmet-async";
require("./assets/favicon.ico");

const App = () => {
  return (
    <HelmetProvider>
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={props => <C {...props} {...rest} />}
          />
        ))}
        <Route render={props => <NotFoundPage {...props} />} />
      </Switch>
    </HelmetProvider>
  );
};

export default App;
