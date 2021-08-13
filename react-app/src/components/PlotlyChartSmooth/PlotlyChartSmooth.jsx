import React from "react";
import "./PlotlyChartSmooth.css";
import Plot from "react-plotly.js";

function PlotlyChart(props) {
  var line = {};
  if (props.participant_hours_on_campus !== undefined) {
    line = {
      x: [props.participant_hours_on_campus, props.participant_hours_on_campus],
      y: [0, Math.max(...props.y_smooth)],
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
          type: "scatter",
          x: props.x_smooth,
          y: props.y_smooth,
          marker: {
            color: "rgb(0,119,179)",
            opacity: 0.0,
          },
          name: "Aggregate hours on campus",
          fill: "tozeroy",
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
        xaxis: {
          title: { text: "Hours on campus" },
          showgrid: false,
          tickmode: "auto",
          nticks: 10,
        },
        yaxis: { tickvals: [] },
      }}
      config={{
        staticPlot: true,
        // responsive: true,
      }}
    />
  );
}

export default PlotlyChart;
