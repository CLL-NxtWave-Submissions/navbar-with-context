import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {themeContextDataObject => {
      const {isDarkTheme} = themeContextDataObject

      return (
        <div
          className={`home-bg-container ${
            isDarkTheme ? 'home-dark-theme' : 'home-light-theme'
          }`}
        >
          <Navbar />
          <div className="home-content-container">
            <img
              className="home-content-img"
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              alt="home"
            />
            <h1 className="home-content-text">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
