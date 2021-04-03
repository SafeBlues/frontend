import React from "react"
import "./styles.css"
import { Chart } from "chart.js"

class ParticipantChart extends React.Component {  
    constructor(props){
        super(props);
        this.bin_edges = this.props.bin_edges
        this.hist = this.props.hist
    }
    chartRef =  React.createRef();
    componentDidMount(){
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef,{
            type: "line",
            data: {
                labels: this.bin_edges,
                datasets: [{
                    label: 'Aggregate hours on campus',
                    data: this.hist,
                    // backgroundColor : this.props.hist.map(()=> "blue")
                    backgroundColor: 'rgba(0, 119, 290, 0.2)',
                    borderColor: 'rgba(0, 119, 290, 0.6)'
                    // borderWidth: 1
                }
                ]
            },
            options: {
                
            }
        });
    }

    render(){
        return(
            <div className="container">
                {this.props.hist} <br/>
                {this.props.bin_edges}
                <div className="App">
                    <canvas id="myChart" ref={this.chartRef} width="400" height="400" />
                </div>
            </div>
        )
    }   
}

export default ParticipantChart;