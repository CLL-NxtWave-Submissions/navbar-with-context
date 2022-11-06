import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {themeContextDataObject => {
      const {isDarkTheme} = themeContextDataObject

      return (
        <div
          className={`about-bg-container ${
            isDarkTheme ? 'about-dark-theme' : 'about-light-theme'
          }`}
        >
          <Navbar />
          <div className="about-content-container">
            <img
              className="about-content-img"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
            />
            <h1 className="about-content-text">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
