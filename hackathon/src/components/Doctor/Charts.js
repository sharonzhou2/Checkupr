import React from 'react'
import Chart from './Chart'
import PieChart from './PieChart'

const Charts = ({values}) => {
    return (
        <div className="charts">
            <PieChart values={values}></PieChart>
            
            {/* <PieChart values={values}></PieChart> */}

            <Chart values={values}></Chart>
        </div>
    )
}

export default Charts
