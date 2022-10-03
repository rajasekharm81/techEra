import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <Link className="headerContainer" to="/">
        <button className="logoButton" type="button">
          <img
            className="websiteLogo"
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </button>
      </Link>
    )
  }
}

export default Header
