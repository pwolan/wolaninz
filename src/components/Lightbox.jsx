import React, { Component } from "react"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css" // This only needs to be imported once in your app

export default class LightboxExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: this.calculateMainIndex(),
      isOpen: this.props.isOpen,
    }
  }
  calculateMainIndex = () => {
    const { images, props } = this
    let photoIndex = images.findIndex(img => img == props.mainImg)
    if (photoIndex == -1) photoIndex = 0
    return photoIndex
  }
  images = this.props.imagesList.map(img => img.url)

  componentDidUpdate() {
    if (this.props.isOpen !== this.state.isOpen) {
      this.setState({
        isOpen: this.props.isOpen,
        photoIndex: this.calculateMainIndex(),
      })
    }
  }
  render() {
    const { photoIndex, isOpen } = this.state
    const { handleClose } = this.props
    const { images } = this
    console.log(images)
    return (
      <React.Fragment>
        {isOpen && (
          <div>
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={handleClose}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          </div>
        )}
      </React.Fragment>
    )
  }
}
