import React from 'react'
import {Bar} from 'react-chartjs-2'
const Chart = ({values}) => {
    const data = values[0].prescription
    return (
        <div>
            <Bar
                data={{labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Urgency',
                    data: data,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]}}
                
                width={100}
                height={50}
                options= {{  
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }

                }
                  
                }
                // options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

export default Chart
