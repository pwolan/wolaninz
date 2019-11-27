import React from "react"
import Navbar from "../layout/Navbar"
import SecondaryHeader from "../layout/SecondaryHeader"
import { useStaticQuery, graphql, Link } from "gatsby"
import Footer from "../layout/Footer"
const Gallery = () => {
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
  const images = data.wolaninzieba.assets
  return (
    <React.Fragment>
      <Navbar />
      <SecondaryHeader title="Galeria" />
      <div className="container">
        <section className="gallery">
          <h1 className="h1">Najnowsze projekty</h1>
          {images.map(img => (
            <div key={img.id} className="gallery__img-container">
              <img src={img.url} alt={img.id} className="gallery__img" />
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Gallery
