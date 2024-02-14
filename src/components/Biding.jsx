import React, { useState } from 'react'
import son from '../image/son.svg'
import Footer from '../common/Footer'
import yt from '../image/yt.svg'
import kicking from '../image/kicking.svg'
const Biding = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const stylePerr = {
        display: open ? "block" : "none",
    };
    const stylePerr1 = {
        display: open1 ? "block" : "none",
    };
    const stylePerr2 = {
        display: open2 ? "block" : "none",
    };
    const stylePerr3 = {
        display: open3 ? "block" : "none",
    };
    const stylePerr4 = {
        display: open4 ? "block" : "none",
    };
    const stylePerr5 = {
        display: open5 ? "block" : "none",
    };
    return (
        <>
            <div className="main_budget">
                <div className="budget_man">
                    <div className="budget_under">
                        <div className="budget_flex">
                            <div className="budget_left">
                                <div className="budget_content">
                                    <h2>Construction Project <br /> Bidding Opportunities</h2>
                                    <p>We connect contractors with a wide range of <br /> construction projects.</p>
                                </div>
                            </div>
                            <div className="budget_right">
                                <div className="budget_pro">
                                    <img src={son} alt="son" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="biding_about">
                    <div className="biding_sen">
                        <h2>How It Works</h2>
                        <div className="biding_sox">
                            <div className="biding_flex">
                                <div className="biding_box">
                                    <div className="biding_box1">
                                        <img src={kicking} alt="ticking" />
                                    </div>
                                    <div className="biding_box2">
                                        <h3>Register Your Company</h3>
                                        <p>Find the best projects for your firm and effectively manage your pipeline to ensure your success. Use project alerts and saved searches to track projects and stay up to date on new opportunities to sell your product.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="biding_flex biding_flex1">
                                <div className="biding_box biding_box11">
                                    <div className="biding_box1">
                                        <img src={kicking} alt="ticking" />
                                    </div>
                                    <div className="biding_box2">
                                        <h3>Access Detailed Project Information</h3>
                                        <p>For each listed project, access comprehensive details including project scope, timelines, budget, and specific requirements.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="biding_flex bh">
                                <div className="biding_box biding_box111">
                                    <div className="biding_box1">
                                        <img src={kicking} alt="ticking" />
                                    </div>
                                    <div className="biding_box2">
                                        <h3>Access Detailed Project Information</h3>
                                        <p>For each listed project, access comprehensive details including project scope, timelines, budget, and specific requirements.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="biding_flex biding_flex1">
                                <div className="biding_box biding_box1111">
                                    <div className="biding_box1">
                                        <img src={kicking} alt="ticking" />
                                    </div>
                                    <div className="biding_box2">
                                        <h3>Bid Evaluation & Selection</h3>
                                        <p>Bids are evaluated based on criteria such as cost, experience, and project approach. Selected bidders will be contacted for further steps.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="builLink_network">
                    <div className="builLink_sect">
                        <div className="main_buildLink main_srt">
                            <h2>Why Choose Our Platform </h2>
                        </div>
                        <div className="buildLink_flex">
                            <div className="buildLink_box buildLink_box1">
                                <h3>Trusted by Industry <br /> Leaders</h3>
                                <p>We partner with reputable companies, ensuring quality and reliable project listings.</p>
                            </div>
                            <div className="buildLink_box buildLink_box2">
                                <h3>Transparent Bidding <br /> Process</h3>
                                <p>Our platform ensures a fair and straightforward bidding process for all participants.</p>
                            </div>
                            <div className="buildLink_box buildLink_box3">
                                <h3>Support and <br /> Guidance</h3>
                                <p>Our dedicated team is here to assist you throughout the bidding process.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Accordion_section_pricing">
                    <div className="Accordion_section_pricing_detail hyr">
                        <div className="Accordion_section_pricing_head">
                            <h2>Frequently asked questions</h2>
                        </div>
                        <div id="accordion-collapse" data-accordion="collapse">
                            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
                                <h2 id="accordion-collapse-heading-1">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-4 font-medium rtl:text-right    gap-3 "
                                        data-accordion-target="#accordion-collapse-body-1"
                                        aria-expanded="true"
                                        aria-controls="accordion-collapse-body-1"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span>What Services Do You Offer?</span>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-1"
                                    className="hidden"
                                    aria-labelledby="accordion-collapse-heading-1"
                                    style={stylePerr}
                                >
                                    <div className="p-4  inner_div">
                                        <p className="">
                                            Potential clients want to understand the range of
                                            construction services your company provides. This can
                                            include general contracting, project management,
                                            design-build services, commercial construction, renovations,
                                            and specialized construction like industrial or
                                            infrastructure projects. It’s important to provide detailed
                                            descriptions of each service, accompanied by case studies or
                                            examples of past projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
                                <h2 id="accordion-collapse-heading-2">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-4 font-medium rtl:text-right gap-3 "
                                        data-accordion-target="#accordion-collapse-body-2"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-2"
                                        onClick={() => setOpen1(!open1)}
                                    >
                                        <span>What Is Your Experience and Track Record?</span>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-2"
                                    className="hidden"
                                    aria-labelledby="accordion-collapse-heading-2"
                                    style={stylePerr1}
                                >
                                    <div className="p-4 inner_div">
                                        <p className="text-#596080-500 dark:text-#596080-400">
                                            Potential clients want to understand the range of
                                            construction services your company provides. This can
                                            include general contracting, project management,
                                            design-build services, commercial construction, renovations,
                                            and specialized construction like industrial or
                                            infrastructure projects. It’s important to provide detailed
                                            descriptions of each service, accompanied by case studies or
                                            examples of past projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
                                <h2 id="accordion-collapse-heading-3">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-4 font-medium rtl:text-right gap-3 "
                                        data-accordion-target="#accordion-collapse-body-3"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-3"
                                        onClick={() => setOpen2(!open2)}
                                    >
                                        <span>How Do You Ensure Project Quality and Safety?</span>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-3"
                                    className="hidden"
                                    aria-labelledby="accordion-collapse-heading-3"
                                    style={stylePerr2}
                                >
                                    <div className="p-4   inner_div">
                                        <p className="text-#596080-500 dark:text-#596080-400">
                                            Potential clients want to understand the range of
                                            construction services your company provides. This can
                                            include general contracting, project management,
                                            design-build services, commercial construction, renovations,
                                            and specialized construction like industrial or
                                            infrastructure projects. It’s important to provide detailed
                                            descriptions of each service, accompanied by case studies or
                                            examples of past projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
                                <h2 id="accordion-collapse-heading-4">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-4 font-medium rtl:text-right  gap-3 "
                                        data-accordion-target="#accordion-collapse-body-4"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-4"
                                        onClick={() => setOpen3(!open3)}
                                    >
                                        <span>What Are Your Pricing and Payment Terms?</span>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-4"
                                    className="hidden"
                                    aria-labelledby="accordion-collapse-heading-4"
                                    style={stylePerr3}
                                >
                                    <div className="p-4  inner_div">
                                        <p className="text-#596080-500 dark:text-#596080-400">
                                            Potential clients want to understand the range of
                                            construction services your company provides. This can
                                            include general contracting, project management,
                                            design-build services, commercial construction, renovations,
                                            and specialized construction like industrial or
                                            infrastructure projects. It’s important to provide detailed
                                            descriptions of each service, accompanied by case studies or
                                            examples of past projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
                                <h2 id="accordion-collapse-heading-5">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-4 font-medium rtl:text-right gap-3 "
                                        data-accordion-target="#accordion-collapse-body-5"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-5"
                                        onClick={() => setOpen4(!open4)}
                                    >
                                        <span>
                                            How Do You Handle Project Management and Communication?
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-5"
                                    className="hidden"
                                    aria-labelledby="accordion-collapse-heading-5"
                                    style={stylePerr4}
                                >
                                    <div className="p-4 inner_div">
                                        <p className="text-#596080-500 dark:text-#596080-400">
                                            Potential clients want to understand the range of
                                            construction services your company provides. This can
                                            include general contracting, project management,
                                            design-build services, commercial construction, renovations,
                                            and specialized construction like industrial or
                                            infrastructure projects. It’s important to provide detailed
                                            descriptions of each service, accompanied by case studies or
                                            examples of past projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
                                <h2 id="accordion-collapse-heading-5">
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-4 font-medium rtl:text-right gap-3"
                                        data-accordion-target="#accordion-collapse-body-6"
                                        aria-expanded="false"
                                        aria-controls="accordion-collapse-body-6"
                                        onClick={() => setOpen5(!open5)}
                                    >
                                        <span>Can I use this for commercial purposes?</span>
                                    </button>
                                </h2>
                                <div
                                    id="accordion-collapse-body-6"
                                    className="hidden"
                                    aria-labelledby="accordion-collapse-heading-6"
                                    style={stylePerr5}
                                >
                                    <div className="p-4   inner_div">
                                        <p className="text-#596080-500 dark:text-#596080-400">
                                            Potential clients want to understand the range of
                                            construction services your company provides. This can
                                            include general contracting, project management,
                                            design-build services, commercial construction, renovations,
                                            and specialized construction like industrial or
                                            infrastructure projects. It’s important to provide detailed
                                            descriptions of each service, accompanied by case studies or
                                            examples of past projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="client_main">
                    <div className="client_main11">
                          <div className="client_flex">
                               <div className="client_left">
                                   <div className="client_content">
                                       <h3>Connect with your next client on <br /> BuildLink Network</h3>
                                       <div className='ging'>
                                       <p>Get in front of millions of active B2B buyers worldwide </p>
                                       <p>inside the leading global business services marketplace.</p>
                                       </div>
                                   </div>
                               </div>
                               <div className="client_right">
                                   <div className="client_btn">
                                       <button>Create a Profile</button>
                                   </div>
                               </div>
                          </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Biding
