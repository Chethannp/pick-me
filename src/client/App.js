require("./assets/favicon.ico");
import React from "react";
import routes from "../routes";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFound/notfoundPage";
import { HelmetProvider } from "react-helmet-async";
import HeaderComp from "./components/HeaderComp.js";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 40px;
`;

const App = () => {
  return (
    <HelmetProvider>
      <AppContainer>
        <HeaderComp />
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
      </AppContainer>
    </HelmetProvider>
  );
};

export default App;
