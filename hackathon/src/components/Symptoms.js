import React from 'react'
import Selections from './Selections'
const Symptoms = ({}) => {
    return (
        <div className="Selections">
            <h3>What are your symptoms today?</h3>
            <Selections selection="Heart Burn"></Selections>
            <Selections selection="Cold"></Selections>
            <Selections selection="Fracture"></Selections>
            <Selections selection="Flu"></Selections>

        </div>
    )
}

export default Symptoms
