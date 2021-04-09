import React from "react";
import "./AdminDashboard.css";
import checkAuth from "helpers/checkAuth.js";
import axios from "axios";
import { getBaseURL } from "helpers/GetBaseURL.js";
import ShowStrands from "./ShowStrands/ShowStrands";
import DisplayNotAuth from "./DisplayNotAuth/DisplayNotAuth";
import CreateStrand from "./CreateStrand/CreateStrand"
export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
    this.checkAuth = this.checkAuth.bind(this);
  }

  checkAuth() {
    const res = axios
      .get(`${getBaseURL()}/v1/validate-admin`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({ loggedIn: true, strandData: null });
        } else {
          console.log("Not logged in!");
        }
      })
      .catch((error) => {
        return false;
      });
  }

  componentDidMount() {
    this.checkAuth();
    this.fetchStrandData();
  }

  displayLoggedIn() {
    if (this.state.loggedIn) {
      return (
        <div>
          <p>Currently logged in.</p>
        </div>
      );
    } else {
      return (
        <p>
          Please log into an admin account to access this page. <br />
          You will have to contact a super-admin (Josh or Aapeli) to alter your
          account to admin status.
        </p>
      );
    }
  }
  fetchStrandData() {
    axios.get(`${getBaseURL()}/strands`, {}).then((res) => {
      // console.log(res)
      this.setState({ strandData: res.data.strands });
    });
  }
  render() {
    console.log(this.state.loggedIn);
    if (this.state.loggedIn) {
      return (
        <div className="dashboardContainer">
          <h1>Admin dashboard</h1>
          {this.state.strandData ? (
            <ShowStrands
              data={this.state.strandData}
              columnNames={[
                "id",
                "seedingProbability",
                "infect P",
                "infect K",
                "infect L",
                "incubation Alpha (hrs)",
                "incubation Beta (hrs)",
                "infectious Alpha (hrs)",
                "infectious Beta (hrs)",
                "startTime",
                "endTime",
              ]}
            />
          ) : null}
          <CreateStrand />
        </div>
      );
    } else {
      return <DisplayNotAuth />;
    }
  }
}
