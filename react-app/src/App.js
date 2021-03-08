import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import yourComponent from "./components/yourComponent";
import YourComponent2 from "./components/yourComponent2";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header/>
      <BrowserRouter>
          <Route
              // require the word exact to prevent the partial matching of everything
              exact path={"/"}
              render={() => <Home/>} 
            />
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
