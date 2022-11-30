import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
  return (
    <header className="header">
          {/* Logo */}
          <Link href='/'>
            <a><div className='site-logo'></div></a>
          </Link>
          <Link href='/'>
            <a className="logo">
              <h2>Be Brave UA</h2>
            </a>
          </Link>

          {/* Hamburger icon */}
          <input className="side-menu" type="checkbox" id="side-menu"/>
          <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

          {/* Menu */}
          <nav className="nav">
              <ul className="menu">
                  <li><a href="/blog">Блог</a></li>
                  <li><a href="#">ТакМед</a> </li>
                  <li><a href="#">Психологія</a></li>
                  <li><a href="/biblioteka">Бібліотека</a></li>
              </ul>
          </nav>
      </header>
  )
}
