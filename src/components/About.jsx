import React from 'react'
import about from '../image/about.svg';
import gt1 from '../image/gt1.svg';
import join1 from "../image/join1.png";
import join2 from "../image/join2.png";
import join3 from "../image/join3.png";
import join4 from "../image/join4.png";
import join5 from "../image/join5.png";
import join6 from "../image/join6.png";
import Footer from '../common/Footer';
const About = () => {
    return (
        <>
            <div className="about_main">
                <div className="about">
                    <div className="about_flex">
                        <div className="about_left">
                            <div className="about_left_content">
                                <h2>As a premier B2B <br /> platform</h2>
                                <p>We understand the unique challenges and complexities that come with the construction business. </p>
                                <button className='get_in'>Get in touch with us</button>
                            </div>
                        </div>
                        <div className="about_right">
                            <div className="about_right_img">
                                <img src={about} alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="builLink_network">
                <div className="builLink_sect">
                    <div className="main_buildLink">
                        <h2>BuildLink Network</h2>
                        <p>At Construction, we understand the unique challenges and complexities that come with the construction business. Our platform is designed to address these challenges head-on by providing a seamless and efficient hub for B2B interactions. Whether you're a contractor, supplier, architect, or any other professional in the construction ecosystem, we have crafted a space tailored to meet your specific needs.</p>
                    </div>
                    <div className="buildLink_flex">
                        <div className="buildLink_box buildLink_box1">
                            <h3>Innovation at the Core</h3>
                            <p>We embrace cutting-edge technology to ensure that our platform remains at the forefront of industry trends. From advanced search functionalities to real-time collaboration tools, we provide the tools you need to stay ahead.</p>
                        </div>
                        <div className="buildLink_box buildLink_box2">
                            <h3>Tailored Solutions</h3>
                            <p>ecognizing the diversity within the construction sector, we offer customizable solutions that cater to the specific requirements of your business. Our platform is not one-size-fits-all – it’s built to adapt to your unique needs.</p>
                        </div>
                        <div className="buildLink_box buildLink_box3">
                            <h3>Innovation at the Core</h3>
                            <p>We embrace cutting-edge technology to ensure that our platform remains at the forefront of industry trends. From advanced search functionalities to real-time collaboration tools, we provide the tools you need to stay ahead.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_intro">
                <div className="intro">
                    <div className="intro_flex">
                        <div className="intro-left">
                            <div className="intro_div">
                                <h2>Introducing the new AI Stylist</h2>
                                <p>Create an AI-powered project brief and send to best-fit services providers all at once</p>
                                <div className="intro_btn">
                                    <button>Get in touch learn more about construction</button>
                                </div>
                            </div>
                        </div>
                        <div className="intro_right">
                            <div className="intro_img">
                                <img src={gt1} alt="gt1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home_Join" className='home_joint'>
                <div className="home_join_container">
                    <div className="home_join_content">
                        <h2>Trusted by the world’s biggest brands</h2>
                        <div className="home_join_section">
                            <img src={join1} alt="" />
                            <img src={join2} alt="" />
                            <img src={join3} alt="" />
                            <img src={join4} alt="" />
                            <img src={join5} alt="" />
                            <img src={join6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ready_main">
                  <div className="ready">
                      <div className="ready_div">
                          <h4>Ready to get started? </h4>
                          <h2>Share your experience & make profile</h2>
                          <button>Get in touch with us</button>
                      </div>
                  </div>
            </div>
             
             <div className='tyyyo'>
                <h2 className='renim'>Ready To get started</h2>
            <div className="our_mission">
                <div className="main_mission">
                      <h2>Our Mission</h2>
                      <p>To empower and connect construction stakeholders worldwide through an innovative and collaborative digital marketplace. We are dedicated to fostering transparency, efficiency, and sustainable growth within the construction industry by providing a unified platform that enhances communication, streamlines processes, and facilitates strategic partnerships. Our mission is to revolutionize the way construction professionals collaborate, access resources, and propel the industry towards a future of unparalleled efficiency and success.</p>
                </div>
            </div>

            <div className="our_mission">
                <div className="main_mission">
                      <h2> Our Vision</h2>
                      <p>To be the global leader in transforming the construction industry through cutting-edge technology and collaborative solutions. We envision a world where every construction stakeholder, regardless of geographic location, can seamlessly connect, collaborate, and thrive on our platform. Our vision is to create a dynamic ecosystem that not only meets the current needs of the construction industry but anticipates and adapts to future challenges. By continually innovating and leveraging the power of technology, we aspire to be the platform of choice, driving positive change and shaping the future of construction on a global scale.</p>
                </div>
            </div>
            </div>

            <Footer />
        </>
    )
}

export default About
