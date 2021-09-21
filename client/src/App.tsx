import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import {MainLayout} from "./layout/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import {Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
      <HelmetProvider>
          <Helmet>
              <link rel="stylesheet" href="https://use.typekit.net/zrg8ijl.css"/>
          </Helmet>
          <Router>
              <Switch>
                  <MainLayout>
                      <Route path={"/"} component={LandingPage}/>
                  </MainLayout>
              </Switch>
          </Router>
      </HelmetProvider>
  );
}

export default App;
