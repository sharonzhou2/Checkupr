import React from 'react'
import Charts from './Charts'

const PatientInfo = ({name, values}) => {
    return (
        <div className="patient-info">
            <h1>{name}</h1>
            <Charts values={values}></Charts>
        </div>
    )
}

export default PatientInfo
