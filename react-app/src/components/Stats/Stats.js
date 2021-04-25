import React,{useState} from "react";
import axios from "axios";
import "./Stats.css";
import { Button, TextField, Switch,FormControlLabel } from "@material-ui/core";
import PlotlyChartBucketed from "components/PlotlyChartBucketed/PlotlyChartBucketed";
import PlotlyChartSmooth from "components/PlotlyChartSmooth/PlotlyChartSmooth";
import { withRouter } from "react-router";
// const BFF_URL = "http://localhost:8000";
// const BFF_URL = "http://130.216.216.231:8000";
var protocol = "";
var api_location = "";
if (String(window.location.hostname) === "localhost") {
  protocol = "http://";
  api_location = ":8000";
} else {
  protocol = "https://";
  api_location = "/api";
}
// const BFF_URL = protocol + String(window.location.hostname) + api_location;
const BFF_URL = "https://participant.safeblues.org/api"

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participant_id: this.props.participant_id
        ? this.props.participant_id
        : "",
      hist: [],
      bin_edges: [],
      x_smooth: [],
      y_smooth: [],
      participant_hours_on_campus: 0,
      num_participants: "",
      is_hist: true //false implies a continuous graph
    };

    this.getAggregateData = this.getAggregateData.bind(this);
    this.fetchParticipantHours = this.fetchParticipantHours.bind(this);
  }

  getAggregateData() {
    axios
      .get(BFF_URL + "/api/stats", {})
      .then((res) => {
        const data = res.data;
        this.setState({ hist: data.hist });
        this.setState({ bin_edges: data.bin_edges });
        this.setState({ x_smooth: data.x_smooth});
        this.setState({ y_smooth: data.y_smooth});
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(BFF_URL + "/api/num_participants", {})
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
    if(this.state.participant_id){
      this.fetchParticipantHours();
    }
  }
  fetchParticipantHours() {
    axios
      .get(BFF_URL + "/api/stats/" + this.state.participant_id, {})
      .then((res) => {
        const data = res.data;
        if (data.status === 400) {
          location.replace("/join/" +  this.state.participant_id) //eslint-disable-line no-restricted-globals
        } else {
          this.setState({
            participant_hours_on_campus: data.total_hours_on_campus,
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
      participant_hours_on_campus: this.state.participant_hours_on_campus,
      hist: this.state.hist,
      bin_edges: this.state.bin_edges,
      x_smooth: this.state.x_smooth,
      y_smooth: this.state.y_smooth,
      width: Math.min(window.innerWidth, 900)
    }
    return (
      <div>
        <div className="statsContainer">
          <h1> Campus Hours Leaderboard </h1>
          <p>
            We currently have <strong>{this.state.num_participants}</strong>{" "}
            participants.
          </p>
          {/* TODO make this conditional on having submitted a participant_id */}
          {this.state.participant_id &&
            <p>your hours on campus: {this.state.participant_hours_on_campus}</p>}
          <FormControlLabel control={
            <Switch

            checked={this.state.is_hist}
            onChange={()=>{this.setState({ is_hist: !this.state.is_hist })}}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          } label="Histogram type" />

          
          {this.state.is_hist ? 
            <PlotlyChartBucketed {...graphArgs}/> :
            <PlotlyChartSmooth {...graphArgs}/>}

        </div>
      </div>
    );
  }
}
export default withRouter(Stats);
