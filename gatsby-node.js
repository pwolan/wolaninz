const path = require(`path`)
const {
    createFilePath
} = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({
    node,
    getNode,
    actions
}) => {
    const {
        createNodeField
    } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({
            node,
            getNode,
            basePath: `pages`
        })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}
exports.createPages = async ({
    graphql,
    actions
}) => {
    const {
        createPage
    } = actions
    const postTemplate = path.resolve('src/templates/Post.js')
    const postsQuery = await graphql(`
  query  {
  wolaninzieba {
    posts {
      id
      description
      createdAt
      title
      thumbnail {
        url
      }
      picturesGallery {
        url
      }
      postBody {
        html
      }
    }
  }  
  }
  `)
    //   console.log(postsQuery.data.wolaninzieba.posts);
    postsQuery.data.wolaninzieba.posts.forEach(post => {
        let slugtitle = post.title.toLowerCase();
        slugtitle = slugtitle.trim().split(' ').join('-');
        createPage({
            path: post.id,
            component: postTemplate,
            context: {
                data: post
            },
        })
    })
}