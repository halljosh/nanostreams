import React from 'react';
import { Link } from 'react-router-dom';
import StreamsIcon from '../streamsicon.png'

const Home = () => {
    return (
        <div className = "home-menu">
            <strong><h1> nanostream.<span className="blinking-cursor">|</span> </h1></strong>
            <img className = "home-icon" src={StreamsIcon} alt="nanostream logo" />
            <p> a zero-bloat video streaming platform [currently in demo mode]. </p>
            <p> see a list of <Link to="/list" className ="item">current streams</Link> or <Link to="/streams/new" className ="item">create your own</Link>! </p>
        </div>
    )
}

export default Home;