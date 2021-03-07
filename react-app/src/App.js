import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import yourComponent from "./components/yourComponent";
import YourComponent2 from "./components/yourComponent2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">test</header> */}
      <BrowserRouter>
        <Switch>
          <Route path={"/some-path"} component={yourComponent} exact={false} />
          <Route
            path={"/some-other-path"}
            // the components must have capitals
            render={() => <YourComponent2 someValue="something passed in" />}
            exact={false}
          />
          <Route
            path={"/signin"}
            render={() => <SignIn signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/signup"}
            render={() => <SignUp signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
