import React from 'react'

const SignupPop = ({setSignupPop,setPop}) => {
  return (
   <>
      <div className='login_pop'>
            <div className="login_container">
                <div className="construction_head">
                    <h2>Construction  Sign Up</h2>
                </div>
                <div className="construction_body">
                    <form>
                        <div className="form_ino">
                            <div className="inp1">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder='Username' />
                            </div>
                            <div className="inp2">
                                <label htmlFor="">Email</label>
                                <input type="Password" placeholder='Email' />
                            </div>
                        </div>
                        <div className="form_ino form_ino1">
                            <div className="inp1">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder='Password' />
                            </div>
                            <div className="inp2">
                                <label htmlFor="">Password</label>
                                <input type="Password" placeholder='Repeat Password' />
                            </div>
                        </div>
                        <div className="login_btn">
                            <button>Create account</button>
                        </div>
                        <div className="continue_google">
                            <div className='try'>Continue with Google</div>
                        </div>
                        <div className="join_now">
                            <p>Don't have an account yet? </p>
                            <div className="join_n">
                                <span className='cursor-pointer' onClick={()=>{
                                   setSignupPop(false);
                                   setPop(true);
                                }}>Login Now</span>
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

export default SignupPop
