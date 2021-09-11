import React from 'react'

const Button = ({text, onClick}) => {
    return (
        <div >
            <button className="select-btn" onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button
