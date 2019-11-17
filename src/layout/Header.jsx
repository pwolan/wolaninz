import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="header">
      <div className="slider">
        <div className="slider__bg"></div>
        <div className="slider__body">
          <h1 className="slider__header">
            Najnowsze fronty w nowoczesnym wydaniu!
          </h1>
          <h2 className="slider__rap">
            Z specjalnie wyselekcjonowanych warzyw które dzięki naszej
            najlepszej recepturze mogą zagościć na państwa stołach i cieszyć
            smakiem i aromatem
          </h2>
          <Link to='/gallery' className="slider__read-more">zobacz więcej</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
