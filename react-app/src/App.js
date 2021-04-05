import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Stats from "./components/Stats/Stats";
import AdminDashboard from "components/AdminDashboard/AdminDashboard"
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
              exact={true}
            />
        <Switch>
          <Route
            path={"/login"}
            render={() => <Login signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          {/* signup is now defunct, it is now down only via a POST from postman */}
          {/* <Route
            path={"/signup"}
            render={() => <SignUp signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          /> */}
          <Route
            path={"/join"}
            render={() => <Join />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          
          <Route
            path={"/dashboard"}
            render={() => <AdminDashboard />} // TODO pass in the signin state
            exact={true} // ie there are no sub routes
          />

          <Route
            path={"/stats"}
            render={() => <Stats participant_id=""/>} // TODO pass in the signin state
            exact={true} // ie there are no sub routes
          />
          <Route
            path={"/stats/:participant_id"}
            render={({match}) => <Stats participant_id={match.params.participant_id} />} 
            exact={false}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
