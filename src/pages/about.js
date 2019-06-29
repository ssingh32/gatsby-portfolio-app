import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link } from 'gatsby';
import aboutStyles from './about.module.scss';
import UOPphoto from '../assets/images/uop.jpg';

const About = () => {
    const skills = {
        programmingSkills: ["React, Redux, JS ES5/ES6, Node.js, PHP, SQL, HTML5, CSS3/SASS"],
        tools: ["Babel, Webpack, NPM, Firebase, Yarn, Module Loaders, Build Systems"],
        frameworks: ["GraphQL, Gatsby, CodeIgniter, Bootstrap, CSS Gridish"],
        ide: ["Sublime Text, Atom, Visual Studio, Xcode, Eclipse, Pycharm, Android Studio"],
        os: ["AWS, Express, Heroku, Linux, Mac OS X, Windows Server"],
        relatedSkills: ["Version Control, REST API, Debugging, Scrum/Agile, Jenkins, Wordpress"],
        leadershipSkills: ["Project Management, Fast-paced, Nontechnical Communication"],
        languages: ["English, Punjabi, Urdu, Hindi "]
    };
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Page</h1>
            <img className={aboutStyles.photo} src={UOPphoto} alt="uop-photo"/>
            <p>I'm a Computer Science alumni from University of the Pacific with a concentration in software. 
            I'm also an active member of the Community Involvement Program on campus where we help 
            promote higher education and learning in the local Stockton area. </p>
            <div className={aboutStyles.skills}>
                <p>Here is an overview my skills:</p>
                <h5>Programming: </h5>{skills.programmingSkills}
                <h5>Tools: </h5>{skills.tools}
                <h5>Frameworks: </h5>{skills.frameworks}
                <h5>IDE's: </h5>{skills.ide}
                <h5>OS's: </h5>{skills.os}
                <h5>Other Relevant Skills: </h5>{skills.relatedSkills}
                <h5>Leadership Skills: </h5>{skills.leadershipSkills}
                <h5>Languages: </h5>{skills.languages}
            </div>

            <Link className={aboutStyles.button} to="/contact">Contact Me!</Link>
        </Layout>
    )
}

export default About;