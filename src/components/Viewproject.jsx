import React from 'react'
import viewpagemapimg from "../image/viewpagemapimg.png"

function Viewproject() {
  return (
    <>
      <div className="main_projects">
        <div className="ViewProject-man">
            <div className="ViewProject-main">
                <div className="ViewProject-flex">
                    <h1>Republic County Hospital - ED/Lab/Trauma Addition and Renovation - BP #1</h1>
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
                            <p><spn>February 13, 2024</spn></p>
                        </div>
                        <div className="viewproject-left">
                            <p>start Date</p>
                            <p><spn>April 15, 2024</spn></p>
                        </div>
                        <div className="viewproject-map-img">
                            <img src={viewpagemapimg} alt=""/>
                            <p>1125 Avenue R, Grand Prairie, TX 75050, United States</p>
                        </div>
                        <div className="">
                            <hr/>
                        </div>
                        <div className="viewproject-left11">
                            <h2>Details</h2>
                        </div>
                        <div className="viewproject-left">
                            <p>Stage</p>
                            <p><spn>Sub-Bidding</spn></p>
                        </div>
                        <div className="viewproject-left">
                            <p>Building Use</p>
                            <p><spn>Medical</spn></p>
                        </div>
                        <div className="viewproject-left">
                            <p>Value</p>
                            <p><spn>$10,000,000,000.00</spn></p>
                        </div>
                        <div className="viewproject-left">
                            <p>Sector</p>
                            <p><spn>Public - Country</spn></p>
                        </div>
                        <div className="viewproject-left">
                            <p>Sector</p>
                            <p><spn>Addition, Remodeling, Renovation, Site work</spn></p>
                        </div>
                        <div className="viewproject-line">
                            <hr/>
                        </div>
                        <div className="viewproject-left11">
                            <h2>Description</h2>
                        </div>
                        <div className="viewproject-left-text">
                            <p>Site work. remodeling. renovation and addition to a medical facility in Belleville, Kansas. Completed plans call<br/>
                               for the addition of a medical facility; and for the renovation of a medical facility.</p>
                               <p>Corporate Heights Tower is a state-of-the-art commercial office building designed to redefine the skyline of the bustling urban landscape. This iconic structure embodies a seamless blend of functionality, sustainability, and architectural brilliance. Nestled in the heart of the city, this 30-story marvel is set to become a landmark symbolizing corporate excellence and innovation.</p>
                        </div>
                    </div>
                    <div className="viewproject-right-main">
                        <h2>Relative Products</h2>
                        <div className="viewproject-right">
                            <h2><a>Grading and Bridge - 5188062</a></h2>
                            <div className="viewproject-para">
                                <p>Belleville, KS</p>
                                <p>Bid Date: Oct 18 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Viewproject
