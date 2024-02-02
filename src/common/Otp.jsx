import React from 'react'

const Otp = ({ setReset,setOtpPop }) => {
    return (
        <>
            <div className='login_pop'>
                <div className="login_container">
                    <div className="construction_head">
                        <h2>Check your email</h2>
                    </div>
                    <div className="construction_body const_forg">
                        <p>We’ve sent a code to <span>asitmandal492@gmail.com</span></p>
                        <form>
                            <div className="form_ino">
                                <div className="inp1 inp11">

                                    <input type="text" maxLength="1" />
                                </div>
                                <div className="inp1 inp11">

                                    <input type="text" maxLength="1" />
                                </div>
                                <div className="inp1 inp11">

                                    <input type="text" maxLength="1" />
                                </div>
                                <div className="inp1 inp11">

                                    <input type="text" maxLength="1" />
                                </div>
                            </div>
                            <div className="login_btn login_btns">
                                <button type='button' onClick={() => {
                                    setReset(true);
                                    setOtpPop(false);
                                }}>Verify</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp
