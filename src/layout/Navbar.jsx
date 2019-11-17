import React from "react"
import { Link } from "gatsby"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navigation container">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/" className="navigation__link" activeClassName="active">
              Start
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/news"
              className="navigation__link"
              activeClassName="active"
            >
              Aktualnosci
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/offer"
              className="navigation__link"
              activeClassName="active"
            >
              Oferta
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/gallery"
              className="navigation__link"
              activeClassName="active"
            >
              Galeria
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/contact"
              className="navigation__link"
              activeClassName="active"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
