import React from 'react'
import Button from './Button'
import Typing from 'react-typing-animation';
const Title = () => {
    return (
        <div className="title">
            <h1 className="animate__animated animate__slideInDown">Checkupr</h1>
            <Typing>
                <Typing.Delay ms={1000}/>
                <h2>Healthcare for everyone</h2>
            </Typing>
           
            <Button text="Create An Account"></Button>
        </div>
    )
}

export default Title
