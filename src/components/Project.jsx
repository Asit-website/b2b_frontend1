import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BuildLinkNetwork from "../image/BuildLinkNetwork.png";
import { useMain } from '../hooks/useMain';
const Project = ({setShowNavbar}) => {
    const [project,setProject] = useState([]);
    const navigate = useNavigate();
    const {getProjects1} = useMain();
    useEffect(()=>{
       getData();
    },[])
    const getData = async () => {
        // setLoadFlag1(true);
        const ans = await getProjects1("","","","");

        setProject(ans.data);
        console.log(ans.data);
        // setUsers(ans.data);
        // setTotal(ans.count);
        // setLoadFlag1(false);
      };

      useEffect(()=>{
        setShowNavbar(false);
      },[])
      
  return (
   <>
      <div onClick={()=>setShowNavbar(false)} className="main_projects">
          <div className="project_man">
               <div className="project_main">
                   <div className="project_flex">
                       <div className="left_project">
                          <h1>All Projects in the United States</h1>
                          <p>Locate up-to-date construction projects in United States. For the most current project information, select your market.</p>
                          {/* <div className="project-first-input">
                          <div className="project-first-sec">
                            <input type="text" placeholder="Enter a location"/>
                          </div>
                          <div className='project-first-sec'>
                            <input type="text" placeholder="Building use"/>
                          </div>
                          <div className='project-first-sec'>
                            <input type="text" placeholder="Trade or scop"/>
                          </div>
                          </div> */}
                          <div className="project-first-btn">
                            <button type button>Search Project</button>
                          </div>
                       </div>
                       <div className="right_project">
                          <img src={BuildLinkNetwork} alt="BuildLinkNetwork"/>
                       </div>
                   </div>
               </div>
          </div>
          
          <div className="project_man1">
            <div className="project-main1">
                <div className="project-flex1">
                    <div className="left-project1">
                        <h2>Bidding Projects</h2>
                        <div className="map-content-main">
                            <div className="map-under-content">
                                <p>0</p>
                                <span>Update last day</span>
                            </div>
                            <div className="map-under-content">
                                <p>0</p>
                                <span>Update last day</span>
                            </div>
                        </div>
                    </div>
                    <div className="project-hr">
                       <hr/>
                    </div>
                    <div className="left-project1">
                        <h2>All Projects</h2>
                        <div className="map-content-main">
                            <div className="map-under-content">
                                <p>{project.length}</p>
                                <span>Update last day</span>
                            </div>
                            <div className="map-under-content">
                                <p>{project.length}</p>
                                <span>Update last day</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="project-man2">
            <div className="project-main2">
                <div className="project-flex2">
                    <div className="project-man2-heading">
                      {/* 100 */}
                      <h2>Top  Projects By Value</h2>
                    </div>
                    <div className="project-value-section">
                        {
                            project.map((e,index)=>{
                                return  <div key={index} className="project-value-under-sec">       
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M18 13.5V19.5C18 20.0304 17.7893 20.5391 17.4142 20.9142C17.0391 21.2893 16.5304 21.5 16 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V8.5C3 7.96957 3.21071 7.46086 3.58579 7.08579C3.96086 6.71071 4.46957 6.5 5 6.5H11" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M15 3.5H21V9.5" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M10 14.5L21 3.5" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <a style={{cursor:'pointer'}} onClick={()=>{
                                   navigate(`/project/${e._id}`)
                                }}><p>{e?.title}</p></a>
                              </div>
                            })
                        }
                       
                        {/* <div className="project-value-under-sec">       
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 13.5V19.5C18 20.0304 17.7893 20.5391 17.4142 20.9142C17.0391 21.2893 16.5304 21.5 16 21.5H5C4.46957 21.5 3.96086 21.2893 3.58579 20.9142C3.21071 20.5391 3 20.0304 3 19.5V8.5C3 7.96957 3.21071 7.46086 3.58579 7.08579C3.96086 6.71071 4.46957 6.5 5 6.5H11" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 3.5H21V9.5" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10 14.5L21 3.5" stroke="#1A73E8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          <a href="#"><p>Republic County Hospital - ED/Lab/Trauma Addition</p></a>
                        </div> */}
                    </div>
                </div>
            </div>
          </div>

          <div className="project-man3">
            <div className="project-main3">
              <div className="project-flex3">
                <div className="fproject3-left">
                  <h2>Growth with access to the bidding project info your business needs.</h2>
                  <p>Full details, including key contact information, important dates, plans and specifications, on over 500,000 Projects including 5000 updated daily available to subscribers.</p>
                </div>
                <div className="fproject3-right">
                  <form >
                    <div className="form-label">
                      <div className="form-label-section">
                        <label for="fname">Email*</label><br/>
                        <input type="email" placeholder="Email"/>
                      </div>
                      <div className="form-label-section">
                        <label for="fname">What is your Bussiness Type?*</label><br/>
                        <input type="text" name="fname" placeholder="Please select"/>
                      </div>
                    </div>
                    <div className="form-label">
                      <div className="form-label-section">
                        <label for="fname">First name</label><br/>
                        <input type="text" name="fname" placeholder="First Name"/>
                      </div>
                      <div className="form-label-section">
                        <label for="fname">Phone number</label><br/>
                        <input type="text" name="fname" placeholder="Phone number"/>
                      </div>
                    </div>
                    <div className="form-label">
                      <div className="form-label-section">
                        <label for="fname">Company Name</label><br/>
                        <input type="text" id="company-input" name="fname" placeholder="Company Name"/>
                      </div>
                    </div>
                    <div className="form-label">
                      <div className="project-first-btn project-form-btn">
                          <button type button>Free Demo</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
   </>
  )
}

export default Project
