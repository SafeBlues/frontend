import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Header/>
      <BrowserRouter>
          <Route
              // require the word exact to prevent the partial matching of everything
              exact path={"/"}
              render={() => <Stats/>} 
            />
        <Switch>
          <Route
            path={"/signin"}
            render={() => <SignIn signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/login"}
            render={() => <Login signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/signup"}
            render={() => <SignUp signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/join"}
            render={() => <Join />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
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
