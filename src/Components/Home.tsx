import React from 'react'
import '../css/Home.css'

import firstImage from '../Assets/jpg/first image.jpg'
import secondImage from '../Assets/jpg/second image.jpg'
import thirdImage from '../Assets/jpg/third image.jpg'
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
import partner8 from '../Assets/svg/partner8.svg'
import abovethefold from '../Assets/svg/abovethefold.svg'
import partner10 from '../Assets/svg/partner10.svg'
import gridlines from '../Assets/svg/gridlines.svg'


const Home = () => {
  return (
    <div id='HomePage'>

      <main id="above-the-fold" className='flex items-center justify-center flex-col my-10'>
        <div className="text-section mb-9">
          <h1 className='flex flex-col'>levelling the playing <span> field for <b>Techies</b></span></h1>
        </div>
        <button>Be among the first, it’s free</button>
      </main>

     <section id="home-page-image-section">
            <img src={abovethefold} alt="" />
      </section> 

      <section className="position-relative partner-container d-none d-sm-block">
        <div className="partner flex place-content-around">
          <img className='' src={partner1} alt="" />
          <img className='' src={partner2} alt="" />
          <img className='' src={partner3} alt="" />
          <img className='' src={partner4} alt="" />
          <img className='' src={partner5} alt="" />
          <img className='' src={partner6} alt="" />
          <img className='' src={partner7} alt="" />
          <img className='' src={partner8} alt="" />
        </div>
        <div className="partner partner2 flex place-content-around">
          <img className='' src={partner1} alt="" />
          <img className='' src={partner2} alt="" />
          <img className='' src={partner3} alt="" />
          <img className='' src={partner4} alt="" />
          <img className='' src={partner5} alt="" />
          <img className='' src={partner6} alt="" />
          <img className='' src={partner7} alt="" />
          <img className='' src={partner8} alt="" />
        </div>
      </section>

      <section id="below-the-fold" className='flex flex-col justify-center items-center'>
        <div className="below-the-fold-text mx-auto">
          <h2 className='flex flex-col font-semibold'>
            <span className=''>Prove ownership of your GitHub, Behance,</span>
            <span className=''>Dribble and Stack Overflow profile and check</span>  
            <span className='mb-6'>your ranking against other talents for free.</span>
          </h2>
        </div>
        <div className="below-the-fold-image flex gap-6 justify-center items-center">
          <img src={belowthefoldimage1} alt="" />
          <img src={belowthefoldimage2} alt="" />
          <img src={belowthefoldimage3} alt="" />
          <img src={belowthefoldimage4} alt="" />
        </div>
      </section>

    </div>
  )
}

export default Home