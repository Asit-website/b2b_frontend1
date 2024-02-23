import React from 'react'
import tus from '../image/tus.svg';
import vector from '../image/Vector.svg'
import vect1 from '../image/vect1.svg'
import vect2 from '../image/vect2.svg'
import { NavLink } from 'react-router-dom';
const Footer = ({ adjustFirst = false }) => {
  return (
    <>

      <div className={`main_foot`}>
        <div className={`footer  `}>

          <footer className={`foot `}>
            <div className={`${adjustFirst ? "adjustFooter" : "foot_flex "}`}>
              <div className="first_flex">
                <div className="imn">
                  <img src={tus} alt="tus" />
                  <div className="tus_para">
                    <p>Address: 539 W. Commerce Street,</p>
                    <p>Suite 4542, Dallas TX 75208</p>
                  </div>
                </div>
              </div>
              <div className="second_flex">
                <h3>About</h3>
                <div className="second_para">
                  <p>For Owners</p>
                  <p>Careers</p>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className="third_flex">
                <h3>Company</h3>
                <div className="third_para">
                  <p>Browse all services</p>
                  <p>Get Listed</p>
                  <p>Help Center</p>
                </div>
              </div>
              <div className="fourth_flex">
                <h3>Get in touch</h3>
                <div className="social_links">
                  <div className="svgs">
                    <a target='_blank' href="https://twitter.com/BuildlinkNetwok"><img src={vector} alt="" /></a>
                  </div>
                  <div className="svgs">
                    <a target='_blank' href="https://facebook.com/buildlinknetworks"><img src={vect1} alt="" /></a>
                  </div>
                  <div className="svgs">
                    <a target='_blank' href="https://www.facebook.com/buildlinknetworks"><img src={vect2} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>

      <div className={`lower_footer `}>

        <div className={`lower_sect ${adjustFirst ? "adjustFooter2" : "lower_sect"}`}>
          <div className="lower_sect1">
            <span>2024 © BuildLink Network. All rights reserved.</span>
          </div>
          <div className="lower_sect2">
            <div className="item1">
              <NavLink to="/terms"><p>Terms of Services</p></NavLink>
            </div>

          </div>
          <div className="lower_sect3">
            <div className="item2">
              <NavLink to="/privacy"><p>Privacy Policy</p></NavLink>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
