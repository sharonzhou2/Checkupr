import React from 'react'

const Selections = ({icons, selection}) => {
    return (
        <div className="selections">
            
            <button className="btn"><i className={icons}></i> {selection}</button>
        </div>
    )
}

export default Selections
