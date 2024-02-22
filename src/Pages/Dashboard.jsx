import Sidebar from "../common/Sidebar";
import React, { useState, useEffect } from "react";
import "./dashboard.css"
import frame from "../image/Frame.png"
import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar';
import Footer from "../common/Footer";
import { useMain } from "../hooks/useMain";
function Dashboard({ userImage }) {

    let user = JSON?.parse(localStorage.getItem('b2b_user'));
    const { getProjects } = useMain();
    const [allProject, setAllProjects] = useState([]);

    const [value, setValue] = useState({});

    useEffect(() => {
        let user1 = JSON?.parse(localStorage.getItem("b2b_user"));
        setValue({ ...user1, password: "" });
    }, [localStorage.getItem("b2b_user")]);

    useEffect(() => {

        const fetchData = async () => {

            const ans = await getProjects({ userId: value._id });
            setAllProjects(ans?.data?.project);
        };


        fetchData();


        return () => {
        };
    }, []);
    return (
        <>

            <div className="DashboardWrap">

                <Sidebar />

                <div className="dashRightContain">

                    <div className="mainPart">
                        <NavLink to="/myProject"><div className="sjk">
                            <h2 className="totals">My total projects</h2>
                            <p className="mt-2">{allProject?.length}</p>
                        </div></NavLink>
                        {/* first  */}
                        <div className="editProfile">

                            <div className="AM icons">
                                {
                                    userImage ?
                                        <img src={userImage} alt="" />
                                        :
                                        <Avatar name={user.name} size='51px' round={true} textSizeRatio={2} />
                                }
                            </div>

                            <div className="namEditWrap">

                                <div className="nameWWrap">
                                    <h2>{user?.name}</h2>
                                    <p>{user?.categoryies}</p>
                                </div>

                                <NavLink to="/viewProfile"><button className="eidtProfile"><span>View Profile</span></button></NavLink>
                                <NavLink to="/personalInformation"><button className="eidtProfile spp1"><span>Edit Profile</span></button></NavLink>

                            </div>




                            {/* {this is edit profilr} */}
                            <NavLink to="/personalInformation"><button className="eidtProfile spp"><span>Edit Profile</span></button></NavLink>


                        </div>


                        {/* banner */}
                        {/* <div className="banner">
    <p>How can Construction connect you with the perfect architect for your business service needs today?</p>

    <img src={frame} alt="" />
 </div> */}

                    </div>



                </div>



            </div>


            <Footer adjustFirst={true} />
        </>
    )
}

export default Dashboard;