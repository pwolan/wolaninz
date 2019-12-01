import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Lightbox from "./Lightbox"
class SmallGallery extends React.Component {
  state = {
    lightBoxOn: false,
    mainImg: "",
  }
  handleImgClick = e => {
    console.log('object');
    this.setState({
      lightBoxOn: true,
      mainImg: e.target.src,
    })
  }
  handleCloseRequest = () => {
    this.setState({
      lightBoxOn: false,
      mainImg: "",
    })
  }

  images = this.props.data.wolaninzieba.assets
  render() {
    const { images, handleCloseRequest, handleImgClick } = this
    const { mainImg, lightBoxOn } = this.state
    return (
      <section className="small-gallery">
        <h2 className="small-gallery__header h1">Ostatnie projekty</h2>
        {images.map(({ id, url }) => (
          <div
            key={id}
            className="small-gallery__img-container"
            onClick={handleImgClick}
          >
            <img src={url} className="small-gallery__img" />
          </div>
        ))}
        <Link to="/gallery" className="small-gallery__more">
          Zobacz więcej
        </Link>
        <Lightbox
          isOpen={lightBoxOn}
          imagesList={images}
          handleClose={handleCloseRequest}
          mainImg={mainImg}
        />
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => <SmallGallery data={data} {...props} />}
  />
)
