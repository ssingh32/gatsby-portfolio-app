import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link } from 'gatsby';

const Index = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>I'm Sukh, a full-stack developer, living in beautiful Stockton, CA</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default Index;
