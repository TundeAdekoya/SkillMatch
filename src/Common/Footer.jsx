import React, {useState, useEffect, useRef} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../css/Footer.css'
import whiteIcon from '../Assets/svg/logoIcon.svg'
import { AiOutlineArrowDown } from 'react-icons/ai';

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {

  let footerElement = useRef(null)
  let footerButtonElement = useRef(null)
  const year = new Date().getFullYear();

  useEffect(() => {

    gsap.timeline()
      .fromTo(footerElement.current, 
    {scale: 0, opacity:0}, 
    {scale:1, 
      opacity:1,
      ease: "back.out",
      scrollTrigger: {
        trigger: footerElement.current,
        start: "1px 100%", 
        end: "bottom 1%",
        toggleActions: 'restart pause reverse reset',
        scrub: true,
      } 
    })
      .fromTo(footerButtonElement.current, 
    {opacity:0}, 
    {
      opacity:1,
      ease: "back.out",
      scrollTrigger: {
        trigger: footerButtonElement.current,
        start: "1px 100%", 
        end: "bottom 1%",
        toggleActions: 'restart pause reverse reset',
        scrub: true,
      } 
    })

  }, [])


  const [isVisible1, setIsVisible1] = useState(false)
  const linkRef1 = useRef(null);
  const toggleVisibility1 = () => {
      setIsVisible1(!isVisible1)
  }

  const [isVisible2, setIsVisible2] = useState(false)
  const linkRef2 = useRef(null);
  const toggleVisibility2 = () => {
      setIsVisible2(!isVisible2)
  }

  const [isVisible3, setIsVisible3] = useState(false)
  const linkRef3 = useRef(null);
  const toggleVisibility3 = () => {
      setIsVisible3(!isVisible3)
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div id='footer' className='py-12 px-12 overflow-hidden' >
      <div id="topFooter" ref={footerButtonElement}>
        <div className="topFooterSubSection  text-center" style={{ fontFamily: "MabryProBlack" }}>
          <h3 className=' text-4xl	mb-8' ref={footerElement} >Find your techies now.</h3>
          <div className="subscribeInput" >
            <button className='' style={{ fontFamily: "MabryProBold" }}>Secure your spot, it’s free</button>
          </div>
        </div>
        <div id="toFooterLinkSection" className='flex text-base	text-center' style={{ fontFamily: "MabryProRegular" }} >
              <ul className='web flex gap-4 flex-col drop-menu' >
                <li className='font-semibold' style={{ fontFamily: "MabryProBold" }}>SkillMatch</li>
                <li>Developer</li>
                <li>Product</li>
                <li>Talent</li>
                <li>FAQ</li>
              </ul>

              <ul className='web flex gap-4 flex-col'>
                <li className='font-semibold' style={{ fontFamily: "MabryProBold" }}>Talent</li>
                <li>How - to - SkillMatch</li>
                <li>Partners</li>
              </ul>

              <ul className='web flex gap-4 flex-col'>
                <li className='font-semibold' style={{ fontFamily: "MabryProBold" }}>Contact</li>
                <li>Email</li>
              </ul>
              
              <ul className='mobile flex gap-4 flex-col'>
                <div onClick={toggleVisibility1} className='flex items-center justify-between'>
                  <p>SkillMatch </p>
                  <div className='cursor-pointer'><AiOutlineArrowDown /></div>
                </div>
                <div 
                className='flex flex-col gap-4 mt-6 mobile-nav-item'
                ref={linkRef1}
                style={{
                  height: isVisible1 ? linkRef1.current?.scrollHeight : 0,
                  opacity: isVisible1 ? 1 : 0,
                  transition: "height 1s ease-in-out, opacity 1s ease-in-out",
                  overflow: "hidden",
                }}>
                  <li>Developer</li><li>Product</li><li>Talent</li><li>FAQ</li>
                </div>
              </ul>
              
              <ul className='mobile flex gap-4 flex-col mt-3'>
              <div onClick={toggleVisibility2} className='flex items-center justify-between'>
                  <p>Talent</p>
                  <div className='cursor-pointer'><AiOutlineArrowDown /></div>
                </div>
                <div 
                className='flex flex-col gap-4 mt-6 mobile-nav-item'
                ref={linkRef2}
                style={{
                  height: isVisible2 ? linkRef2.current?.scrollHeight : 0,
                  opacity: isVisible2 ? 1 : 0,
                  transition: "height 0.7s ease-in-out, opacity 0.7s ease-in-out",
                  overflow: "hidden",
                }}>
                  <li>How - to - SkillMatch</li><li>Partners</li>
                </div>
              </ul>

              <ul className='mobile flex gap-4 flex-col mt-3'>
              <div onClick={toggleVisibility3} className='flex items-center  justify-between'>
                  <p>Contact</p>
                  <div className='cursor-pointer'><AiOutlineArrowDown /></div>
                </div>
                <div 
                className='flex flex-col gap-4 mt-6 mobile-nav-item'
                ref={linkRef3}
                style={{
                  height: isVisible3 ? linkRef3.current?.scrollHeight : 0,
                  opacity: isVisible3 ? 1 : 0,
                  transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out",
                  overflow: "hidden",
                }}
                ><li>Email</li>
                </div>
              </ul>
        </div>
      </div>
      <div id="bottomFooter" style={{ fontFamily: "MabryProRegular" }}>
        <div className='text flex gap-2 mr-4 ' >
          <p>@SkillMatch</p>
          <p>{year}</p>
        </div>
          <img src={whiteIcon} alt="" />
      </div>
    </div>
  )
}

export default Footer