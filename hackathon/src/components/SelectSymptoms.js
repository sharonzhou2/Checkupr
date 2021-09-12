import React from 'react'
import Selections from './Selections'
import Select from 'react-select'
import { useState } from 'react'

const SelectSymtoms = () => {
    var symptoms = [
        {value: 'heart burn', label: 'Heart Burn', icon: 'fas fa-heartbeat'},
        {value: 'cold', label: 'Cold', icon: 'fas fa-head-side-virus'},
        {value: 'fracture', label: 'Fracture', icon: 'fas fa-bone'},
        {value: 'flu', label: 'Flu', icon: 'fas fa-temperature-low'},
        {value: 'cough', label: 'Cough', icon: 'fas fa-heartbeat'},
        {value: 'fever', label: 'Fever', icon: 'fas fa-heartbeat'},
    ]

    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="select-symptoms"> 
            <Select 
                isMulti={true}
                options={symptoms} 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
            />
            <div className="select-symptoms-output">
                {selectedOption && selectedOption.map((option) => (<Selections selection={option.label} icons={option.icon}></Selections>))}
            </div>
    

        </div>
    )
}

export default SelectSymtoms
