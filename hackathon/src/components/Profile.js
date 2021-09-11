import React from 'react'
import Symptoms from './Symptoms'
import Button from './Button'
import Card from './Card'
const Profile = () => {
    return (
        <div className="profile">
            <h1>Hello John!</h1>
            <img src="/images/man.png"></img>
            <input className="input" type="text" placeholder="Search"></input>
            <Symptoms></Symptoms>
            <Button text="Submit"></Button>
            {/* <Card text="Check previous symptoms"></Card>
            <Card text="Book appointment with doctor"></Card>
            <Card text="Send message to doctor"></Card> */}
        </div>
    )
}

export default Profile
