import React from 'react'
import Symptoms from './Symptoms'
import Button from './Button'
import Card from './Card'
import { useState } from 'react'
import Thanks from './Thanks'
const Profile = () => {
    const [showThanks, setShowThanks] = useState(false)
    const showingThanksItem = () => {
        setShowThanks(!showThanks)
    }
    return (
        <div className="profile">
          
            {showThanks ? <Thanks></Thanks> :
                <div>
                <h1 className="animate__animated animate__rubberBand">Hello John!</h1>
                <img src="/images/man.png"></img>
                <Symptoms></Symptoms>
                <Button text="Submit" onClick={showingThanksItem}></Button>
                </div>

           }
         
       
            {/* <Card text="Check previous symptoms"></Card>
            <Card text="Book appointment with doctor"></Card>
            <Card text="Send message to doctor"></Card> */}
        </div>
    )
}

export default Profile
