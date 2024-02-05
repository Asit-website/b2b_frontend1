import Sidebar from "../common/Sidebar";
import "./dashboard.css"
import frame from "../image/Frame.png"

function Dashboard(){
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
                    <h2>Alex Mercer</h2>
                    <p>Main contractors</p>
                   </div>

                   <button className="eidtProfile"><span>Edit Profile</span></button>

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