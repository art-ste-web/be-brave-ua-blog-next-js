import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTopBtn from '../components/ScrollTopBtn'
import { useEffect } from 'react'
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'

import '../styles/globals.css'

export const ThemeContext = createContext(null)

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  /*!!!!!!!(need optimization) show-hide to top btn */
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const toTopBtn = document.querySelector('.scroll-top-btn')
        offset >= 960 ? toTopBtn.style.opacity=.7 : toTopBtn.style.opacity=0
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });
    // console.log(offset); 

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
          boxShadow={'4px 4px 8px rgba(0, 0, 0, .2)'}
          activeBoxShadow={'4px 4px 8px rgba(0, 0, 0, .2)'}
        />
      </div>
      
      <main className='container'>
        <Component {...pageProps} />
      </main>
      <ScrollTopBtn />
      <Footer />
    </div>
    </ThemeContext.Provider>
  )
}

export default MyApp
