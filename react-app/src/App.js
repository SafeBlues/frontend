import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Join from "./components/Join/Join";
import Stats from "./components/Stats/Stats";
import Referral from "./components/Referral/Referral";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={"/"} render={() => <Stats />} />
        <Switch>
          <Route
            path={"/join/:participant_id"}
            render={({ match }) => (
              <Join participant_id={match.params.participant_id} />
            )}
          />
          <Route path={"/join"} render={() => <Join />} />
          <Route
            path={"/stats/:participant_id"}
            render={({ match }) => (
              <Stats participant_id={match.params.participant_id} />
            )}
          />
          <Route path={"/stats"} render={() => <Stats />} />
          <Route path={"/invite-a-friend"} render={() => <Referral />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
