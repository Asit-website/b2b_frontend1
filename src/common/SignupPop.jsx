import React,{useEffect, useState} from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import {useMain} from '../hooks/useMain'
import { useNavigate } from 'react-router-dom';
import {GoogleLogin} from "react-google-login"
import { gapi } from 'gapi-script';



const SignupPop = ({ setSignupPop, setPop,notify }) => {

    const clientId = "82634085693-2q0v1o04veu5bb0nj59jgujrvod8rggi.apps.googleusercontent.com";


    const navigate = useNavigate();
    const { register,setUser } = useMain();

    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
        categoryies:''
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ans = await register(value);
        console.log("ans" , ans);
        notify(ans.status, ans.message);
      
        if (ans.status) {
            setUser(ans.user);
            localStorage.setItem('b2b_user', JSON.stringify(ans?.data));
            // localStorage.setItem('b2b_token', ans.token);
            // navigate("/");
            setPop(true)
            setSignupPop(false);
        }
    }


    const onSuccess = (res)=>{
        console.log("login succes" , res.profileObj);
    }

    const onFailure = (res)=>{
        console.log("fail" ,res);
    }

  

    return (
        <>
            <div className='login_pop'>
                <div className="login_container">
                    <OutsideClickHandler onOutsideClick={() => {
                        setSignupPop(false);
                    }}>
                        <div>
                            <div className="construction_head">
                                <h2>Construction  Sign Up</h2>
                            </div>
                            <div className="construction_body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form_ino">
                                        <div className="inp1">
                                            <label htmlFor="name">Username</label>
                                            <input name='name' id='name' onChange={handleChange} type="text" value={value.name} placeholder='Username' />
                                        </div>
                                        <div className="inp2">
                                            <label htmlFor="">Email</label>
                                            <input onChange={handleChange} value={value.email} type="email" placeholder='Email' id='email' name='email' />
                                        </div>
                                    </div>
                                    <div className="form_ino form_ino1">
                                        <div className="inp1">
                                            <label htmlFor="password">Password</label>
                                            <input id='password' name='password' onChange={handleChange} type="password" placeholder='Password' value={value.password} />
                                        </div>
                                        <div className="inp2">
                                            <label htmlFor="confirmPassword">Password</label>
                                            <input name='confirmPassword' onChange={handleChange} id='confirmPassword' value={value.confirmPassword} type="Password" placeholder='Repeat Password' />
                                        </div>
                                    </div>
                                    <div className="form_ino form_ino1">
                                        <div className="inp1">
                                            <label htmlFor="categoryies">Category</label>
                                            <select name="categoryies" id="categoryies" onChange={handleChange} value={value.categoryies}>
                                              
                                            
                                                <option>Civil contractors</option>
                                                <option>Architects</option>
                                                <option>Consulting Engineers</option>
                                                <option>Interior Designers</option>
                                                <option>Fense</option>
                                                <option>Main Contractors</option>
                                                <option>Hauling & Excavating</option>
                                                <option>Main contractors</option>
                                                <option>Hauling & excavating</option>
                                                <option>Structural contractors</option>
                                                <option>Masonry</option>
                                                <option>Carpenters</option>
                                                <option>Concrete pouring</option>
                                                <option>Mechanical contractors</option>
                                                <option>Electrical contractors</option>
                                                <option>Plumbing contractors</option>
                                                <option>Fire protection</option>
                                                <option>Roofing contractors</option>
                                                <option>Painting contractors</option>
                                                <option>Glass works</option>
                                                <option>Drainage contractors</option>
                                                <option>Garden /Lawn works</option>
                                                <option>Wall /Ceiling</option>
                                                <option>Insulation</option>
                                                <option>Realtors</option>
                                                <option>Lenders</option>
                                                <option>Investors</option>
                                                <option>Owners</option>
                                               

                                            </select>
                                        </div>
                                    </div>
                                    <div className="login_btn">
                                        <button type='submit'>Create account</button>
                                    </div>
                                    <div   className="continue_google">
                                        <div className='try'>
                                            {/* Continue with Google */}
                                        <GoogleLogin 
                                        clientId={clientId}
                                        buttonText='Signup'
                                        onSuccess={onSuccess}
                                        onFailure={onFailure}
                                        cookiePolicy='single_host_origin'
                                        isSignedIn = {true}
                                        />

                                        </div>
                                    </div>
                                    <div className="join_now">
                                        <p>Don't have an account yet? </p>
                                        <div className="join_n">
                                            <span className='cursor-pointer' onClick={() => {
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
                    </OutsideClickHandler>
                </div>
            </div>
        </>
    )
}

export default SignupPop
