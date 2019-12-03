import React from "react"
const SecondaryHeader = ({ title, bg }) => {
  let bgStyle = {
    backgroundImage: `url(${bg})`,
  }
  return (
    <header className="header">
      <div className="slider header" style={bgStyle}>
        <div className="slider__bg"></div>
        <div className="slider__body">
          {title && <h1 className="h1">{title}</h1>}
        </div>
      </div>
    </header>
  )
}

export default SecondaryHeader

// <h1 className="h1">{title}</h1>
