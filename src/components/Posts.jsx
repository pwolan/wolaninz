import React, { Component } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Posts = props => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wolaninzieba {
        posts(first: 6) {
          id
          description
          createdAt
          title
          thumbnail {
            url
          }
        }
      }
    }
  `)
  let { posts } = data.wolaninzieba
  if (props.index) posts = posts.slice(0, 3)
  return (
    <section className="new-posts">
      <h1 className="h1">Najnowsze wpisy</h1>
      {posts.map(
        ({ title, id, description, thumbnail, thumbnail: { url } }) => (
          <article className="post" key={id}>
            <div className="post__img-wrapper">
              <img className="post__img" src={url} alt={id} />
            </div>
            <div className="post__body">
              <h2 className="post__header">{title}</h2>
              <p className="post__text">{description}</p>
              <Link to={`/news/${id}`} className="post__read-more">
                czytaj więcej...
              </Link>
            </div>
          </article>
        )
      )}
      {!props.noButton && (
        <Link to="/news" className="new-posts__more">
          Zobacz więcej
        </Link>
      )}
    </section>
  )
}

export default Posts

// <Link to="/" className="post__read-more">
//                 zobacz galerię
//               </Link>
