import  Sidebar from "../common/Sidebar";
import "./myProject.css"
import rec from "../image/Rectangle 176.png"
import rec2 from "../image/rec2.png"
import rec3 from "../image/rec3.png"
import rec4 from "../image/rec4.png"
import rec5 from "../image/rec5.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';



function MyProject(){

  const splideOptions = {
    fixedWidth: 200,
    fixedHeight: 200,
    isNavigation: true, // Enable navigation buttons
    gap: 10,
    pagination: true,
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

    return (
        <div className="myProjectWrap">

            <Sidebar />

            <div className="myProjectRightCon">
                
                <div className="myProjectSlide">


                <h2>Welcome to BuildLink Network </h2>


<Splide options={splideOptions}>
<SplideSlide>
      <img src={rec2} alt="Image 1" className="recImage"/>
      </SplideSlide>
      <SplideSlide >
      <img src={rec} alt="Image 1" className="recImage" />
      </SplideSlide>
     
      <SplideSlide>
      <img src={rec5} alt="Image 1" className="recImage"/>
      </SplideSlide>
      <SplideSlide>
      <img src={rec3} alt="Image 1" className="recImage"/>
      </SplideSlide>
      <SplideSlide>
      <img src={rec4} alt="Image 1" className="recImage"/>
      </SplideSlide>
    
    
    
      {/* Add more SplideSlides as needed */}
    </Splide>



                </div>
            </div>

        </div>
    )
}

export default MyProject;