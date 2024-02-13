import React from 'react'
import son from '../image/son.svg'
import Footer from '../common/Footer'
import yt from '../image/yt.svg'
const Budegting = () => {
    return (
        <>
            <div className="main_budget">
                <div className="budget_man">
                    <div className="budget_under">
                        <div className="budget_flex">
                            <div className="budget_left">
                                <div className="budget_content">
                                    <h2>Takeoff and <br /> Estimating Solutions</h2>
                                    <p>Save time and money with digital takeoff and <br /> estimating tools</p>
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
                <div className="take_main">
                    <div className="take_main_bs">
                        <div className="take_man">
                            <h1>Takeoff & Estimating Solutions for Every Business</h1>
                            <p className='wet'>Whether you're looking for a trade-specific takeoff tool or a fully integrated estimating suite, ConstructConnect has the right tools for you.</p>
                            <div className="take_flex th_fs">
                                <div className="talk_left">
                                    <div className="talk_cont">
                                        <h2>Robust, Scalable Takeoff and</h2>
                                        <h2>Estimating Solution</h2>
                                        <p>The power duo of provides a fully integrated solution. Industry-leading features make it easy to bid more accurately, respond to changes more quickly, and win more profitable bids.</p>
                                    </div>
                                    <div className="ports_btn">
                                        <button>Get Demo</button>
                                    </div>
                                </div>
                                <div className="talk_right">
                                    <div className="talkj_img">
                                        <img src={yt} alt="yt" />
                                    </div>
                                </div>
                            </div>
                            <div className="take_flex th_fs">
                                <div className="talk_left">
                                    <div className="talkj_img">
                                        <img src={yt} alt="yt" />
                                    </div>
                                </div>
                                <div className="talk_right">
                                    <div className="talk_cont">
                                        <h2>Robust, Scalable Takeoff and</h2>
                                        <h2>Estimating Solution</h2>
                                        <p>The power duo of provides a fully integrated solution. Industry-leading features make it easy to bid more accurately, respond to changes more quickly, and win more profitable bids.</p>
                                    </div>
                                    <div className="ports_btn">
                                        <button>Get Demo</button>
                                    </div>
                                </div>

                            </div>
                            <div className="take_flex th_fs">
                                <div className="talk_left">
                                    <div className="talk_cont">
                                        <h2>Robust, Scalable Takeoff and</h2>
                                        <h2>Estimating Solution</h2>
                                        <p>The power duo of provides a fully integrated solution. Industry-leading features make it easy to bid more accurately, respond to changes more quickly, and win more profitable bids.</p>
                                    </div>
                                    <div className="ports_btn">
                                        <button>Get Demo</button>
                                    </div>
                                </div>
                                <div className="talk_right">
                                    <div className="talkj_img">
                                        <img src={yt} alt="yt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Budegting
