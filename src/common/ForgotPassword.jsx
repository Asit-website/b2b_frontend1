import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
const ForgotPassword = ({setOtpPop,setForgot}) => {
  return (
   <>
        <div className='login_pop'>
            <div className="login_container">
                <OutsideClickHandler
                   onOutsideClick={()=>{
                      setForgot(false)
                   }}
                >
                <div>
                <div className="construction_head">
                    <h2>Reset Password</h2>
                </div>
                <div className="construction_body const_forg">
                    <p>Enter your email address to receive a password <br /> reset link</p>
                    <form>
                        <div className="form_ino">
                            <div className="inp1">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Email Address' />
                            </div>
                        </div>
                        <div className="login_btn login_btns">
                            <button type='button' onClick={()=> {
                                setOtpPop(true);
                                setForgot(false)
                                }}>Send Password Reset Link</button>
                        </div>
                    </form>
                </div>
                </div>
                </OutsideClickHandler>
            </div>
        </div>
   </>
  )
}

export default ForgotPassword
