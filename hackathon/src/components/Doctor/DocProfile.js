import React from 'react'
import Patient from './Patient'

const DocProfile = () => {
    const patients = [ 
        {id: 1, name: "John", symptom: "Chest infection", previous: [
            {
                id: 1,
                day: 'Saturday',
                symptom: 'Cough'
            },
            {
                id: 2,
                day: 'Friday',
                symptom: 'Cough'
            },
            {
                id: 3,
                day: 'Thursday',
                symptom: 'Cough'
            },

        ], notes: "Prescribed antibiotics at last appointment for bacterial chest infection. Hasn't been improving, monitor in case further appointment and additional round of antibiotics is required.",
            values: [ 
                {
                    all: ["Chest pain", "Cough"], 
                    data: [5, 7],
                    priority: 75,
                    prescription: [50, 60, 60, 65, 70, 80, 75]
                }
            ],
        questions: [
            {
                id: 1,
                type: 'Yes/No',
                text: 'Have your symptoms gotten any worse since yesterday?'
            },
            {
                id: 2,
                type: 'Yes/No',
                text: 'Are you experiencing any shortness of breath?'
            },
            {
                id: 3,
                type: 'Yes/No',
                text: 'Did you take both doses of amoxicillin yesterday?'
            },
        ]
        }

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
       
            {patients.map((patient) => <Patient name={patient.name} symptom={patient.symptom} previous={patient.previous} notes={patient.notes} values={patient.values} questions={patient.questions} onClick={onPatientClicked}></Patient>)}
        </div>
    )
}

export default DocProfile
