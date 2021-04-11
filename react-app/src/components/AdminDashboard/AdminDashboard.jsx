import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";
import checkAuth from "helpers/checkAuth.js";
import axios from "axios";
import { getBaseURL } from "helpers/GetBaseURL.js";
import ShowStrands from "./ShowStrands/ShowStrands";
import DisplayNotAuth from "./DisplayNotAuth/DisplayNotAuth";
import CreateStrand from "./CreateStrand/CreateStrand";

function fetchStrandData(setStrandData) {
  axios
    .get(`${getBaseURL()}/strands`, { withCredentials: true })
    .then((res) => {
      setStrandData({ strandData: res.data.strands });
    });
}

function AdminDashboard(props) {
  var [strandData, setStrandData] = useState();

  useEffect(() => {
    fetchStrandData(setStrandData);
  }, []);
  var numStrands = strandData ? Object.keys(strandData.strandData).length : 0;
  if (props.loggedIn) {
    return (
      <div className="dashboardContainer">
        <h1>Admin dashboard</h1>

        {numStrands > 0 ? (
          <p>We currently have {numStrands} strands.</p>
        ) : (
          <p> We currently do not have any strands. {numStrands} </p>
        )}

        {strandData ? (
          <div>
            <h2>Current Strands</h2>
            <ShowStrands
              data={strandData}
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
          </div>
        ) : (
          <p>Something went wrong. There is no strand data to show. </p>
        )}
        {/* create strand moved to its own page */}
        {/* <CreateStrand /> */}
      </div>
    );
  } else {
    return <DisplayNotAuth />;
  }
}

export default AdminDashboard;
