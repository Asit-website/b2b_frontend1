import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { useEffect, useState } from "react";
import About from "./components/About";
import Pricing from "./components/Pricing";
import MainState from "./context/MainState";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Dashboard from "./Pages/Dashboard";
import PersonalInformation from "./Pages/PersonalInformation";
import PersonalInfo2 from "./Pages/PersonalInfo2";
import MyProject from "./Pages/MyProject";
import PostProject from "./Pages/PostProject";
import AllProject from "./Pages/AllProject";
import ArchitecturePage from "./Pages/ArchitecturePage";
import NotUser from "./Pages/NotUser";
import PageNotFound from "./Pages/PageNotFound";
import UpgradePlan from "./Pages/UpgradePlan";
import Budegting from "./components/Budegting";
import Biding from "./components/Biding";
import Project from "./components/Project";
import ProjectDetails from "./components/ProjectDetails";
// import PrivateRoute from './PrivateRoute/PrivateRoute';
// import Navbar1 from './common/Navbar1';
function App() {
  const [pop, setPop] = useState(false);
  const [signupPop, setSignupPop] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [otpPop, setOtpPop] = useState(false);
  const [reset, setReset] = useState(false);

  const notify = (status, message) => {
    if (status) {
      NotificationManager.success(message, "Success! ");
    } else {
      NotificationManager.error(message, "Failed! ");
    }
  };

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width >= 1200) {
        setShowNavbar(false);
      }
    }

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup by removing event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [userImage, setUserImage] = useState(null);
  const [imageId, setImageId] = useState(null);

  const getUserImageFromLocalStorage = () => {
    const userDataString = localStorage.getItem("b2b_user");
    const userData = JSON.parse(userDataString);

    if (userData && userData.img && userData.img.url) {
      setUserImage(userData?.img?.url);
      setImageId(userData?.img?.id);
    }
  };

  useEffect(() => {
    getUserImageFromLocalStorage();
  }, []);

  let user = JSON?.parse(localStorage?.getItem("b2b_user"));

  //  const [srcArchiData , setSrcArchiData] = useState([]);

  return (
    <div className={`${showNavbar && "heightAdjust"}`}>
      <MainState>
        <Router>
          <Navbar
            showNavbar={showNavbar}
            setShowNavbar={setShowNavbar}
            pop={pop}
            setPop={setPop}
            signupPop={signupPop}
            setSignupPop={setSignupPop}
            forgot={forgot}
            setForgot={setForgot}
            otpPop={otpPop}
            setOtpPop={setOtpPop}
            reset={reset}
            setReset={setReset}
            notify={notify}
            userImage={userImage}
          />
          {/* {
                !user && <NotUser/>
               } */}
          {/* <Navbar1/> */}
          <NotificationContainer />
          <Routes>
            <Route
              path="/"
              element={<Home pop={pop} setPop={setPop} notify={notify} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/allProject" element={<AllProject />} />
            <Route path="/architecturePage" element={<ArchitecturePage />} />
            <Route path="/budget" element={<Budegting />} />
            <Route path="/biding" element={<Biding />} />
            <Route path="/project" element={<Project/>}/>
            <Route path="/project/:id" element={<ProjectDetails/>}/>
            {user && (
              <>
                {" "}
                <Route
                  path="/Dashboard"
                  element={<Dashboard userImage={userImage} />}
                />
                <Route
                  path="/personalInformation"
                  element={
                    <PersonalInformation
                      userImage={userImage}
                      setImageId={setImageId}
                      imageId={imageId}
                      setUserImage={setUserImage}
                      notify={notify}
                    />
                  }
                />
                <Route path="/personalInfo" element={<PersonalInfo2 />} />
                <Route
                  path="/myProject"
                  element={<MyProject notify={notify} />}
                />
                <Route
                  path="/postProject"
                  element={<PostProject notify={notify} />}
                />
                <Route path="/upgrade" element={<UpgradePlan />} />
              </>
            )}

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </MainState>
    </div>
  );
}

export default App;
