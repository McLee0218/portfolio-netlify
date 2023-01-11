import React from 'react'
import './style.css';
import { ReactDOM } from 'react';
import Mona from '../../Images/mona-the-rivetertocat.png';
import styled from 'styled-components'
import Resume from '../../Images/resume-icon.jpeg'
import sprojects from '../../Images/project.png'
import girl from '../../Images/girl.jpeg'
import linked from '../../Images/linkedin.png'



function Dashboard() {
    return (
        <div className='dashboardWrapper'>
            <GitHubCard 
                img={Mona} alt='monaOctacat'
                title="Mclee GitHub Page"
                description="This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on"
                deployedLink='https://github.com/McLee0218'
            />
            <GitHubCard
                 img={Resume} alt='monaOctacat'
                title="Resume"
                description="This Resume shows my prior work experience and lets you know why im the perfect fit for your company."
            />
            <GitHubCard
                 img={linked} alt='monaOctacat'
                title="Linked-in"
                description="Explore my Linked-in Page"
                deployedLink='https://www.linkedin.com/in/tameka-mclean-37639b58/'
            />
            <GitHubCard
                 img={sprojects} alt='monaOctacat'
                title="Special Projects"
                description="Here are some special projects i've had the pleasure of working on"
                deployedLink='https://www.linkedin.com/in/tameka-mclean-37639b58/'
            />
            <GitHubCard 
                 img={girl} alt='monaOctacat'
                title="Contact Me"
                description="Send me your info, so we can keep in touch!"
                deployedLink='https://www.instagram.com/2hype6/'
            />
        </div>
        
    )
}

function GitHubCard(props) {
    return (
        <div id="dashCard" className="dashCard">
                <img className='dashboardImage' src={props.img}/>
                    <h2 className='dashCard_title'>{props.title}</h2>
                    <p className='dashCard_description'>{props.description}</p>
                    <a href={props.deployedLink}><button className="dashCard_btn">Lets Explore</button></a>

        </div>
    )
}


export { Dashboard, GitHubCard }
