import Header from '../components/Header'
import Footer from '../components/Footer'
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'

import '../styles/globals.css'

export const ThemeContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div id={theme}>
      <Header />
      <div className='theme-switcher'>
        {/* <label>{theme==="light" ? "light" : "dark" }</label> */}
        <ReactSwitch
          onChange = {toggleTheme}
          checked={theme==="dark"}
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 16,
                lineHeight: 1
              }}
              >
              🌙
            </div>
            }
          uncheckedIcon={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 16,
                  lineHeight: 1
                }}
              >
              ☀️
              </div>
            }
          onColor={'#01577c'}
          offColor={'#e9e9e9'}
          onHandleColor={'#a5a59f'}
          offHandleColor={'#01577c'}
          handleDiameter={32}
        />
      </div>
      
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default MyApp
