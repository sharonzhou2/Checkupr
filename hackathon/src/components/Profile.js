import React from 'react'
import Symptoms from './Symptoms'
import Button from './Button'
import Card from './Card'
import Switch from "react-switch";

import { useState } from 'react'
import Thanks from './Thanks'
const Profile = () => {
    const [showThanks, setShowThanks] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checked1, setChecked1] = useState(false);

    const showingThanksItem = () => {
        setShowThanks(!showThanks)
    }
    const handleChange = (checked) => {
        setChecked(!checked);
    }
    const handleChange1 = (checked1) => {
        setChecked1(!checked1);
    }
    return (
        <div className="profile">
          
            {showThanks ? <Thanks></Thanks> :
                <div> 
                    {/* <div className="profile-child"> */}
                    <div className="profile-symptom">
                        <h1 className="animate__animated animate__rubberBand">Hello John!</h1>
                        <img src="/images/man.png"></img>
                        <Symptoms></Symptoms>
                    
                    {/* <div className="profile-icons">
                        <i className="fas fa-calendar-check fa-3x"></i>
                        <i class="fas fa-comments fa-3x"></i>
                        <i class="fas fa-laptop-medical fa-3x"></i>

                    </div> */}
                    </div>
                    <div className="profile-doctor">
                        <h3>Have you taken your medications today?</h3>
                        <label>
                            <Switch onChange={() => handleChange(checked)} checked={checked} />
                        </label>
                        <br/>
                        <h3>Do you still feel pain on your lower back?</h3>
                        <label>
                            <Switch onChange={() => handleChange1(checked1)} checked={checked1} />
                        </label>
                        <h3>If so, how serious is the pain?</h3>
                        <label>
                           <input type="number" className="input" placeholder="1-10"></input>
                        </label>
                        <h3>Let me know if I missed anything!</h3>
                        <label>
                           <textarea rows="5" cols="60" id="other"  className="input big"placeholder="Shivers, insomnia"></textarea>
                        </label>


                    </div>
                    

       
                {/* </div> */}
                    <Button text="Submit" onClick={showingThanksItem} id="profile-submit-btn"></Button>

                </div>
                
           }
         
       
            {/* <Card text="Check previous symptoms"></Card>
            <Card text="Book appointment with doctor"></Card>
            <Card text="Send message to doctor"></Card> */}
        </div>
    )
}

export default Profile
