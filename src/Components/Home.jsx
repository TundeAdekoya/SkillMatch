import React, {useEffect, useRef} from 'react'
import '../css/Home.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


import firstImage from '../Assets/jpg/first image.jpg'
import secondImage from '../Assets/jpg/second image.jpg'
import thirdImage from '../Assets/jpg/third image.jpg'
import joinImage from '../Assets/jpg/joined image.jpg'
import belowthefoldimage1 from '../Assets/jpg/belowthefoldimage1.jpg'
import belowthefoldimage2 from '../Assets/jpg/belowthefoldimage2.jpg'
import belowthefoldimage3 from '../Assets/jpg/belowthefoldimage3.jpg'
import belowthefoldimage4 from '../Assets/jpg/belowthefoldimage4.jpg'

import partner1 from '../Assets/svg/partner1.svg'
import partner2 from '../Assets/svg/partner2.svg'
import partner3 from '../Assets/svg/partner3.svg'
import partner4 from '../Assets/svg/partner4.svg'
import partner5 from '../Assets/svg/partner5.svg'
import partner6 from '../Assets/svg/partner6.svg'
import partner7 from '../Assets/svg/partner7.svg'

gsap.registerPlugin(ScrollTrigger);
const Home = () => {

  let homepage = useRef(null)
  let aboveTheFoldText = useRef(null)
  let aboveTheFoldImage = useRef(null)
  let button = useRef(null)
  let imageOne = useRef(null)
  let imageTwo = useRef(null)
  let imageThree = useRef(null)
  let belowTheFoldText = useRef(null)

  useEffect(() => {
    gsap.fromTo(button.current, 
      {
        skewX: 0,
        skewY: 0,
      },
      {
        skewX: 5,
        skewY: 2.5,
        duration: 20,
        ease: "back.out",
        scrollTrigger: {
          trigger: [button.current,],
          start: "1px 8%", //animation starts when the top of myDiv hits the center of the viewport
          end: "30px 30%",
          toggleActions: 'restart pause reverse reset',
          scrub: true, //animation follows the scroll position smoothly
        },})

    gsap.fromTo([imageOne.current, imageTwo.current, imageThree.current], 
      {
        yPercent: 0, scale:1,
      },
      {
        scale:.7,
        yPercent: 20,
        duration: 5,
        ease: "back.out",
        stagger:{amount:.7},
        scrollTrigger: {
          trigger: [imageOne.current, imageTwo.current, imageThree.current,],
          start: "top 60%", 
          end: "bottom 1%",
          toggleActions: 'restart pause reverse reset',
          scrub: true, 
        },})

    gsap.fromTo(belowTheFoldText.current, 
        {opacity: 0, y:150, scale:0}, 
        {opacity:1,
          duration: 5, 
          y:0,
          scale:.8,
          ease: "back.out",
          scrollTrigger: {
            trigger: belowTheFoldText.current,
            start: "1px 100%", 
            end: "bottom  60%",
            toggleActions: 'restart pause reverse reset',
            scrub: true,
          } 
        })

      gsap.timeline()
        .fromTo(homepage.current, {opacity:0}, {duration:1.5, opacity:1})
        .fromTo(aboveTheFoldText.current, {opacity:0, scale:0.8, ease:'back'}, {duration:.8, opacity:1, scale:1})
        .fromTo(aboveTheFoldImage.current, {opacity:0, ease:'back'}, {duration:.8, opacity:1 })
        
  }, [])
  


  return (
    <div id='homePage' ref={homepage} className='overflow-hidden'>

      <main id="above-the-fold" className='flex items-center justify-center flex-col my-10' ref={aboveTheFoldText}>
        <div className="text-section mb-9">
          <h1  className='flex flex-col' style={{ fontFamily: "MabryProRegular" }}>Levelling the playing <span>field for <b style={{ fontFamily: "MabryProBlack" }}>Techies</b></span></h1>
        </div>
        <button ref={button} style={{ fontFamily: "MabryProBold" }}>Be among the first, it’s free</button>
      </main>

     <section id="home-page-image-section" className='flex items-center justify-center' ref={aboveTheFoldImage}>
            <img src={firstImage} ref={imageOne} alt="" />
            <img src={secondImage} ref={imageTwo} alt="" />
            <img src={thirdImage} ref={imageThree} alt="" />
      </section> 

      <section className="partner-container">
        <div className="partner flex place-content-around">
          <img className='' src={partner1} alt="" />
          <img className='' src={partner2} alt="" />
          <img className='' src={partner3} alt="" />
          <img className='' src={partner4} alt="" />
          <img className='' src={partner5} alt="" />
          <img className='' src={partner6} alt="" />
          <img className='' src={partner7} alt="" />
        </div>
        <div className="partner partner2 flex place-content-around">
          <img className='' src={partner1} alt="" />
          <img className='' src={partner2} alt="" />
          <img className='' src={partner3} alt="" />
          <img className='' src={partner4} alt="" />
          <img className='' src={partner5} alt="" />
          <img className='' src={partner6} alt="" />
          <img className='' src={partner7} alt="" />
        </div>
      </section>

      <section id="below-the-fold" className='flex flex-col justify-center items-center opacity-0' ref={belowTheFoldText} style={{ fontFamily: "MabryProBold" }}>
        <div className="below-the-fold-text mx-auto" >
          <h2 className=' below-the-fold-text-context flex flex-col '>
            <span className=''>Prove ownership of your GitHub, Behance,</span>
            <span className=''>Dribble and Stack Overflow profile and check</span>  
            <span className='mb-10'>your ranking against other talents for free.</span>
          </h2>
        </div>
        <div className="below-the-fold-image flex justify-center items-center gap-2">
          <div className=" flex justify-center items-center gap-2">
            <img src={belowthefoldimage1} alt="" />
            <img src={belowthefoldimage2} alt="" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={belowthefoldimage3} alt="" />
            <img src={belowthefoldimage4} alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home