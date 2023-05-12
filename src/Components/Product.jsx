import {React, useEffect, useRef} from 'react'
import '../css/Product.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Product = () => {
  let topLeft = useRef(null)
  let topRight = useRef(null)
  let bottomLeft = useRef(null)
  let bottomRight = useRef(null)

  useEffect(() => {
      gsap.timeline()
        .fromTo(topLeft.current, {
           opacity:0, xPercent:-80}, 
          {
            duration:5,
             xPercent:0,
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: topLeft.current,
              start: "1px 100%", 
              end: "bottom 90%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

        .fromTo(topRight.current, {
           opacity:0, xPercent:80}, 
          {
            duration:5,
             xPercent:0,
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: topRight.current,
              start: "1px 100%", 
              end: "bottom 90%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

        .fromTo(bottomLeft.current, {
           opacity:0, xPercent:-80}, 
          {
            duration:5,
             xPercent:0,
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: bottomLeft.current,
              start: "1px 100%", 
              end: "bottom 90%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

        .fromTo(bottomRight.current, {
           opacity:0, xPercent:80}, 
          {
            duration:5,
             xPercent:0,
            opacity:1,
            ease: "back.out",
            scrollTrigger: {
              trigger: bottomRight.current,
              start: "1px 100%", 
              end: "bottom 90%",
              toggleActions: 'restart pause reverse reset',
              scrub: true,
            } 
          })

    }, [])
  
  return (
    <div id='product' className='flex flex-col gap-3 items-center justify-between overflow-hidden' >

      <div className="product-container flex gap-3">
        <section className="green flex items-center justify-center" ref={topLeft}>
          <div className="product-text">
            <h1 style={{ fontFamily: "MabryProBlack" }}>50<span>+</span></h1>
            <h3 style={{ fontFamily: "MabryProRegular" }}>Designer Profiles processed</h3>
          </div>
        </section>
        <section className="cyan flex items-center justify-center" ref={topRight}>
          <div className="product-text">
              <h1 style={{ fontFamily: "MabryProBlack" }}>50<span>+</span></h1>
              <h3 style={{ fontFamily: "MabryProRegular" }}>Developer Profiles processed</h3>
            </div>
        </section>
      </div>

      <div className="product-container flex gap-3">
        <section className="blue flex items-center justify-center" ref={bottomLeft}>
          <div className="product-text">
              <h1 style={{ fontFamily: "MabryProBlack" }}>60<span>+</span></h1>
              <h3 style={{ fontFamily: "MabryProRegular" }}>Happy users</h3>
          </div>
        </section>
        <section className="purple flex items-center justify-center"  ref={bottomRight}>
          <div className="product-text">
              <h1 style={{ fontFamily: "MabryProBlack" }}>3<span>secs</span></h1>
              <h3 style={{ fontFamily: "MabryProRegular" }}>API processing</h3>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Product