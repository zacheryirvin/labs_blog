/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        postgres {
          allPosts {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `)
      .then(res => {
        createPaginatedPages({
          edges: res.data.postgres.allPosts.edges,
          createPage: createPage,
          pageTemplate: "src/templates/index.jsx",
          pageLength: 5
        });
        res.data.postgres.allPosts.edges.forEach(({ node }) => {
          createPage({
            path: `/post/${node.id}`,
            component: path.resolve("./src/templates/post.jsx"),
            context: {
              postid: node.id
            }
          });
        });
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject();
      });
  });
};
