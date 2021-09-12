import React from 'react'
import Patient from './Patient'

const DocProfile = () => {
    const patients = [ 
        {id: 1, name: "John", symptom: "Flu", previous: [
            {
                id: 1,
                day: 'Saturday',
                symptom: 'Flu'
            },
            {
                id: 2,
                day: 'Friday',
                symptom: 'Flu'
            },
            {
                id: 3,
                day: 'Thursday',
                symptom: 'Flu'
            },

        ], notes: "Seems to be fine the previous days. Check the bloods and temp for any abnormal symptoms",
            values: [ 
                {
                    all: ["Flu", "Cough"], 
                    data: [5, 7],
                    priority: 75,
                    prescription: [2,3,1,4,6,3,5]
                }
            ]
        },
        {id: 2, name: "Jane", symptom: "Cold" , previous: [
            {
                id: 1,
                day: 'Saturday',
                symptom: 'Cold'
            },
            {
                id: 2,
                day: 'Friday',
                symptom: 'Heavy Breathing'
            },
            {
                id: 3,
                day: 'Thursday',
                symptom: 'Cough'
            },

        ], notes: "Seems to be fine the previous days. Check the bloods and temp for any abnormal symptoms",
            values: [ 
                {
                    all: ["Heavy Breathing", "Cough", "Cold"], 
                    data: [1,2,3],
                    priority: 23,
                    prescription: [12,5,2,75,34,12,4,2]
                }
            ]
        },

        {id: 3, name: "Anna", symptom: "Fracture", previous: [
            {
                id: 1,
                day: 'Saturday',
                symptom: 'Flu'
            },
            {
                id: 2,
                day: 'Friday',
                symptom: 'Flu'
            },
            {
                id: 3,
                day: 'Thursday',
                symptom: 'Flu'
            },

        ], notes: "Seems to be fine the previous days. Check the bloods and temp for any abnormal symptoms",
            values: [ 
                {
                    all: ["Heavy Breathing", "Cough", "Cold"], 
                    data: [5, 7, 9],
                    priority: 11,
                    prescription: [1,2,5,12,5,3,23,1]
                }
            ]},
        {id: 4, name: "Peter", symptom: "Flu", previous: [
            {
                id: 1,
                day: 'Saturday',
                symptom: 'Flu'
            },
            {
                id: 2,
                day: 'Friday',
                symptom: 'Flu'
            },
            {
                id: 3,
                day: 'Thursday',
                symptom: 'Flu'
            },

        ], notes: "Seems to be fine the previous days. Check the bloods and temp for any abnormal symptoms",
            values: [ 
                {
                    all: ["Heavy Breathing", "Cough", "Redness"], 
                    data: [5, 7, 3],
                    priority: 13,
                    prescription: [12,3,2,4,2,1,2,4]
                }
            ]
        },

    ]

    const onPatientClicked = (id) => {
        console.log("hello");
    } 
    
    return (
        <div className="doc-profile">
            <div className="doc-profile-name">
                <h1 className="doc-profile-purp">Welcome back, </h1>
                <h1 >Dr. Smith</h1>
            </div>
       
            {patients.map((patient) => <Patient name={patient.name} symptom={patient.symptom} previous={patient.previous} notes={patient.notes} values={patient.values} onClick={onPatientClicked}></Patient>)}
        </div>
    )
}

export default DocProfile
