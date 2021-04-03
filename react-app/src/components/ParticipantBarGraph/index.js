import React, { useEffect, Component } from "react";
import Chart from "chart.js";
import "./styles.css";

export default function App() {

  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Hours on campus',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
    });
  });
  return (
    <div className="App">
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}
