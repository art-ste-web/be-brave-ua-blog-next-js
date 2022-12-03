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
              <h2>Be Brave UA <span className='flag'>
                <Image
                  src='/images/ukraine.png'
                  alt="Picture of the author"
                  width={20}
                  height={20}
                />
              </span></h2>
            </a>
          </Link>

          {/* Hamburger icon */}
          <input className="side-menu" type="checkbox" id="side-menu"/>
          <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>

          {/* Menu */}
          <nav className="nav">
              <ul className="menu">
                  <li><Link href='/'>Головна</Link></li>
                  <li><Link href="/blog">Блог</Link></li>
                  <li><Link href="/takmed">Тактична медицина</Link> </li>
                  <li><Link href="/psyholog">Психологічна допомога</Link></li>
                  <li><Link href="/biblioteka">Бібліотека</Link></li>
              </ul>
          </nav>
      </header>
  )
}
