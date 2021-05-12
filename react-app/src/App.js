import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Join from "./components/Join/Join";
import Stats from "./components/Stats/Stats";

function App() {
  // const initialState = checkAuth()
  const initialState = false;

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route
          // require the word exact to prevent the partial matching of everything
          exact
          path={"/"}
          render={() => <Stats />}
        />
        <Switch>
          <Route
            path={"/join/:participant_id"}
            render={({ match }) => (
              <Join participant_id={match.params.participant_id} />
            )}
            exact={false}
          />
          <Route
            path={"/join"}
            render={() => <Join />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/stats/:participant_id"}
            render={({ match }) => (
              <Stats participant_id={match.params.participant_id} />
            )}
            exact={false}
          />
          <Route
            path={"/stats"}
            render={() => <Stats />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
