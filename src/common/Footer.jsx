import React from 'react'
import tus from '../image/tus.svg';
import vector from '../image/Vector.svg'
import vect1 from '../image/vect1.svg'
import vect2 from '../image/vect2.svg'
import { NavLink } from 'react-router-dom';
const Footer = ({adjustFirst = false}) => {
  return (
    <>

      <div className={`main_foot`}>
        <div className={`footer  `}>

          <footer className={`foot `}>
            <div className={`${adjustFirst? "adjustFooter":"foot_flex "}`}>
              <div className="first_flex">
                <div className="imn">
                  <img src={tus} alt="tus" />
                  <div className="tus_para">
                    <p>4517 Washington Ave. Manchester,</p>
                    <p>Kentucky 39495</p>
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
                    <img src={vector} alt="" />
                  </div>
                  <div className="svgs">
                    <img src={vect1} alt="" />
                  </div>
                  <div className="svgs">
                    <img src={vect2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </footer>
          
        </div>
      </div>

      <div className={`lower_footer `}>
        
         <div className={`lower_sect ${adjustFirst? "adjustFooter2":"lower_sect"}`}>
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
