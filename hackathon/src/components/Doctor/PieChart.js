import React from 'react'
import {Doughnut} from 'react-chartjs-2'
const PieChart = ({values}) => {
    const data = values[0].data;
    const label = values[0].all;
    console.log(values)
    return (
        
        <div>
            <Doughnut
                data={{labels: label,
                datasets: [{
                    label: '# Flu Symptoms',
                    data: data,
                    backgroundColor: [
                        'rgba(230, 230, 250, 0.5)',
                        'rgba(203, 230,250, 0.5)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(230, 230, 250, 1)',
                        'rgba(203,230,250, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]}}
                options={{ maintainAspectRatio: false }}

                
            ></Doughnut>
        </div>
    )
}

export default PieChart
