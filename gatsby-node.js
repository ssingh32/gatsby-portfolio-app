const path = require('path');

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions;
    const projectTemplate = path.resolve('./src/templates/project.js');
    const experienceTemplate = path.resolve('./src/templates/experience.js');

    const res = await graphql(`query {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }`);

    const experienceRes = await graphql(`query {
      allContentfulWorkExperience {
        edges {
          node {
            slug
          }
        }
      }
    }`);

    res.data.allContentfulProjects.edges.forEach((edge) => {
          createPage({
              component: projectTemplate,
              path: `/projects/${edge.node.slug}`,
              context: {
                  slug : edge.node.slug
              }
          })
    })

    experienceRes.data.allContentfulWorkExperience.edges.forEach((edge) => {
      createPage({
          component: experienceTemplate,
          path: `/experience/${edge.node.slug}`,
          context: {
              slug : edge.node.slug
          }
      })
  })
}