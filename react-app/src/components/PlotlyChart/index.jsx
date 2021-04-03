import React from "react";
import "./styles.css";
import Plot from "react-plotly.js";

function PlotlyChart(props) {
  return (
    <div>
      <Plot
        data={[
          {
            x: [
              props.participant_hours_on_campus,
              props.participant_hours_on_campus,
            ],
            y: [0, Math.max(...props.hist)],
            type: "line",
            mode: "lines",
            marker: { color: "red" },
            name: "your hours on campus",
          },
          {
            type: "histogram",
            x: props.hours_on_campus_list,
            xbins: {
              end: Math.max(...props.hours_on_campus_list),
              size: 1,
              start: -0.5,
            },
            marker: {
              color: "rgb(0,119,179)",
            },
            name: "HIST aggregate hours on campus",
          },
        ]}
        layout={{
          title: "Compare your hours on campus to other participants",
          legend: {
            orientation: "h",
            yanchor: "bottom",
            y: -0.3,
            xanchor: "right",
            x: 1,
          },
        }}
        config={{ staticPlot: true }}
      />
    </div>
  );
}

export default PlotlyChart;
