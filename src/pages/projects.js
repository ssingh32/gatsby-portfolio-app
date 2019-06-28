import React from 'react';
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import projectStyles from './projects.module.scss';
import Head from '../components/head';

const Projects = () => {
    const postData = useStaticQuery(graphql` query {
        allContentfulProjects(
          sort: {
            fields:endDate,
            order:DESC
          }
        ) {
          edges {
            node {
              title
              slug
              startDate(formatString: "MMMM Do, YYYY")
              endDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }`);

    return (
        <div>
        <Layout>
            <Head title="Projects"/>
            <h1>Projects</h1>
            <ol className={projectStyles.posts}>
                {postData.allContentfulProjects.edges.map((edge) => {
                    return (
                        <li className={projectStyles.post} key={edge.node.title}>
                          <Link to={`/projects/${edge.node.slug}`}>
                              <h2>{edge.node.title}</h2>
                              <p>{edge.node.startDate} - {edge.node.endDate ? edge.node.endDate : "Present"}</p>
                          </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    </div>
    )
}

export default Projects;