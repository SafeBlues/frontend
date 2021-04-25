import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react"

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Join from "./components/Join/Join";
import Stats from "./components/Stats/Stats";
import AdminDashboard from "components/AdminDashboard/AdminDashboard"

import checkAuth from "helpers/checkAuth.js";
import CreateStrand from "components/AdminDashboard/CreateStrand/CreateStrand";



function App() {
  // const initialState = checkAuth()
  const initialState = false
  const [loggedIn, setLoggedIn] = useState(initialState)
  useEffect(() => {
    checkAuth(setLoggedIn)
  }, [loggedIn]) 
  
  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <BrowserRouter>
          <Route
              // require the word exact to prevent the partial matching of everything
              exact path={"/"}
              render={() => <Stats/>} 
              exact={true} // NOTE leave this as true
            />
        <Switch>
          <Route
            path={"/login"}
            render={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          {/* signup is now defunct, it is now down only via a POST from postman */}
          {/* <Route
            path={"/signup"}
            render={() => <SignUp signedIn={false} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          /> */}
          <Route
            path={"/join/:participant_id"}
            render={({match}) => <Join participant_id={match.params.participant_id} />} 
            exact={false}
          />         
          <Route
            path={"/join"}
            render={() => <Join />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/dashboard"}
            render={() => <AdminDashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
           <Route
            path={"/create-strand"}
            render={() => <CreateStrand loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} // TODO pass in the signin state
            exact={false} // ie there are no sub routes
          />
          <Route
            path={"/stats/:participant_id"}
            render={({match}) => <Stats participant_id={match.params.participant_id} />} 
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
