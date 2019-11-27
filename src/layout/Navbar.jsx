import React, { Component } from "react"
import { Link } from "gatsby"
import hamburger from "../images/menu.png"

class Navbar extends Component {
  state = {
    expanded: false,
  }
  handleExpand = e => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }
  render() {
    let expand = this.state.expanded ? "" : "hide"
    return (
      <nav className="navbar">
        <div className="navigation__mobile">
          <button className="navigation__toggler" onClick={this.handleExpand}>
            <img src={hamburger} alt="menu toggler" />
          </button>
        </div>
        <div className={"navigation container " + expand}>
          <ul className="navigation__list">
            {menuItems.map(({ title, href }) => (
              <li className="navigation__item" key={title}>
                <Link
                  to={href}
                  className="navigation__link"
                  activeClassName="active"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar

const menuItems = [
  {
    title: "Start",
    href: "/",
  },
  {
    title: "Aktualności",
    href: "/news",
  },
  {
    title: "Oferta",
    href: "/offer",
  },
  {
    title: "Galeria",
    href: "/gallery",
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
]
