import Sidebar from "../common/Sidebar";
import "./dashboard.css"
import frame from "../image/Frame.png"
import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar';
import Footer from "../common/Footer";
function Dashboard({userImage}){

    let user = JSON?.parse(localStorage.getItem('b2b_user'));

    return (
        <>
       
        <div className="DashboardWrap">

            <Sidebar />

            <div className="dashRightContain">

                <div className="mainPart">

                

                {/* first  */}
                <div className="editProfile">

                   <div className="AM icons">
                    {
                        userImage ?
                        <img src={userImage} alt="" />
                        :
                   <Avatar  name={user.name} size='51px' round={true} textSizeRatio={2} />
                    }
                   </div>

                   <div className="namEditWrap">

                   <div className="nameWWrap">
                    <h2>{user?.name}</h2>
                    <p>{user?.categoryies}</p>
                   </div>

                   <NavLink to="/viewProfile"><button className="eidtProfile"><span>View Profile</span></button></NavLink>

             
                   </div>
                  

                   <NavLink to="/personalInformation"><button className="eidtProfile"><span>Edit Profile</span></button></NavLink>

                </div>


 {/* banner */}
 <div className="banner">
    <p>How can Construction connect you with the perfect architect for your business service needs today?</p>

    <img src={frame} alt="" />
 </div>

 </div>
 


            </div>



        </div>


            <Footer adjustFirst={true} />
            </>
    )
}

export default Dashboard;