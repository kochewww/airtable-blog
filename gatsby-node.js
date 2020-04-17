const path = require(`path`);
const _ = require("lodash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tagSet = new Set();
  const categorySet = new Set();
  const result = await graphql(`
    query MyQuery {
      allAirtableblog {
        edges {
          node {
            data {
              slug
              tags
              category
            }
          }
        }
      }
    }
  `);
  const postEdges = result.data.allAirtableblog.edges;

  postEdges.forEach(({ node }) => {
    if (node.data.tags) {
      node.data.tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    if (node.data.category) {
      categorySet.add(node.data.category);
    }

    createPage({
      path: node.data.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.data.slug,
      },
    });
  });

  tagSet.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: path.resolve(`./src/templates/tag-page.js`),
      context: {
        tag,
      },
    });
  });

  categorySet.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category)}/`,
      component: path.resolve(`./src/templates/category-page.js`),
      context: {
        category,
      },
    });
  });
};
