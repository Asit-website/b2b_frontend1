import "./sidebar.css";
import dashboard from "../image/dashboard.png";
import file from "../image/file.png";
import list from "../image/list.png";
import msgSquare from "../image/message-square.png";
import star from "../image/star.png";
import coffee from "../image/coffee.png";
import { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const data = [
  {
    img: dashboard,
    title: "Dashboard",
    link: "Dashboard"
  },
  {
    img: file,
    title: "My Projects",
    link: "myProject"
  },
  {
    img: list,
    title: "Shortlist",
  },
  {
    img: msgSquare,
    title: "My Messages",
  },
  {
    img: star,
    title: "Reviews",
  },
  {
    img: coffee,
    title: "Upgrade Plan",
  },
];

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const [selectSide, setSelectSide] = useState(0);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width >= 1200) {
        setShowSidebar(false);
      }
    }

    // Add event listener to listen for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup by removing event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="sidebarWrap">
        {data.map((item, index) => (
          <NavLink  to={`/${item.link}`}> <div
            onClick={() => setSelectSide(index)}
            key={index}
            // className={` ${index == selectSide && "selectDash"} singleSideItem`}
            className={` ${window.location.pathname === `/${item.link}` ? "selectDash" : ""} singleSlideItem`}
          >
            <img src={item.img} alt="" />
            <span>{item?.title}</span>
          </div></NavLink>
        ))}
      </div>

      <div className={`slidebarWrap ${showSidebar && "showSlidebar"}`}>

        <div className="iconWrap">
          <IoReorderThreeOutline
            onClick={() => setShowSidebar((prev) => !prev)}
            className="sideIcons"
          />
        </div>

        <div className={`${showSidebar && "allDataItem"} hidden`}>

          {data.map((item, index) => (
            <NavLink to={`/${item.link}`} className={` ${index == selectSide && "SinselectDash"} singleSlideItem`}>  <div
              onClick={() => setSelectSide(index)}
              key={index}
              
            >
              <img src={item.img} alt="" />
              <span>{item?.title}</span>
            </div></NavLink>
          ))}

        </div>

      </div>
    </>
  );
}

export default Sidebar;
