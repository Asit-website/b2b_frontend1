import "./projectDetail.css"
import mapPin from "../image/mapPin.png"
import showMap from "../image/showMap.png"
import Footer from "../common/Footer"
import { useLocation } from "react-router-dom"
import { useMain } from "../hooks/useMain";
import { useEffect, useState } from "react"
import ShareModal from "./ShareModel"
import OutsideClickHandler from 'react-outside-click-handler';
import { BASE_URL } from '../utils/Config'
import Sidebar from "../common/Sidebar"

function ProjectDetail() {

    const { getProjectDetailById } = useMain();

    const [share, setShare] = useState(false);

    const location = useLocation();
    const projectId = location.state;

    const [curentImg, setCurentImg] = useState(0);

    const [projectDetails, setProjectDetails] = useState();

    const [map, setMap] = useState(false);

    const stylePeer = {
        display: map ? "block" : "none"
    }
    useEffect(() => {

        const fetchData = async () => {

            const ans = await getProjectDetailById({ id: projectId });
            console.log("ans", ans);
            setProjectDetails(ans?.data);
            // console.log(projectDetails._id)
        };

        fetchData();
        return () => {
        };
    }, []);



    return (

        <div className="proDetWrap myProjectWrap">
            <Sidebar />
            <div className="myProjectRightCon">

                {/* top */}
                <div className="proDeTop">
                    <h2 className="proTItl">{projectDetails?.title}</h2>

                    <div className="topFlex">

                        {/* left side  */}
                        <div className="proDetLeft">

                            {/* first */}
                            <div className="prDTFir">
                                <img src={projectDetails?.img[curentImg]?.url} alt="" />
                            </div>

                            {/* down */}

                            <div className="prDTDwn">
                                {
                                    projectDetails?.img?.map((item, index) => (
                                        <img onClick={() => setCurentImg(index)} src={item?.url} key={index} />
                                    ))
                                }
                            </div>

                            {/* location */}
                            <div className="proLocation">

                                <div className="locFirt">

                                    <img src={mapPin} alt="" />

                                    <div className="locTeeWrap">
                                        <p className="ltext">Location</p>
                                        <p className="reText">{projectDetails?.location}</p>
                                    </div>

                                </div>

                                <button className="showMap" onClick={() => {
                                    setMap(!map)
                                }}>
                                    <span>{map ? "Hide map" : "Show map"}</span>
                                    <img src={showMap} alt="" />

                                </button>

                                <div style={stylePeer} className="mapRes">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27858.716937287216!2d79.49755990514964!3d29.2135634298243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09addbd0c86d1%3A0x6793e360cb3d930f!2sHaldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1708349361688!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>

                            </div>

                            <div className="proDeBtm">

                                <h2>Description</h2>

                                <p>{projectDetails?.desc}</p>

                            </div>

                        </div>

                        {/* right side  */}
                        <div className="proDetRight">

                            {/* first  */}
                            <div className="rpDetaSin">
                                <p className="SiDtIL">Start Date </p>
                                <p className="siAns">{projectDetails?.startDate}</p>
                            </div>

                            {/* first  */}
                            <div className="rpDetaSin">
                                <p className="SiDtIL">Bid Date  </p>
                                <p className="siAns">{projectDetails?.bidDate}</p>
                            </div>

                            {/* first  */}
                            <div className="rpDetaSin">
                                <p className="SiDtIL">Stage  </p>
                                <p className="siAns"> {projectDetails?.stage}</p>
                            </div>

                            {/* first  */}
                            <div className="rpDetaSin">
                                <p className="SiDtIL">Building Use  </p>
                                <p className="siAns">{projectDetails?.buildingUse}</p>
                            </div>

                            {/* first  */}
                            <div className="rpDetaSin">
                                <p className="SiDtIL">Value  </p>
                                <p className="siAns">${projectDetails?.Value}</p>
                            </div>

                            {/* first  */}
                            <div className="rpDetaSin">
                                <p className="SiDtIL">Sector </p>
                                <p className="siAns">{projectDetails?.sector}</p>
                            </div>


                        </div>

                    </div>

                </div>



                {/* bottom  description */}
                <button className="testr" onClick={() => setShare(true)}>Invite Bid <i class="fa-solid fa-share"></i></button>
               
            </div>
           
            {
                share && <ShareModal  setShare={setShare} url={`${BASE_URL}`} />
            }
            <Footer adjustFirst={true} />

        </div>
    )
}

export default ProjectDetail;
// apiKey:"AIzaSyCZRWpC8xfVQbIMlJ6upvOxBI6xQkERSvk"