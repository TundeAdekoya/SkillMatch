import {React, useEffect, useRef} from 'react'
import '../css/Developer.css'
import searchIcon from '../Assets/svg/searchIcon.svg'
import getIcon from '../Assets/svg/getIcon.svg'
import person from '../Assets/svg/Person.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import discoverimage1 from '../Assets/svg/discoverImage1.svg'
import discoverimage2 from '../Assets/svg/discoverImage2.svg'
import discoverimage3 from '../Assets/svg/discoverImage3.svg'



gsap.registerPlugin(ScrollTrigger);
const Developer = () => {
  let devTitle = useRef(null)
  let devSubTitleOne = useRef(null)
  let devImageOne = useRef(null)
  let devSubTitleTwo = useRef(null)
  let devImageTwo = useRef(null)
  let devSubTitleThree = useRef(null)
  let devImageThree = useRef(null)

  useEffect(() => {
    gsap.timeline()
      .fromTo(devTitle.current, 
      {scale: 0, opacity:0}, 
      {scale:1, 
        opacity:1,
        ease: "back.out",
        scrollTrigger: {
          trigger: devTitle.current,
          start: "1px center", 
          end: "bottom 1%",
          toggleActions: 'restart pause reverse reset',
          scrub: true,
        } 
      })

      .fromTo([devSubTitleOne.current], 
        {x:150, opacity:0}, 
        { duration:2,
          x:20,
          opacity:1,
          ease: "back.out",
          scrollTrigger: {
            trigger: devSubTitleOne.current,
            start: "1px center", 
            end: "bottom 1%",
            toggleActions: 'restart pause reverse reset',
            scrub: true,
          } 
        })

      .fromTo([devSubTitleTwo.current], 
        {x:150, opacity:0}, 
        { duration:2,
          x:20,
          opacity:1,
          ease: "back.out",
          scrollTrigger: {
            trigger: devSubTitleTwo.current,
            start: "1px center", 
            end: "bottom 1%",
            toggleActions: 'restart pause reverse reset',
            scrub: true,
          } 
        })

      .fromTo([devSubTitleThree.current], 
        {x:150, opacity:0}, 
        { duration:2,
          x:20,
          opacity:1,
          ease: "back.out",
          scrollTrigger: {
            trigger: devSubTitleThree.current,
            start: "1px center", 
            end: "bottom 1%",
            toggleActions: 'restart pause reverse reset',
            scrub: true,
          } 
        })

        .fromTo(devImageOne.current, 
          {scale: 0.3, opacity:0.3}, 
          {scale:1, 
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: devImageOne.current,
              start: "1px 100%", 
              end: "bottom 1%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

        .fromTo(devImageTwo.current, 
          {scale: 0.3, opacity:0.3}, 
          {scale:1, 
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: devImageTwo.current,
              start: "1px 100%", 
              end: "bottom 1%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

        .fromTo(devImageThree.current, 
          {scale: 0.3, opacity:0.3}, 
          {scale:1, 
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: devImageThree.current,
              start: "1px 100%", 
              end: "bottom 1%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

  }, [])
  


  return (
    <div id='developer' className='flex items-center justify-center flex-col mt-20'>
      <section id="developer-title" ref={devTitle}>
        <h2 style={{ fontFamily: "MabryProBold" }}>Discover your techie.</h2>
      </section>

      <section id="developer-content">
          <div className='mt-16 overflow-hidden'>
              <section className="developer-content-title opacity-0 " ref={devSubTitleOne}>
                <div className="dev-icon flex gap-2 items-center mb-2 " style={{ fontFamily: "MabryProRegular" }}>
                  <div className="dev-image-container">
                   <img src={searchIcon} alt="" />
                  </div>
                  <h3>Search</h3>
                </div>
                <div className="dev-content-title-text" style={{ fontFamily: "MabryProLight" }}>
                <p className='dev-content-text flex flex-col'>
                  <span>Enter the username of the talent</span> <span>you are seeking to recruit.</span>
                  </p>
                </div>
              </section>
              <section className="developer-content-image mt-10">
                <img src={discoverimage1} alt="" ref={devImageOne}/>
              </section>
          </div>
      </section>

      <section id="developer-content">
          <div className='mt-24 overflow-hidden'>
              <section className="developer-content-title opacity-0" ref={devSubTitleTwo}>
                <div className="dev-icon flex gap-2 items-center mb-2" style={{ fontFamily: "MabryProRegular" }}>
                  <div className="dev-image-container">
                    <img src={getIcon} alt="" />
                  </div>  
                  <h3>Get</h3>
                </div>
                <div className="dev-content-title-text" style={{ fontFamily: "MabryProLight" }}>
                  <p className='dev-content-text flex flex-col'>
                    <span>Learn more about the talent whose level of </span>
                    <span>experience aligns with your requirements.</span>
                  </p>
                </div>
              </section>
              <section className="developer-content-image mt-10">
                <img src={discoverimage2} ref={devImageTwo} alt="" />
              </section>
          </div>
      </section>

      <section id="developer-content">
          <div className='mt-24 overflow-hidden'>
              <section className="developer-content-title	opacity-0" ref={devSubTitleThree}>
              <div className="dev-icon flex gap-2 items-center mb-2" style={{ fontFamily: "MabryProRegular" }}>
                  <div className="dev-image-container">
                    <img src={person}  alt="" />
                  </div>  
                  <h3>Find your Candidate</h3>
                </div>
                <div className="dev-content-title-text" style={{ fontFamily: "MabryProLight" }}>
                  <p className='dev-content-text flex flex-col'>
                    <span>Stop settling for mediocre talent. Take action today to </span>
                    <span>find the perfect candidate for your team's success.</span>
                  </p>
                </div>
              </section>
              <section className="developer-content-image mt-10">
                <img src={discoverimage3} ref={devImageThree} alt="" />
              </section>
          </div>
      </section>
    </div>
  )
}

export default Developer