import "./sidebar.css";
import dashboard from "../image/dashboard.png";
import file from "../image/file.png";
import list from "../image/list.png";
import msgSquare from "../image/message-square.png";
import star from "../image/star.png";
import coffee from "../image/coffee.png";
import { useEffect, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

const data = [
  {
    img: dashboard,
    title: "Dashboard",
  },
  {
    img: file,
    title: "My Projects",
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
          <div
            onClick={() => setSelectSide(index)}
            key={index}
            className={` ${index == selectSide && "selectDash"} singleSideItem`}
          >
            <img src={item.img} alt="" />
            <span>{item?.title}</span>
          </div>
        ))}
      </div>

      <div className={`slidebarWrap ${showSidebar && "showSlidebar"}`}>

        <div className="iconWrap">
          <IoReorderThreeOutline
            onClick={() => setShowSidebar((prev) => !prev)}
            className="sideIcons"
          />
        </div>

        <div className={`${showSidebar  &&  "allDataItem"} hidden`}> 

        {data.map((item, index) => (
          <div
            onClick={() => setSelectSide(index)}
            key={index}
            className={` ${index == selectSide && "SinselectDash"} singleSlideItem`}
          >
            <img src={item.img} alt="" />
            <span>{item?.title}</span>
          </div>
        ))}

</div>

      </div>
    </>
  );
}

export default Sidebar;
