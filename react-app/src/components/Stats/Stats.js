import Header from "../Header/Header";
import React from "react";
import axios from "axios";
import "./Stats.css";
import { Switch, FormControlLabel } from "@material-ui/core";
import PlotlyChartBucketed from "components/PlotlyChartBucketed/PlotlyChartBucketed";
import PlotlyChartSmooth from "components/PlotlyChartSmooth/PlotlyChartSmooth";
import { withRouter } from "react-router";
import { BACKEND_URL } from "../../constants";

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant_id: this.props.participant_id ?? "",
      hist: [],
      bin_edges: [],
      x_smooth: [],
      y_smooth: [],
      campus_hours: 0,
      eligible_hours: 0,
      num_participants: "",
      is_hist: true, //false implies a continuous graph
    };

    this.getAggregateData = this.getAggregateData.bind(this);
    this.fetchParticipantHours = this.fetchParticipantHours.bind(this);
  }

  getAggregateData() {
    axios
      .get(BACKEND_URL + "/v3/stats", {})
      .then((res) => {
        const data = res.data;
        this.setState({ hist: data.hist });
        this.setState({ bin_edges: data.bin_edges });
        this.setState({ x_smooth: data.x_smooth });
        this.setState({ y_smooth: data.y_smooth });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(BACKEND_URL + "/v3/num_participants", {})
      .then((res) => {
        const data = res.data;
        this.setState({ num_participants: data.num_participants });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getAggregateData();
    if (this.state.participant_id) {
      this.fetchParticipantHours();
    }
  }
  fetchParticipantHours() {
    axios
      .get(BACKEND_URL + "/v3/stats/" + this.state.participant_id, {})
      .then((res) => {
        const data = res.data;
        if (data.status === 400) {
          location.replace("/join/" + this.state.participant_id); //eslint-disable-line no-restricted-globals
        } else {
          this.setState({
            campus_hours: data.total_hours_on_campus,
            eligible_hours: data.eligible_hours,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setter(event, key) {
    this.setState({ [key]: event.target.value });
  }
  setValue(value, key) {
    this.setState({ [key]: value });
  }

  render() {
    const graphArgs = {
      hist: this.state.hist,
      bin_edges: this.state.bin_edges,
      x_smooth: this.state.x_smooth,
      y_smooth: this.state.y_smooth,
      width: Math.min(window.innerWidth, 900),
    };
    if (this.state.participant_id) {
      graphArgs["participant_hours_on_campus"] =
        this.state.eligible_hours;
    }
    return (
      <div>
        <div className="statsContainer">
          <Header title="Campus Hours Leaderboard" />
          <p>
            <b>
              Phase 4 of the Safe Blues Experiment will commence on June 10th, 2022
            </b>
          </p>
          <p>
            We currently have <strong>{this.state.num_participants}</strong>{" "}
            participants.
          </p>
          <p>
              Participant Statistics from a Previous Phase:
          </p>
          {/* TODO make this conditional on having submitted a participant_id */}
          {this.state.participant_id && (
            <>
              <p>
                Campus Hours:{" "}
                <b>{this.state.campus_hours}</b>
                {" "}|{" "}
                Eligible Hours:{" "}
                <b>{this.state.eligible_hours}</b>
              </p>
            </>
          )}
          <FormControlLabel
            control={
              <Switch
                checked={this.state.is_hist}
                onChange={() => {
                  this.setState({ is_hist: !this.state.is_hist });
                }}
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            }
            label="Histogram type"
          />

          {this.state.is_hist ? (
            <PlotlyChartBucketed {...graphArgs} />
          ) : (
            <PlotlyChartSmooth {...graphArgs} />
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(Stats);
