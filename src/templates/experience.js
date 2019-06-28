import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from '../components/head';

export const query = graphql`query($slug: String!) {
    contentfulWorkExperience(slug: {eq: $slug}) {
        title
        slug
        companyName
        location {
          lon
          lat
        }
        startDate(formatString: "MMMM Do, YYYY")
        endDate(formatString: "MMMM Do, YYYY")
        body {
          json
        }
      }
  }`;

const Experience = (props) => {
    const options = {
        renderNode: {
          "embedded-asset-block": (node) => {
            const alt = node.data.target.fields.title['en-US'];
            const url= node.data.target.fields.file['en-US'].url;
            return <img src={url} alt={alt}/>
          }
        }
      }

    return (
        <Layout>
            <Head title={props.data.contentfulWorkExperience.companyName}/>
            <h1>{props.data.contentfulWorkExperience.title}</h1>
            <p>{props.data.contentfulWorkExperience.startDate} - {props.data.contentfulWorkExperience.endDate ? props.data.contentfulWorkExperience.endDate : "Present"}</p>
            {documentToReactComponents(props.data.contentfulWorkExperience.body.json, options)}
        </Layout>
    )
}

export default Experience;