import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { useMain } from '../hooks/useMain';
import { useNavigate } from 'react-router-dom';
const ResetPassword = ({setReset,notify}) => {
    const {changePassword} = useMain();


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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (value.password === value.password1) {
            const ans = await changePassword({ email: JSON.parse(localStorage.getItem('b-reset')).email, password: value.password });
            console.log(ans);

            if (ans.status) {
                notify(ans.status, ans.message);
                navigate("/");
                setReset(false);
            }
            else {
                notify(ans.status, ans.message);
            }
        }
        else {
            notify(false, "Password and confirm password must be same!");
        }
    };
    // const [pass,setPass] = useState(false);
    return (
        <>
            <div className='login_pop'>
                <div className="login_container">
                    <OutsideClickHandler
                      onOutsideClick={()=>{
                        setReset(false);
                      }}
                    >
                    <div>
                    <div className="construction_head">
                        <h2>Forgot Password</h2>
                    </div>
                    <div className="construction_body const_forg">
                        <p>Generate new password</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form_ino">
                                <div className="inp1">
                                    <label htmlFor="password">Password</label>
                                    <input value={value.password} name='password' onChange={handleChange} id='password' type="password" placeholder='Enter password' />
                                </div>

                            </div>
                            <div className="form_ino mt-5">
                                <div className="inp1">
                                    <label htmlFor="">Confirm password</label>
                                    <input value={value.password1} name='password1' id='password1' onChange={handleChange} type="password" placeholder='Enter confirm password' />
                                </div>

                            </div>
                            <div className="login_btn login_btns">
                                <button type='submit'>Create Password</button>
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

export default ResetPassword
