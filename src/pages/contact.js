import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import emoji from 'node-emoji';

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h2>{emoji.get('male-technologist')} Github <a href="https://github.com/ssingh32">@ssingh32</a></h2>
            <h2>{emoji.get('eyes')} LinkedIn <a href="https://www.linkedin.com/in/sukhdip-singh-25134310a/">@sukhdip-singh</a></h2>
            <h2>{emoji.get('email')} Email <a href="mailto:sukhdipsinghnijjar@gmail.com">@sukhdipsinghnijjar</a></h2>
            <h2>{emoji.get('iphone')} Contact Number <a href="tel:2093730997">209-373-0997</a></h2>
        </Layout>
    )
}

export default Contact;