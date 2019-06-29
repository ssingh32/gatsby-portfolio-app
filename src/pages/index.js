import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link } from 'gatsby';
import myPhoto from "../assets/images/me.jpg";
import indexStyles from './index.module.scss';
import emoji from 'node-emoji';

const Index = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>{emoji.get('wave')}{emoji.get('smiley')} Hello</h1>
            <img className={indexStyles.homepagePhoto} src={myPhoto} alt="portfolio-photo"/>
            <h3>I'm Sukh, a front-end engineer, currently looking for a entry-level full-time oppurtunity</h3>

            <p>Want to see some of my work? <Link to="/projects">Projects</Link></p>
            <p>Or the places I've worked? <Link to="/experience">Work Experience</Link></p>
        </Layout>
    )
}

export default Index;
