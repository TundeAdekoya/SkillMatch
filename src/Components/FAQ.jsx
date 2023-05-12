import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import '../css/Font.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineArrowDown } from 'react-icons/ai';
import '../css/FAQ.css'


gsap.registerPlugin(ScrollTrigger);
const FAQ = () => {

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

  const [isVisible4, setIsVisible4] = useState(false)
  const linkRef4 = useRef(null);
  const toggleVisibility4 = () => {
      setIsVisible4(!isVisible4)
  }

  let faqTitle = useRef(null)
  let faqText = useRef(null)

  useEffect(() => {

    gsap.timeline()
      .fromTo(faqTitle.current, 
      {scale: 0, opacity:0}, 
      {scale:1, 
        opacity:1,
        ease: "back.out",
        scrollTrigger: {
          trigger: faqTitle.current,
          start: "1px 100%", 
          end: "bottom 1%",
          toggleActions: 'restart pause reverse reset',
          scrub: true,
        } 
      })
      
      gsap.fromTo(faqText.current, 
        {opacity: 0, y:150, }, 
        {opacity:1,
          duration: 5, 
          y:0,
          ease: "back.out",
          scrollTrigger: {
            trigger: faqText.current,
            start: "1px 100%", 
            end: "bottom  60%",
            toggleActions: 'restart pause reverse reset',
            scrub: true,
          } 
        })
      
  }, [])

  return (
    <div id='faq-page' className='overflow-hidden'>
      <section className='faq-page-time' ref={faqTitle}>
        <h2 style={{ fontFamily: "MabryProBold" }}>Frequently Asked Questions</h2>
        <p style={{ fontFamily: "MabryProLight" }}>Answers to questions you have about SkillMatch</p>
      </section>

      <section id="" className='flex text-base	text-left flex-col opacity-0' ref={faqText}>
        <ul className='flex gap-4 flex-col mb-8' style={{ fontFamily: "MabryProBold" }}>
          <div onClick={toggleVisibility1} className='line flex items-center justify-between'>
            <p>What is SkillMatch?</p>
            <div className='cursor-pointer'><AiOutlineArrowDown /></div>
          </div>
          <div 
          className='flex flex-col gap-4 mt-1'
          ref={linkRef1}
          style={{
            height: isVisible1 ? linkRef1.current?.scrollHeight : 0,
            opacity: isVisible1 ? 1 : 0,
            transition: "height 0.5s ease-in-out, opacity 1s ease-in-out",
            overflow: "hidden",
            fontFamily: "MabryProLight"
          }}>
            <p className='slide-down-text' style={{ fontFamily: "MabryProLight" }}>SkillMatch is a pre-employment developer and designer assessment platform that allows companies to hire talent by assessing their hard and soft skills on GitHub, Behance, Dribble and Stack Overflow.</p>
          </div>
        </ul>
              
        <ul className='flex gap-4 flex-col mt-3 mb-8' style={{ fontFamily: "MabryProBold" }}>
          <div onClick={toggleVisibility2} className='line flex items-center justify-between'>
            <p>What fee does SkillMatch Charge?</p>
            <div className='cursor-pointer'><AiOutlineArrowDown /></div>
          </div>
          <div 
          
          className='flex flex-col gap-4 mt-1'
          ref={linkRef2}
          style={{
            height: isVisible2 ? linkRef2.current?.scrollHeight : 0,
            opacity: isVisible2 ? 1 : 0,
            transition: "height 0.7s ease-in-out, opacity 0.7s ease-in-out",
            overflow: "hidden",
             fontFamily: "MabryProLight"
          }}>
            <p className='slide-down-text'>SkillMatch Basic: This is the free membership plan that includes essential features such as profile creation, job search, and access to a limited number of profiles and groups.</p>
            <p className='slide-down-text'>SkillMatch Premium: SkillMatch offers four premium membership plans that offer more advanced features and tools for professionals. These plans include Premium Career, Premium Business, Sales Navigator Professional, and Recruiter Lite. The fees for these plans range from $29.99 to $99.99 per month when billed monthly or $239.88 to $779.88 per year when billed annually.</p>
          </div>
        </ul>

        <ul className='flex gap-4 flex-col mt-3 mb-8' style={{ fontFamily: "MabryProBold" }}>
          <div onClick={toggleVisibility3} className='line flex items-center justify-between'>
          <p>Who can use SkillMatch?</p>
          <div className='cursor-pointer'><AiOutlineArrowDown /></div>
        </div>
        <div 
        
        className='flex flex-col gap-4 mt-1'
        ref={linkRef3}
        style={{
          height: isVisible3 ? linkRef3.current?.scrollHeight : 0,
          opacity: isVisible3 ? 1 : 0,
          transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          overflow: "hidden",
          fontFamily: "MabryProLight"
        }}
        >            
        <p className='slide-down-text'>Engineers: SkillMatch is a popular platform for engineers to rank their skill set using platforms like GitHub and StackOverFlow.</p>
        <p className='slide-down-text'>Designers: SkillMatch is a popular platform for engineers to rank their skill set using platforms like Behance and Dribble</p>
        <p className='slide-down-text'>Recuiters: SkillMatch is a great platform for professionals to look for talent the the tech ecosystem.</p>
        <p className='slide-down-text'>Students and recent graduates: SkillMatch can be a helpful platform for students and recent graduates to build their skills to get job and internship opportunities.</p>
        </div>
      </ul>

      <ul className='flex gap-4 flex-col mt-3 mb-16' style={{ fontFamily: "MabryProBold" }}>
          <div onClick={toggleVisibility4} className='line flex items-center justify-between'>
              <p>Is SkillMatch credible?</p>
              <div className='cursor-pointer'><AiOutlineArrowDown /></div>
            </div>
            <div 
            
            className='flex flex-col gap-4 mt-1'
            ref={linkRef4}
            style={{
              height: isVisible4 ? linkRef4.current?.scrollHeight : 0,
              opacity: isVisible4 ? 1 : 0,
              transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out",
              overflow: "hidden",
               fontFamily: "MabryProLight"
            }}
            >            
            <p className='slide-down-text'>Yes, SkillMatch is generally considered a credible platform for professionals. It has become a go-to site for professionals to showcase their skills and experience.</p>
            </div>
        </ul>
      </section>
    </div>
  )
}

export default FAQ