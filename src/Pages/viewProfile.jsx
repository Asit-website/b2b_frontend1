import React from 'react'
import Sidebar from '../common/Sidebar'
import Footer from '../common/Footer'
import tutor from '../image/tutor.png';
import { NavLink } from 'react-router-dom';
const viewProfile = ({userImage}) => {
    let user = JSON?.parse(localStorage.getItem("b2b_user"));
    return (
        <>

            <div className="myPersonal yyy">
                <Sidebar />
                <div className="persInfoWrap">
                    <div className="persInfoCont sss">
                        <div className='tier'>
                            <div className="persInfo tyio">
                                <h2>My Profile</h2>
                                <hr />

                                <div className="avatar_section">
                                    <div className="left_avatar">
                                        
                                        <img className='rafi' src={userImage ? userImage : tutor} alt="" />
                                        <h3>{user?.name}</h3>
                                    </div>
                                    <div className="right_avatar">
                                        <NavLink to="/personalInformation"><button className="eidtProfile"><span>Edit Profile</span></button></NavLink>

                                    </div>
                                </div>
                                <hr />
                                <div className='strict'>
                                    <h3>Personal Information</h3>
                                    <div className="nameo mt-6">
                                        <div className="name">
                                            <h3>Name</h3>
                                            <p>{user?.name}</p>
                                        </div>
                                        <div className="name">
                                            <h3>Phone Number</h3>
                                            <p>{user?.phone}</p>
                                        </div>
                                        <div className="name">
                                            <h3>Email Id</h3>
                                            <p>{user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                                <div className='strict'>
                                    <h3>About</h3>
                                    <div className="nameo mt-6">
                                        <div className="name">
                                            <h3>Service</h3>
                                            <p>{user?.categoryies}</p>
                                        </div>
                                        <div className="name">
                                            <h3>Website</h3>
                                            <p>{user?.website}</p>
                                        </div>


                                    </div>
                                    <div className="nameo mt-6">
                                        <div className="name">
                                            <h3>Budget</h3>
                                            <p>${user?.budget}</p>
                                        </div>
                                        <div className="name">
                                            <h3>City</h3>
                                            <p>${user?.city}</p>
                                        </div>

                                    </div>
                                    <div className="nameo mt-6">
                                        <div className="name">
                                            <h3>Location</h3>
                                            <p>{user?.location}</p>
                                        </div>
                                        <div className="name">
                                            <h3>About Company</h3>
                                            <p>{user?.aboutCompany}</p>
                                        </div>

                                    </div>
                                </div>

                                <hr />
                                <div className='strict'>
                                    <h3>Personal Information</h3>
                                    <div className="nameo mt-6">
                                        <div className="name">
                                            <h3>Twitter</h3>
                                           <a target='_blank' href={user?.twiter}><p>{user?.twiter}</p></a>
                                        </div>
                                        <div className="name">
                                            <h3>Facebook</h3>
                                           <a href={user?.facebook}><p>{user?.facebook}</p></a>
                                        </div>

                                    </div>
                                    <div className="nameo mt-6">
                                        <div className="name">
                                            <h3>Linkedin</h3>
                                           <a href={user?.linkdin}><p>{user?.linkdin}</p></a>
                                        </div>
                                        <div className="name">
                                            <h3>Instagram</h3>
                                           <a href={user?.insta}><p>{user?.insta}</p></a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer adjustFirst={true} />
            </div>
        </>
    )
}

export default viewProfile
