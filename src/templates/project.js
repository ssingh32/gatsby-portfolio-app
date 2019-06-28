import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';
export const query = graphql`query($slug: String!) {
    contentfulProjects(slug: {eq: $slug}) {
          title
          slug
          startDate(formatString: "MMMM Do, YYYY")
          body {
            json
          }
        }
  }`;

const Project = (props) => {
    // const options = {
    //     renderNode: {
    //       "embedded-asset-block": (node) => {
    //         const alt = node.data.target.fields.title['en-US'];
    //         const url= node.data.target.fields.file['en-US'].url;
    //         return <img src={url} alt={alt}/>
    //       }
    //     }
    //   }

    return (
        <Layout>
            <Head title={props.data.contentfulProjects.title}/>
            <h1>{props.data.contentfulProjects.title}</h1>
            <p>{props.data.contentfulProjects.startDate}</p>
            {documentToReactComponents(props.data.contentfulProjects.body.json)}
        </Layout>
    )
}

export default Project;