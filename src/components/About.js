import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className='about'>
            <h1>About me</h1>
            <div className='aboutMe'>
                I am a dedicated software developer with over 1 year of experience in creating responsive applications. With a strong foundation in front-end development, I am proficient in languages such as C++, Python, and JavaScript. My expertise lies in designing scalable software solutions,and optimizing code for performance. I thrive in collaborative environments and enjoy working closely with cross-functional teams to deliver high-quality products that meet and exceed client expectations. My passion for continuous learning keeps me updated with the latest industry trends and technologies, ensuring that my skills remain sharp and relevant.
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <h2>Languages:</h2>
                <div className='languages'>
                    <div className='cpp'>
                        <img src='https://cdn3d.iconscout.com/3d/free/thumb/c-language-logo-6563484-5453029.png'></img>
                    </div>
                    <div className='python'>
                        <img src='http://pluspng.com/img-png/python-logo-png-big-image-png-2400.png'></img>
                    </div>
                    <div className='js'>
                        <img src='https://logosdownload.com/logo/javascript-logo-big.png'></img>
                    </div>
                </div>
                <h2>Developer Tools:</h2>
                <div className='devTools'>
                    <div className='figma'>
                        <img src='https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png'></img>
                    </div>
                    <div className='vs'>
                        <img src='https://logospng.org/download/visual-studio-code/visual-studio-code-4096.png'></img>
                    </div>
                </div>
                <h2>Frameworks/Technologies:</h2>
                <div className='ft'>
                    <div className='react'>
                        <img src='https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png'></img>
                    </div>
                    <div className='git'>
                        <img src='https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 