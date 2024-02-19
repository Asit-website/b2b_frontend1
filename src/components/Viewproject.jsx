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
                                    <img src={viewpagemapimg} alt="" />
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
