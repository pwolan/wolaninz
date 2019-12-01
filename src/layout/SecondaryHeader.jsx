import React from "react"
const SecondaryHeader = ({ title }) => {
  return (
    <header className="header">
      <div className="slider header">
        <div className="slider__bg"></div>
        <div className="slider__body">
          <h1 className="h1">{title}</h1>
        </div>
      </div>
    </header>
  )
}

export default SecondaryHeader
