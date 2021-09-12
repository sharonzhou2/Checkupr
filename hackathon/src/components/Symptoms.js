import React from 'react'
import SelectSymptoms from './SelectSymptoms'


const Symptoms = ({}) => {
    return (
        <div className="symptoms">
            <h2>What are your symptoms today?</h2>
            {/* <input className="input" type="text" placeholder="Search"></input> */}
           <SelectSymptoms></SelectSymptoms>

        </div>
    )
}

export default Symptoms
