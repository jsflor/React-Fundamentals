import React from 'react'
import Chart from 'chart.js'

const FancyInput = React.forwardRef((props, ref) => (
    <div>
        <input ref={ref} />
        <button onClick={props.onFocus}>Focus</button>
        <button onClick={props.onBlur}>Blur</button>
    </div>
));

export default class App extends React.Component {
    constructor() {
        super();
        this.puntero = React.createRef();
        this.grafica = React.createRef()
    }
    componentDidMount(){
        this.onFocus();
        const ctx = this.grafica.current.getContext('2d')
        const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [2, 10, 12, 6, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
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
        })
    }
    onFocus = () => {
        this.puntero.current.focus();
    }
    onBlur = () => {
        this.puntero.current.blur();
    }
    render() {
        return (
            <>
                <FancyInput
                    ref={this.puntero}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
                <div>
                    <canvas
                    ref={this.grafica}
                    width='400'
                    height='400'
                    ></canvas>
                </div>
            </>
        );
    }
}