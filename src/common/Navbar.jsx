import React, { useState } from 'react'
import LoginPopup from './LoginPopup';
import SignupPop from './SignupPop';
import ForgotPassword from './ForgotPassword';
import loho from '../image/loho.svg';
import Otp from './Otp';
import ResetPassword from './ResetPassword';
import ust from '../image/ust.svg'
import trick from '../image/trick.svg';
import trick1 from '../image/trick1.svg';
import trick2 from '../image/trick2.svg';
import trick3 from '../image/trick3.svg';
import trick4 from '../image/trick4.svg';
import trick5 from '../image/trick5.svg';
import trick6 from '../image/trick6.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import Avatar from 'react-avatar';
import { IoReorderThreeOutline } from "react-icons/io5";
import fr from '../image/fr.svg'
const navItems = [
  "Services","Manufacturers","Projects","Budgeting","Subscription","Bidding","About Us"
]

const Navbar = ({ pop, setPop, signupPop, setSignupPop, forgot, setForgot, otpPop, setOtpPop, reset, setReset, notify , showNavbar , setShowNavbar , userImage }) => {


  let user = JSON?.parse(localStorage?.getItem('b2b_user')) ? JSON.parse(localStorage.getItem("b2b_user")):null;

  const [click, setClick] = useState(false);
  const styleClick = {
    display: click ? "block" : "none"
  }

  const navigate = useNavigate();

 
  // const styleAvatar = {
  //   background:"linear-gradient(90deg, #3C716A 0%, #4F9C8E 100%)"
  // }
  
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
            {
             localStorage.getItem('b2b_token') ?
                  <OutsideClickHandler
                    onOutsideClick={()=>{
                       setClick(false)
                    }}
                  >
                <div>
                  <div onClick={()=> setClick(!click)} className='test_user flex items-center'>
                    <div className="user_icon">
                      <img src={ust} alt="ust" />
                    </div>
                    <div className="user_para">
                      <p className='ml-2'>{user?.name}</p>
                    </div>


                  </div>
                  <div
                    style={styleClick}
                    id="dropdown"
                    className=" hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  dropThing"
                  >
                    
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200 ul_res"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <div className='user_avatar'>
                            <div className='user_am'>
                                <div className="icons">
                                    {/* <p>AM</p> */}
                                    {
                                      userImage ? <img className='userImage' src={userImage} alt="" /> :
                                    <Avatar  name={user?.name} size='51px' round={true} textSizeRatio={2} />
                                    }
                                </div>
                            </div>
                            <div className="user_info">
                                 <div className="tright">
                                     <h3>{user?.name}</h3>
                                     <p className='mt-2'>{user?.email}</p>
                                 </div>
                            </div>
                      </div>
                      <div className='mt-4'>
                      <li>
                        <NavLink
                          onClick={()=> setClick(false)}
                          to="/Dashboard"
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <img src={trick} alt="trick" />
                          <span className='ml-2'>Dashboard</span>
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        > 
                          <img src={trick1} alt="" />
                          <span className='ml-2'>My Projects</span> 
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <img src={trick2} alt="" />
                         <span className='ml-2'>Shortlist</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                         <img src={trick3} alt="trick3" />
                        <span className='ml-2'>My Messages</span> 
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <img src={trick4} alt="" />
                         <span className='ml-2'>Reviews</span> 
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <img src={trick5} alt="" />
                          <span className='ml-2'>Upgrade Plan</span> 
                        </a>
                      </li>
                      <hr />
                      <li>
                        <a
                          className="block px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                          onClick={()=>{
                            localStorage.removeItem('b2b_user');
                            localStorage.removeItem('b2b_token');
                            navigate('/');
                            // setPop(true);
                            notify("success","Logout successfully");
                            setClick(false);
                          }}
                        >
                        <img src={trick6} alt="" />
                         <span className='ml-2'>Logout</span> 
                        </a>
                      </li>
                      </div>
                    </ul>
                  </div>

                </div>
                  </OutsideClickHandler>
                : <div className="btn_auth">
                  <button onClick={() => setPop(true)} className='login'>Log in</button>
                  <button onClick={() => setSignupPop(true)} className='signup'>Sign up</button>
                </div>
            }

          </div>
        </header>


      </div>

      
      <div className="navbar">
        <nav className='nav'>

          <div className="nav1">
            <div className="logo">
              <img src={fr} alt="loho" />
            </div>
          </div>

          <div className="nav2">

            <div className="ul">

              <ul>
                <li><a href="">Services</a></li>
                <li><a href="">Manufacturers</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Budgeting</a></li>
                <li><NavLink to="/pricing">Subscription</NavLink></li>
                <li><a href="">Bidding</a></li>
                <li><NavLink to="/about">About Us</NavLink></li>
              </ul>



            </div>
            
          </div>

          <div className='threeline'>
              <IoReorderThreeOutline onClick={()=>setShowNavbar((prev)=>!prev)} className='lineIcons' />
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
          notify={notify}
        />
      }
      {

        signupPop && <SignupPop pop={pop} setPop={setPop} signupPop={signupPop} setSignupPop={setSignupPop} notify={notify} />
      }
      {
        forgot && <ForgotPassword setOtpPop={setOtpPop} setForgot={setForgot} notify={notify} />
      }
      {
        otpPop && <Otp reset={reset} setReset={setReset} setOtpPop={setOtpPop} notify={notify} />
      }
      {
        reset && <ResetPassword setReset={setReset} notify={notify} />
      }

 {
  showNavbar && 
  <div className='showNavWrap'>

            {
              navItems?.map((item, index)=>(
                <p key={index}>{item}</p>
              ))
            }

  </div>
 }

    </>
  )
}

export default Navbar
