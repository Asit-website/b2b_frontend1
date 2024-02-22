import React, { useEffect, useState } from 'react'
import viewpagemapimg from "../image/viewpagemapimg.png"
import { useParams } from 'react-router-dom';
import { useMain } from '../hooks/useMain';
import { useNavigate } from 'react-router-dom';
function Viewproject() {
    const { id } = useParams();
    const [data, setData] = useState({});

    const navigate = useNavigate();

    const [data1, setData1] = useState([]);

    const { getProjects1 } = useMain()

    useEffect(() => {
        getData();
    }, [id])

    const getData = async () => {
        let ans = await getProjects1(id, '', '', '');
        setData(ans.data[0]);
    };

    useEffect(() => {
        getData1();
    }, [])
    const getData1 = async () => {
        let ans = await getProjects1("", "", "", "");
        setData1(ans.data);
    }
    return (
        <>
            <div className="main_projects">
                <div className="ViewProject-man">
                    <div className="ViewProject-main">
                        <div className="ViewProject-flex">
                            <h1>{data?.title}</h1>
                        </div>
                    </div>
                </div>

                <div className="viewproject-man1">
                    <div className="viewproject-main1">
                        <div className="viewproject-flex1">
                            <div className="viewproject-left-main">
                                <h2>Events</h2>
                                <div className="viewproject-left">
                                    <p>Bid Date</p>
                                    <p><spn>{data?.bidDate}</spn></p>
                                </div>
                                <div className="viewproject-left">
                                    <p>start Date</p>
                                    <p><spn>{data?.startDate}</spn></p>
                                </div>
                                <div className="viewproject-map-img">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d64512822.89599915!2d176.4715907466437!3d9.284417597417535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708612073077!5m2!1sen!2sin" width="550" height="228"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    {/* <img src={viewpagemapimg} alt="" /> */}
                                    <p>{data?.location}</p>
                                </div>
                                <div className="">
                                    <hr />
                                </div>
                                <div className="viewproject-left11">
                                    <h2>Details</h2>
                                </div>
                                <div className="viewproject-left">
                                    <p>Stage</p>
                                    <p><spn>{data?.stage}</spn></p>
                                </div>
                                <div className="viewproject-left">
                                    <p>Building Use</p>
                                    <p><spn>{data?.buildingUse}</spn></p>
                                </div>
                                <div className="viewproject-left">
                                    <p>Value</p>
                                    <p><spn>${data?.Value}</spn></p>
                                </div>
                                <div className="viewproject-left">
                                    <p>Sector</p>
                                    <p><spn>{data?.sector}</spn></p>
                                </div>
                                {/* <div className="viewproject-left">
                            <p>Sector</p>
                            <p><spn>Addition, Remodeling, Renovation, Site work</spn></p>
                        </div> */}
                                <div className="viewproject-line">
                                    <hr />
                                </div>
                                <div className="viewproject-left11">
                                    <h2>Description</h2>
                                </div>
                                <div className="viewproject-left-text">
                                    <p>{data?.desc}</p>
                                </div>
                            </div>
                            <div className="viewproject-right-main">
                                <h2>Relative Products</h2>
                                {
                                    data1.filter(x => x._id !== data?._id).map((e, index) => {
                                        return (
                                            <div key={index} className="viewproject-right">
                                                <h2><a onClick={()=>{
                                                    navigate(`/project/${e._id}`)
                                                }} style={{cursor:"pointer"}}>{e?.title}</a></h2>
                                                <div className="viewproject-para">
                                                    <p>{e?.location}</p>
                                                    <p>Bid Date: {e?.bidDate}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewproject
