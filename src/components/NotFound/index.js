import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {themeContextDataObject => {
      const {isDarkTheme} = themeContextDataObject

      return (
        <div
          className={`not-found-bg-container ${
            isDarkTheme ? 'not-found-dark-theme' : 'not-found-light-theme'
          }`}
        >
          <Navbar />
          <div className="not-found-content-container">
            <img
              className="not-found-content-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className="not-found-content-header">Lost Your Way?</h1>
            <p className="not-found-content-text">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
