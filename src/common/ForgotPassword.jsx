import React,{useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useMain } from '../hooks/useMain';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = ({setOtpPop,setForgot,notify}) => {
    const {sendOtp} = useMain()
    const navigate = useNavigate();

    const [value, setValue] = useState({
        email: '',
        otp: '',
        password: '',
        password1: ''
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const send = async (e) => {
        e.preventDefault();

        let ans = await sendOtp({ email: value.email });
        console.log(ans);
        console.log(ans.status);
        if (ans.status) {
            localStorage.setItem('b-reset', JSON.stringify({ email: value.email, otp: ans.otp }));
            notify(ans.status, ans.message);
            // navigate('/getOtp');
            setOtpPop(true);
            setForgot(false);
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
                      setForgot(false)
                   }}
                >
                <div>
                <div className="construction_head">
                    <h2>Reset Password</h2>
                </div>
                <div className="construction_body const_forg">
                    <p>Enter your email address to receive a password <br /> reset link</p>
                    <form onSubmit={send}>
                        <div className="form_ino">
                            <div className="inp1">
                                <label htmlFor="email">Email</label>
                                <input id='email' onChange={handleChange} value={value.email} name='email' type="email" placeholder='Email Address' />
                            </div>
                        </div>
                        <div className="login_btn login_btns">
                            <button type='submit'>Send Password Reset Link</button>
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
