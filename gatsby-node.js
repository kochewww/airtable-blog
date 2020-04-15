const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyQuery {
      allAirtableblog {
        edges {
          node {
            data {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allAirtableblog.edges.forEach(({ node }) => {
    createPage({
      path: node.data.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.data.slug,
      },
    });
  });
};
