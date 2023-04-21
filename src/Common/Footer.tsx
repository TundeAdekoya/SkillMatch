import React from 'react'
import '../css/Footer.css'
import whiteIcon from '../Assets/logoIcon.svg'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div id='footer'>
      <div id="topFooter">
        <div className="topFooterSubSection">
          <h3>Find techies easily</h3>
          <div className="subscribeInput">
            <form action="">
              <input type="email" name="" id="" placeholder='Enter email'/>
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
        <div id="toFooterLinkSecrion">
              <ul>
                <li>SkillMatch</li>
                <li>Developer</li>
                <li>Product</li>
                <li>About</li>
                <li>FAQ</li>
              </ul>
              
              <ul>
                <li>Developers</li>
                <li>How - to - SkillMatch</li>
                <li>Partners</li>
              </ul>

              <ul>
                <li>Contact</li>
                <li>Email</li>
              </ul>
        </div>
      </div>
      <div id="bottomFooter">
        <div className='text'>
          <p>@SkillMatch</p>
          <p>{year}</p>
        </div>
          <img src={whiteIcon} alt="" />
      </div>
    </div>
  )
}

export default Footer