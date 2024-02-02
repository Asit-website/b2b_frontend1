import React, { useState } from 'react'
const ResetPassword = () => {
    // const [pass,setPass] = useState(false);
    return (
        <>
            <div className='login_pop'>
                <div className="login_container">
                    <div className="construction_head">
                        <h2>Forgot Password</h2>
                    </div>
                    <div className="construction_body const_forg">
                        <p>Generate new password</p>
                        <form>
                            <div className="form_ino">
                                <div className="inp1">
                                    <label htmlFor="">Password</label>
                                    <input type="password" placeholder='Enter password' />
                                </div>

                            </div>
                            <div className="form_ino mt-5">
                                <div className="inp1">
                                    <label htmlFor="">Confirm password</label>
                                    <input type="password" placeholder='Enter confirm password' />
                                </div>

                            </div>
                            <div className="login_btn login_btns">
                                <button type='button' onClick={() => {
                                    // setOtpPop(true);
                                    // setForgot(false)
                                }}>Create Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword
