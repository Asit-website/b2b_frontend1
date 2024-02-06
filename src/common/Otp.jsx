import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useMain } from '../hooks/useMain';
const Otp = ({ setReset,setOtpPop,notify }) => {
    const {sendOtp, submitOtp} = useMain();

    const resend = async () => {
        let ans = await sendOtp({ email: JSON.parse(localStorage.getItem('b-reset')).email });
        console.log(ans);
        if (ans.status) {
            localStorage.setItem('b-reset', JSON.stringify({ email: JSON.parse(localStorage.getItem('b-reset')).email, otp: ans.otp }));
            notify(ans.status, ans.message);
        }
        else {
            notify(ans.status, ans.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let otp1='';
        let b1 = document.querySelectorAll('.inp11');
        for(let i of b1)
        {
            otp1+=i.children[0].value;
        }

        const ans = await submitOtp({ otp: JSON.parse(localStorage.getItem('b-reset')).otp, otp1 });
        console.log(ans);

        if (ans.status) {
            notify(ans.status, ans.message);
            setReset(true);
            setOtpPop(false);
            // navigate("/reset-password");
        }
        else {
            notify(ans.status, ans.message);
        }
    };
    return (
        <>
            <div className='login_pop'>
                <div className="login_container">
                    <OutsideClickHandler
                      onOutsideClick={()=>{
                        setOtpPop(false);
                      }}
                    >
                    <div>
                    <div className="construction_head">
                        <h2>Check your email</h2>
                    </div>
                    <div className="construction_body const_forg">
                        <p>We’ve sent a code to <span>{JSON.parse(localStorage.getItem('b-reset'))?.email}</span></p>
                        <form onSubmit={handleSubmit}>
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
                                <button>Verify</button>
                            </div>
                            <div className="didnt">
                                  <p>Didn't get a code <span className='cursor-pointer' onClick={resend}>Click to resend</span></p>
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

export default Otp
