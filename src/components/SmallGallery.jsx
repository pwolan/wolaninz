import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
const SmallGallery = () => {
  const data = useStaticQuery(graphql`
    {
      wolaninzieba {
        assets(
          where: { thumbnailPost_none: { _search: "" } }
          orderBy: updatedAt_DESC
          first: 6
        ) {
          id
          fileName
          url
        }
      }
    }
  `)
  const pictures = data.wolaninzieba.assets
  console.log(pictures)
  return (
    <section className="small-gallery">
      <h2 className='small-gallery__header h1'>Ostatnie projekty</h2>
      {pictures.map(({ id, url }) => (
        <div key={id} className="small-gallery__img-container">
          <img src={url} className="small-gallery__img" />
        </div>
      ))}
      <Link to='/gallery' className='small-gallery__more'>Zobacz więcej</Link>
    </section>
  )
}

export default SmallGallery
