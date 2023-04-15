import React, {useState} from 'react'
import mainLogo from '../Assets/icon.svg'
import mobileLogo from '../Assets/miniIcon.svg'
import { Link, NavLink} from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {

    const [showLinks, setShowLinks] = useState(false)

    const toggleMode = () =>{
        if (showLinks === false) {
            setShowLinks(true)
        } else {
            setShowLinks(true)
        }
    }

  return (
    <nav id='navBar'>
        <div className="navLogo">
            <img src={mainLogo} alt="" />
        </div>

        <div className="navLogoMobile">
            <img src={mobileLogo} alt="" />
        </div>

        <div className="navbarLinks">
            <NavLink className='navbarLinksMenu' to='/'>Developer</NavLink>
            <NavLink className='navbarLinksMenu' to='/'>Product</NavLink>
            <NavLink className='navbarLinksMenu' to='/'>About</NavLink>
            <NavLink className='navbarLinksMenu' to='/'>FAQ</NavLink>
        </div>

        <div className={"navbarLinksMobile" + (showLinks ? " show" : "")}>
            <NavLink onClick={() => setShowLinks(false)} className='navbarLinksMobileMenu' to='/'>Developer</NavLink>
            <NavLink onClick={() => setShowLinks(false)} className='navbarLinksMobileMenu' to='/'>Product</NavLink>
            <NavLink onClick={() => setShowLinks(false)} className='navbarLinksMobileMenu' to='/'>About</NavLink>
            <NavLink onClick={() => setShowLinks(false)} className='navbarLinksMobileMenu' to='/'>FAQ</NavLink>
        </div>

        <div className="navBtn">
            <Link to='/'>            
                <button>Join Waitlist</button>
            </Link>
        </div>

        <button className='navToggle' onClick={() => setShowLinks(!showLinks)}>
            <span></span>
        </button>
        
    </nav>
  )
}

export default NavBar