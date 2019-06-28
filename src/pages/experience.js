import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Link, graphql, useStaticQuery } from 'gatsby';
import projectStyles from './projects.module.scss';

const Experience = () => {
    const postData = useStaticQuery(graphql` query {
        allContentfulWorkExperience(
            sort: {
              fields:endDate,
              order:DESC
            }
          ) { edges {
                node {
                    title
                    slug
                    companyName
                    startDate(formatString: "MMMM Do, YYYY")
                    endDate(formatString: "MMMM Do, YYYY")
                }
            }
        }
      }`);


    return (
        <Layout>
        <Head title="Experience"/>
        <h1>Work Experience</h1>
        <ol className={projectStyles.posts}>
            {postData.allContentfulWorkExperience.edges.map((edge) => {
                return (
                    <li className={projectStyles.post} key={edge.node.title}>
                      <Link to={`/experience/${edge.node.slug}`}>
                          <h2>{edge.node.companyName}, {edge.node.title}</h2>
                          <p>{edge.node.startDate} - {edge.node.endDate ? edge.node.endDate : "Present"}</p>
                      </Link>
                    </li>
                )
            })}
        </ol>
        </Layout>
    )
}

export default Experience;