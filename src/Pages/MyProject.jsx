import Sidebar from "../common/Sidebar";
import "./myProject.css"
import rec from "../image/Rectangle 176.png"
import rec2 from "../image/rec2.png"
import rec3 from "../image/rec3.png"
import rec4 from "../image/rec4.png"
import rec5 from "../image/rec5.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Footer from "../common/Footer";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMain } from "../hooks/useMain";




function MyProject() {

    const {  getProjects} = useMain();

    const [allProject , setAllProjects] = useState([]);

    const splideOptions = {
        fixedWidth: 200,
        fixedHeight: 200,
        isNavigation: true, // Enable navigation buttons
        gap: 10,
        perMove: 1,
        perPage: 3,
        pagination: true,
        autoplay: true,
        type: "loop",
        interval: 1000,
        perMove: 1,
        perPage: 1,
        // focus: 'center',
        breakpoints: {
            600: {
                fixedWidth: 200,
                fixedHeight: 150,
            },
            800: {
                fixedWidth: 200,
                fixedHeight: 200,
            },
        },
    };

    console.log("al", allProject);


    useEffect(() => {
        const fetchData = async () => {
          const ans = await getProjects();
          setAllProjects(ans?.data);
        };
      
        fetchData();
      
        return () => {
        };
      }, []);
    

    return (
        <>
            <div className="myProjectWrap">

                <Sidebar />

                <div className="myProjectRightCon">

                    <div className="myProjectSlide">


                        <h2>Welcome to BuildLink Network </h2>

                        <div>
                            <Splide options={splideOptions}>
                                <SplideSlide>
                                    <img src={rec2} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide >
                                    <img src={rec} alt="Image 1" className="recImage" />
                                </SplideSlide>

                                <SplideSlide>
                                    <img src={rec5} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={rec3} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={rec4} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={rec2} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide >
                                    <img src={rec} alt="Image 1" className="recImage" />
                                </SplideSlide>

                                <SplideSlide>
                                    <img src={rec5} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={rec3} alt="Image 1" className="recImage" />
                                </SplideSlide>
                                <SplideSlide>
                                    <img src={rec4} alt="Image 1" className="recImage" />
                                </SplideSlide>



                                {/* Add more SplideSlides as needed */}
                            </Splide>
                        </div>


                        <div className="new_project">
                          <NavLink to="/postProject"><button><span>New Projects</span><svg className="ml-2" width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.48698 4.83366H7.82031V8.16699H4.48698V9.83366H7.82031V13.167H9.48698V9.83366H12.8203V8.16699H9.48698V4.83366ZM8.65365 0.666992C4.05365 0.666992 0.320312 4.40033 0.320312 9.00033C0.320312 13.6003 4.05365 17.3337 8.65365 17.3337C13.2536 17.3337 16.987 13.6003 16.987 9.00033C16.987 4.40033 13.2536 0.666992 8.65365 0.666992ZM8.65365 15.667C4.97865 15.667 1.98698 12.6753 1.98698 9.00033C1.98698 5.32533 4.97865 2.33366 8.65365 2.33366C12.3286 2.33366 15.3203 5.32533 15.3203 9.00033C15.3203 12.6753 12.3286 15.667 8.65365 15.667Z" fill="#E9F5F6" />
                            </svg>
                            </button></NavLink>
                        </div>


                    </div>



                <div className="allProjects">

                   {
                    allProject?.map((pro ,index)=>(
                        <div className="singPro" key={index}>


                            <img src={pro?.img[0]?.url} alt="" />


 <div className="proTitlDDes">

                            <div className="proTitl">
                                <p>{pro?.title}</p>
                            </div>

                            <div className="proDesc">
                                <p>{pro?.desc}</p>
                            </div>
 </div>

                        </div>
                    ))
                    
                   }

                </div>


                </div>


            </div>
                <Footer adjustFirst={true} />
        </>
    )
}

export default MyProject;