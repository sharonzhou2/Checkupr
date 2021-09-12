import React from 'react'
import { useState } from 'react';
import PatientCard from './PatientCard';
import PatientInfo from './PatientInfo';

const Patients = ({name, symptom, previous, notes, values}) => {
    const [showInfo, setShowInfo] = useState(false);
    const onPatientClicked = (id) => {
        setShowInfo(!showInfo);
        console.log("hello");
    } 
    return (
        <div className="patient" onClick={onPatientClicked}>
            <PatientCard name={name} symptom={symptom} notes={notes} showInfo={showInfo} previous={previous} values={values}></PatientCard>
     
            {showInfo ? <PatientInfo name={name} values={values}></PatientInfo>: ''}


        </div>
    )
}

export default Patients
