import Sidebar from "../common/Sidebar";
import "./dashboard.css"
import frame from "../image/Frame.png"
import { NavLink } from "react-router-dom";

function Dashboard(){
    let user = JSON.parse(localStorage.getItem('b2b_user'));
    return (
        <div className="DashboardWrap">

            <Sidebar />

            <div className="dashRightContain">

                {/* first  */}
                <div className="editProfile">

                   <div className="AM">
                    <span>AM</span>
                   </div>

                   <div className="namEditWrap">

                   <div className="nameWWrap">
                    <h2>{user?.name}</h2>
                    <p>{user?.categoryies}</p>
                   </div>

                 <NavLink to="/personalInformation"><button className="eidtProfile"><span>Edit Profile</span></button></NavLink>

                   </div>

                </div>


 {/* banner */}
 <div className="banner">
    <p>How can Construction connect you with the perfect architect for your business service needs today?</p>

    <img src={frame} alt="" />
 </div>


            </div>

        </div>
    )
}

export default Dashboard;