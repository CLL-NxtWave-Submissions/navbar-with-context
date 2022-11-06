import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {themeContextDataObject => {
      const {isDarkTheme, toggleTheme} = themeContextDataObject

      return (
        <div
          className={`navbar-bg-container ${
            isDarkTheme ? 'navbar-dark-theme' : 'navbar-light-theme'
          }`}
        >
          <img
            className="website-logo-img"
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
          />

          <ul className="navbar-links-container">
            <li className="navbar-link-item">
              <Link className="navbar-link" to="/">
                <button
                  type="button"
                  className={`navbar-link-button ${
                    isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
                  }`}
                >
                  Home
                </button>
              </Link>
            </li>

            <li className="navbar-link-item">
              <Link className="navbar-link" to="/about">
                <button
                  type="button"
                  className={`navbar-link-button ${
                    isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
                  }`}
                >
                  About
                </button>
              </Link>
            </li>
          </ul>

          <button type="button" className="theme-button" onClick={toggleTheme}>
            <img
              className="theme-button-img"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
