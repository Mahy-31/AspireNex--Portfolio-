import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className='footers'>
        <div className='infos'>
            <a href="https://www.instagram.com/mahhyy_31/"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/in/mahalakshmi-r-60178520a/"><LinkedInIcon /></a>
            <a href="https://github.com/Mahy-31"><GithubIcon /></a>
            <a href="/contact"><MailIcon /></a>
        </div>
    </div>
  )
}

export default Footer