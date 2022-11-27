import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
          {/* Logo */}
          <Link href='/'>
            <a className="logo">
              <h2>WarBlog</h2>
            </a>
          </Link>

          {/* Hamburger icon */}
          <input className="side-menu" type="checkbox" id="side-menu"/>
          <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

          {/* Menu */}
          <nav className="nav">
              <ul className="menu">
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Blog</a> </li>
                  <li><a href="#">About</a></li>
              </ul>
          </nav>
      </header>
  )
}
