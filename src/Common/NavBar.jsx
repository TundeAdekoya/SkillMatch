import React, {useRef, useEffect} from 'react'
import mobileLogo from '../Assets/svg/miniIcon2.svg'
import mainLogo from '../Assets/svg/icon.svg'
import { Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from'react-icons/fa'
import {BsFillPersonFill} from'react-icons/bs'
import '../css/NavBar.css'
import {Elastic, gsap} from 'gsap'

const NavBar = () => {
    let logoItemWeb = useRef(null)
    let logoItemMobile = useRef(null)
    let menu1 = useRef(null);
    let menu2 = useRef(null);
    let menu3 = useRef(null);
    let menu4 = useRef(null);
    let webCta = useRef(null);
    let mobileCta = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            [logoItemWeb.current, logoItemMobile.current],
            {y:30, opacity:0}, 
            {y:0, duration: 2, opacity:1, ease:Elastic}
        )

        gsap.fromTo(
            [menu1.current, menu2.current, menu3.current, menu4.current, webCta.current],
            {y:-30, opacity:0, delay:3}, 
            {y:0, stagger:{amount:1}, duration:.7, opacity:1, ease:Elastic, }
        )

        gsap.fromTo(
            mobileCta, {y:30, opacity:0, delay:.7}, {y:0, opacity:1, duration:1.5, ease:Elastic}
        )


    }, [])


    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
          }
    }
  return (
    <header>
        <div className="navLogo w-32">
            <img 
            ref={logoItemWeb}
            src={mainLogo} alt="" />
        </div>
        <div className="navLogoMobile w-32">
            <img ref={logoItemMobile} src={mobileLogo} alt="" />
        </div>

        <nav ref={navRef} style={{ fontFamily: "MabryProRegular" }}> 
            <NavLink className='navbarLinksMenu' to='/'><p ref={menu1}>Developer</p>
            </NavLink>
            <NavLink className='navbarLinksMenu' ref={menu2} to='/'><p ref={menu2}>Product</p></NavLink>
            <NavLink className='navbarLinksMenu' ref={menu3} to='/'><p ref={menu3}>Talent</p></NavLink>
            <NavLink className='navbarLinksMenu' ref={menu4} to='/'><p ref={menu4}>FAQ</p></NavLink>
            <Link to='/'><button className='navCta font-bold'  ref={webCta} style={{ fontFamily: "MabryProBold" }}>Join Waitlist</button></Link>
            <button className= 'nav-btn nav-close-btn'  onClick={showNavbar}
            ><FaTimes/></button>
        </nav>

        <div className="mobile-cta">
            <Link to='/' ><button ref={mobileCta} className= 'nav-btn mobile-nav-cta p-2' ><BsFillPersonFill className='contact-icon'/></button></Link>
            <button className= 'nav-btn p-2'  onClick={showNavbar}><FaBars className='bar-icon'/></button>
        </div>
    </header>
  )
}

export default NavBar