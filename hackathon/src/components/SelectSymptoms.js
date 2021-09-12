import React from 'react'
import Selections from './Selections'

const SelectSymtoms = () => {
    return (
        <div className="select-symptoms"> 
            <Selections selection="Heart Burn" icons="fas fa-heartbeat"></Selections>
            <Selections selection="Cold" icons="fas fa-head-side-virus"></Selections>
            <Selections selection="Fracture" icons="fas fa-bone"></Selections>
            <Selections selection="Flu" icons="fas fa-temperature-low"></Selections>
    

        </div>
    )
}

export default SelectSymtoms
