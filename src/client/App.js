require("./assets/favicon.ico");
require("./assets/apple-icon-57x57.png");
import React, { useState } from "react";
import routes from "../routes";
import { Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import theme from "./styledComponents/theme";

//
import NavbarComp from "./components/NavBar/navBarComp";
import SideBarComp from "./components/SideBar/sideBarComp";
import NotFoundPage from "./pages/NotFound/notfoundPage";

//Styled Imports
import { Backdrop } from "./styledComponents/layout";

const App = () => {
  const [sideBarStatus, setSideBarStatus] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideBarStatus(!sideBarStatus);
  };

  const backDropClickHandler = () => {
    setSideBarStatus(false);
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <NavbarComp drawerClickHandler={drawerToggleClickHandler} />
        <SideBarComp expanded={sideBarStatus} />
        {sideBarStatus && (
          <Backdrop zIndex="100" onClick={backDropClickHandler} />
        )}
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
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
