import React from 'react';
import '../styles/Project.css';

const Project = () => {
  return (
    <div className='project'>
        <h1>My projects</h1>
        <div className='projectBox'>
            <h2>Web development projects:</h2>
            <div className='webdev'>
                <img src='https://media.edutopia.org/styles/responsive_2880px_16x9/s3fs/masters/d7_images/cover_media/robinson-169hero-portfolio-shutterstock.jpg'></img>
                <img src='https://cdn.wallpapersafari.com/47/33/Wb06Ol.jpg'></img>
                <img src='https://www.stylist.co.uk/images/app/uploads/2021/06/01164914/to-do-list-1680x880.jpg?w=1680&h=880&fit=max&auto=format%2Ccompress'></img>
                <div className='names'>
                    <h2>Portfolio</h2>
                    <h2>Quiz website</h2>
                    <h2>To-do list</h2>
                </div>
            </div>
            <h2>C++ projects:</h2>
            <div className='cppp'>
                <div className='pics'>
                <img src='https://wallpaperaccess.com/full/1209535.jpg'></img>
                <img src='https://easyfuncoding.com/wp-content/uploads/2023/03/avqebe-1024x768.jpg'></img>
                </div>
                <div className='names'>
                    <h2>University management system</h2>
                    <h2>Password management system</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project