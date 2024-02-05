import React,{useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useNavigate } from 'react-router-dom';
import { useMain } from '../hooks/useMain';
const LoginPopup = ({setSignupPop,setPop,setForgot,notify}) => {
    const {login,setUser} = useMain();
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ans = await login(value);
        console.log(ans);
        // console.log(ans.)
        notify(ans.status, ans.message);
        if (ans.status) {
            setUser(ans.user);
            localStorage.setItem('b2b_user', JSON.stringify(ans.user));
            localStorage.setItem('b2b_token', JSON.stringify({
                token: ans.token,
                rememberMe: document.getElementById('remember').checked,
                expiry: new Date().getTime() + 24 * 60 * 60 * 1000 // 1 Day
            }));
            
            if (ans.user.role === 'ADMIN') {
                navigate('/');
                setPop(false);
            }
            else {
                navigate('/');
                setPop(false);
            }
        }
    }
    return (
        <>
        <div className='login_pop'>
            <div className="login_container">
                <OutsideClickHandler
                   onOutsideClick={()=>{
                      setPop(false);
                   }}
                >
                <div>
                <div className="construction_head">
                    <h2>Construction  Login</h2>
                </div>
                <div className="construction_body">
                    <form onSubmit={handleSubmit}>
                        <div className="form_ino">
                            <div className="inp1">
                                <label htmlFor="email">Email</label>
                                <input id='email' value={value.email} name='email' onChange={handleChange} type="email"  placeholder='Email Address' />
                            </div>
                            <div className="inp2">
                                <label htmlFor="password">Password</label>
                                <input value={value.password} id='password' name='password' onChange={handleChange} type="Password" placeholder='Password' />
                            </div>
                        </div>
                        <div className="keep_sign">
                            <input id="remember" type="checkbox" />
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
                        }} className="forgot_pass cursor-pointer">
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
                </OutsideClickHandler>
            </div>
        </div>
        </>
    )
}

export default LoginPopup
