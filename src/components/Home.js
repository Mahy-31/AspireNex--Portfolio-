import React from 'react';
import '../styles/Home.css';
import myImage from '../assets/pic.png';

const Home = () => {
  return (
    <div className='home'>
        <img src={myImage} className='profile'></img>
        <div className='content'>
            <p>Hello there!</p>
            <h3>This is </h3><h1>Mahalakshmi R</h1>
            <h2>Software developer</h2>
        </div>
        <a href="https://drive.google.com/file/d/1OKmxvDdJwa5CujdM7PuDuyUKa7S0dYzO/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
            <button>Download CV</button>
        </a>
    </div>
  )
}

export default Home