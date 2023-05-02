import React from 'react'
import '../css/Developer.css'
import searchIcon from '../Assets/svg/searchIcon.svg'
import getIcon from '../Assets/svg/getIcon.svg'

import discoverimage1 from '../Assets/svg/discoverImage1.svg'
import discoverimage2 from '../Assets/svg/discoverImage2.svg'
import discoverimage3 from '../Assets/svg/discoverImage3.svg'



const Developer = () => {
  return (
    <div id='developer' className='flex items-center justify-center flex-col mt-20'>
      <section id="developer-title">
        <h2>Discover your techie.</h2>
      </section>

      <section id="developer-content">
          <div className='mt-16'>
              <section className="developer-content-title">
                <div className="dev-icon flex gap-2 items-center mb-2 ">
                  <div className="dev-image-container">
                   <img src={searchIcon} alt="" />
                  </div>
                  <h3>Search</h3>
                </div>
                <div className="dev-content-title-text">
                <p className='flex flex-col'>
                  <span>Enter the username of the talent</span> <span>you are seeking to recruit.</span>
                  </p>
                </div>
              </section>
              <section className="developer-content-image mt-10">
                <img src={discoverimage1} alt="" />
              </section>
          </div>
      </section>

      <section id="developer-content">
          <div className='mt-24'>
              <section className="developer-content-title">
                <div className="dev-icon flex gap-2 items-center mb-2">
                  <div className="dev-image-container">
                    <img src={getIcon} alt="" />
                  </div>  
                  <h3>Get</h3>
                </div>
                <div className="dev-content-title-text">
                  <p className='flex flex-col'>
                    <span>Learn more about the talent whose level of </span>
                    <span>experience aligns with your requirements.</span>
                  </p>
                </div>
              </section>
              <section className="developer-content-image mt-10">
                <img src={discoverimage2} alt="" />
              </section>
          </div>
      </section>

      <section id="developer-content">
          <div className='mt-24'>
              <section className="developer-content-title	">
                <div className="dev-icon dev-text-3">
                  <h3>Find Your Candidate</h3>
                </div>
              </section>
              <section className="developer-content-image mt-10">
                <img src={discoverimage3} alt="" />
              </section>
          </div>
      </section>
    </div>
  )
}

export default Developer