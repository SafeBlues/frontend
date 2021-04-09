import React from "react";
import "./PlotlyChartBucketed.css";
import Plot from "react-plotly.js";

function PlotlyChart(props) {
  var line = {};
  if (props.participant_hours_on_campus !== 0) {
    line = {
      x: [props.participant_hours_on_campus, props.participant_hours_on_campus],
      y: [0, Math.max(...props.hist)],
      type: "line",
      mode: "lines",
      // marker: { color: "red" },
      name: "Your hours on campus",
      line: { dash: "dash", color: "red" },
    };
  } else {
    line = {};
  }
  return (
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
        // width:  1000,
        width: props.width,
        title: props.title,
        legend: {
          orientation: "h",
          yanchor: "top",
          y: 0.95,
          xanchor: "right",
          x: 1,
          bargap: 0,
        },
        xaxis: { title: { text: "Hours on campus" } },
        yaxis: { title: { text: "Number of participants" } },
      }}
      config={
        {
          staticPlot: true,
          // responsive: true,
        }
      }
    />
  );
}

export default PlotlyChart;
