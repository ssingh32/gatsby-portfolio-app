import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => {
    return (
        <Layout>
        <h1>Home Page</h1>
        <Link to="/about">About Page</Link>
        <Link to="/projects">Projects Page</Link>
        <Link to="/experience">Experience Page</Link>
        <Link to="/contact">Contact Page</Link>
        </Layout>
    )
}

export default Index;
