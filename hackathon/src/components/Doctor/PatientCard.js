import React from 'react'

const PatientCard = ({name, symptom, notes, showInfo, previous, values}) => {
    return (
        <div className="patient-card">
            <div className="patient-card-div" >
                <h2>{name}</h2>
                {values[0].priority > 70 ? 
                    <div className="priority urgent">{values[0].priority}%</div>
                    : 
                    <div className="priority">{values[0].priority}%</div>

                }
               
            </div>
            <p><i className="fas fa-syringe"></i>{symptom}</p>
            <h4>Notes</h4>
            <h5>{notes}</h5>
                       
                 
            {showInfo ?  
                <div >
                    {<h4>Last 3 days of symptoms</h4>}
                    {previous.map((pre) => <p>{pre.day}: {pre.symptom}</p>)}
                    <h4>Current Medication</h4>
                    {/* <h5>{notes}</h5> */}
                </div> : ''
            }
        </div>
    )
}

export default PatientCard
