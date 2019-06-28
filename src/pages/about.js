import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link } from 'gatsby';

const About = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>About Page</h1>
            <p>Bio here</p>
            <Link to="/contact">Learn More</Link>
        </Layout>
    )
}

export default About;