import React from 'react'
import Title from './Title'

const Home = () => {
    return (
        <div className="home">
            <Title></Title>
            <img src={process.env.PUBLIC_URL + '/images/conference.png'}  alt="Healthcare"></img>
        </div>
    )
}

export default Home
