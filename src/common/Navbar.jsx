import React from 'react'
import LoginPopup from './LoginPopup';
import SignupPop from './SignupPop';
import ForgotPassword from './ForgotPassword';
import loho from '../image/loho.svg';
import Otp from './Otp';
import ResetPassword from './ResetPassword';
const Navbar = ({pop,setPop,signupPop,setSignupPop,forgot,setForgot,otpPop,setOtpPop,reset,setReset}) => {

  return (
    <>
      <div className="header">
        <header className='head'>
          <div className="header1">
            <form>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.94725 16.9995C13.3364 16.9995 16.8945 13.4179 16.8945 8.99975C16.8945 4.58161 13.3364 1 8.94725 1C4.55811 1 1 4.58161 1 8.99975C1 13.4179 4.55811 16.9995 8.94725 16.9995Z" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.8813 18.9998L14.5599 14.6499" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <input
                  type="search"
                  // id="default-search"
                  className="block p-4 ps-12 inp_bg "
                  placeholder="SEARCH"
                  required=""
                />

              </div>
            </form>

          </div>
          <div className="header2">
            <div className="btn_auth">
              <button onClick={()=> setPop(true)} className='login'>Log in</button>
              <button onClick={()=> setSignupPop(true)} className='signup'>Sign up</button>
            </div>
          </div>
        </header>
      </div>
      <div className="navbar">
         <nav className='nav'>
               <div className="nav1">
                   <div className="logo">
                       <img src={loho} alt="loho" />
                   </div>
               </div>
               <div className="nav2">
                  <div className="ul">
                       <ul>
                          <li><a href="">Services</a></li>
                          <li><a href="">Manufacturers</a></li>
                          <li><a href="">Projects</a></li>
                          <li><a href="">Budgeting</a></li>
                          <li><a href="">Subscription</a></li>
                          <li><a href="">Bidding</a></li>
                          <li><a href="">About Us</a></li>
                       </ul>
                  </div>
               </div>
         </nav>
      </div>
      {
        pop && <LoginPopup 
        pop={pop} 
        setPop={setPop} 
        signupPop={signupPop} 
        setSignupPop={setSignupPop}
        setForgot={setForgot}
        />
      }
      {
        signupPop && <SignupPop pop={pop} setPop={setPop} signupPop={signupPop} setSignupPop={setSignupPop}/>
      }
      {
        forgot && <ForgotPassword setOtpPop={setOtpPop} setForgot={setForgot}/>
      }
      {
        otpPop && <Otp reset={reset} setReset={setReset} setOtpPop={setOtpPop}/>
      }
      {
        reset && <ResetPassword/>
      }
    </>
  )
}

export default Navbar
