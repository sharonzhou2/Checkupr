import React from 'react'

const Questions = ({text, onClick}) => {
    return (
        <div >
            <button className="questions-btn" onClick={onClick}>{text}</button>
        </div>
    )
}

export default Questions