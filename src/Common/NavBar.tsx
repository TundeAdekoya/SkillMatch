import React, {useState, useRef} from 'react'
import mobileLogo from '../Assets/svg/miniIcon2.svg'
import mainLogo from '../Assets/svg/icon.svg'
import { Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes, FaPlus} from'react-icons/fa'
import {BsFillPersonFill} from'react-icons/bs'
import '../css/NavBar.css'

const NavBar: React.FC = () => {
    const navRef = useRef<HTMLDivElement>(null)
    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
          }
    }
  return (
    <header>
        <div className="navLogo w-32">
            <img src={mainLogo} alt="" />
        </div>
        <div className="navLogoMobile w-32">
            <img src={mobileLogo} alt="" />
        </div>

        <nav ref={navRef}>
            <NavLink className='navbarLinksMenu' to='/'>Developer</NavLink>
            <NavLink className='navbarLinksMenu' to='/'>Product</NavLink>
            <NavLink className='navbarLinksMenu' to='/'>About</NavLink>
            <NavLink className='navbarLinksMenu' to='/'>FAQ</NavLink>
            <Link to='/'><button className='navCta font-bold'>Join Waitlist</button></Link>
            <button className= 'nav-btn nav-close-btn'  onClick={showNavbar}
            ><FaTimes/></button>
        </nav>

        <div className="mobile-cta">
            <Link to='/'><button className= 'nav-btn mobile-nav-cta p-2' ><BsFillPersonFill className='contact-icon'/></button></Link>
            <button className= 'nav-btn p-2'  onClick={showNavbar}><FaBars className='bar-icon'/></button>
        </div>
    </header>
  )
}

export default NavBar