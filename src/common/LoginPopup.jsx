import React from 'react'

const LoginPopup = ({setSignupPop,setPop,setForgot}) => {
    return (
        <>
        <div className='login_pop'>
            <div className="login_container">
                <div className="construction_head">
                    <h2>Construction  Login</h2>
                </div>
                <div className="construction_body">
                    <form>
                        <div className="form_ino">
                            <div className="inp1">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div className="inp2">
                                <label htmlFor="">Password</label>
                                <input type="Password" placeholder='Password' />
                            </div>
                        </div>
                        <div className="keep_sign">
                            <input type="checkbox" />
                            <p>Keep me signed in</p>
                        </div>
                        <div className="login_btn">
                            <button>Log In</button>
                        </div>
                        <div className="continue_google">
                            <div className='try'>Continue with Google</div>
                        </div>
                        <div onClick={()=>{
                            setForgot(true);
                            setPop(false);
                        }} className="forgot_pass">
                            <p>Forgot your password?</p>
                        </div>

                        <div className="join_now">
                            <p>Don't have an account yet? </p>
                            <div className="join_n ">
                                <span className='cursor-pointer' onClick={()=> {
                                    setPop(false);
                                    setSignupPop(true);
                                }}>Join Now</span>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13L7 7L1 1" stroke="#596080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPopup
