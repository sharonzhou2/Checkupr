import React from 'react'
import Selections from './Selections'

const SelectSymtoms = () => {
    return (
        <div className="select-symptoms"> 
            <Selections selection="Heart Burn"></Selections>
            <Selections selection="Cold"></Selections>
            <Selections selection="Fracture"></Selections>
            <Selections selection="Flu"></Selections>
            {/* <Selections selection="Flu"></Selections> */}


        </div>
    )
}

export default SelectSymtoms
