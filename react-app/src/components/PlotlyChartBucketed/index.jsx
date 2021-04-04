import React from "react";
import "./styles.css";
import Plot from "react-plotly.js";

function PlotlyChart(props) {
  var line = {}
  if (props.participant_hours_on_campus !== 0){
    line = {
      x: [
        props.participant_hours_on_campus,
        props.participant_hours_on_campus,
      ],
      y: [0, Math.max(...props.hist)],
      type: "line",
      mode: "lines",
      // marker: { color: "red" },
      name: "Your hours on campus",
      line: {dash: "dash", color: 'red'}
    } 
  } else {
    line = {}
  }
  return (
    <div>
      <Plot
        data={[
          line,
          {
            type: "bar",
            x: props.bin_edges,
            y: props.hist,
            marker: {
              color: "rgb(0,119,179)",
            },
            name: "Aggregate hours on campus",
          },
        ]}
        layout={{
          title: props.title,
          legend: {
            orientation: "h",
            yanchor: "bottom",
            y: -0.3,
            xanchor: "right",
            x: 1,
            bargap: 0,
          },
          // TODO add a y and x label x: campus hours, y: number of participants
        }}
        config={{ staticPlot: true }}
      />
    </div>
  );
}

export default PlotlyChart;
