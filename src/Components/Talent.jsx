import {React, useEffect, useState, useRef} from 'react'
import '../css/Talent.css'
import '../css/Font.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import roundtwoimage1 from '../Assets/png/2nd round/one.png'
import roundtwoimage2 from '../Assets/png/2nd round/two.png'
import roundthreeimage1 from '../Assets/png/3rd round/one.png'
import roundthreeimage2 from '../Assets/png/3rd round/two.png'
import roundfourimage1 from '../Assets/png/4th round/one.png'
import roundfourimage2 from '../Assets/png/4th round/two.png'
import roundfiveimage1 from '../Assets/png/5th round/one.png'
import roundfiveimage2 from '../Assets/png/5th round/two.png'


gsap.registerPlugin(ScrollTrigger);
const Talent = () => {

  let talTitle = useRef(null)

  useEffect(() => {

    gsap.fromTo(talTitle.current, 
      {scale: 0, opacity:0}, 
      {scale:.8, 
        opacity:1,
        ease: "back.out",
        scrollTrigger: {
          trigger: talTitle.current,
          start: "1px 100%", 
          end: "bottom 1%",
          toggleActions: 'restart pause reverse reset',
          scrub: true,
        } 
      })
      
  }, [])

  return (
    <div id='talent-page' className='overflow-hidden'>
      <section className="talent-text flex opacity-0" ref={talTitle}>
        <h2 className='flex flex-col' style={{ fontFamily: "MabryProBold" }}>
          <span>Are you in search of the next</span>
          <span>generation of tech talent?</span>
        </h2>
      </section>

        <section className="talent-container talent-img ">
          <div className="talent flex place-content-around">
            <img className='' src={roundtwoimage1} alt="" />
            <img className='' src={roundtwoimage2} alt="" />
          </div>
          <div className="talent talent2 flex place-content-around">
            <img className='' src={roundtwoimage1} alt="" />
            <img className='' src={roundtwoimage2} alt="" />
          </div>
        </section>
        <section className="talent-container">
          <div className="talent-slow flex place-content-around">
            <img className='' src={roundthreeimage1} alt="" />
            <img className='' src={roundthreeimage2} alt="" />
          </div>
          <div className="talent-slow talent-slow2 flex place-content-around">
            <img className='' src={roundthreeimage1} alt="" />
            <img className='' src={roundthreeimage2} alt="" />
          </div>
        </section>
        <section className="talent-container ">
          <div className="talent flex place-content-around ">
            <img className='' src={roundfourimage1} alt="" />
            <img className='' src={roundfourimage2} alt="" />
          </div>
          <div className="talent talent2 flex place-content-around">
            <img className='' src={roundfourimage1} alt="" />
            <img className='' src={roundfourimage2} alt="" />
          </div>
        </section>
        <section className="talent-container">
          <div className="talent-slow flex place-content-around">
            <img className='' src={roundfiveimage1} alt="" />
            <img className='' src={roundfiveimage2} alt="" />
          </div>
          <div className="talent-slow talent-slow2 flex place-content-around">
            <img className='' src={roundfiveimage1} alt="" />
            <img className='' src={roundfiveimage2} alt="" />
          </div>
        </section>
    </div>
  )
}

export default Talent