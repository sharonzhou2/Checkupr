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
                        'rgba(230, 230, 250, 0.5)',
                        'rgba(203,230,250, 0.5)',
                        'rgba(203, 195, 227, 0.5)',
                        'rgba(207, 159, 225, 0.5)',
                        'rgba(224, 176, 255, 0.5)',
                        'rgba(203, 195, 227, 0.7)',
                        'rgba(203, 195, 227, 0.5)'
                    ],
                    borderColor: [
                        'rgba(230, 230, 250, 1)',
                        'rgba(203,230,250, 1)',
                        'rgba(203, 195, 227, 1)',
                        'rgba(207, 159, 225, 1)',
                        'rgba(224, 176, 255, 1)',
                        'rgba(203, 195, 227, 1)',
                        'rgba(203, 195, 227, 1)'
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
