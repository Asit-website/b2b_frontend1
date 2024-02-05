import "./sidebar.css"
import dashboard from "../image/dashboard.png"
import file from "../image/file.png"
import list from "../image/list.png"
import msgSquare from "../image/message-square.png"
import star from "../image/star.png"
import coffee from "../image/coffee.png"
import { useState } from "react"

const data =[
    {
        img : dashboard , 
        title:"Dashboard"
    },
    {
        img: file , 
        title:"My Projects"
    },
    {
        img: list , 
        title:"Shortlist"
    },
    {
        img : msgSquare , 
        title:"My Messages"
    },
    {
        img : star , 
        title:"Reviews"
    }
    ,
    {
        img: coffee , 
        title:"Upgrade Plan"
    }
]


function Sidebar(){

     const [selectSide , setSelectSide] = useState(0);

    return (
        <div className="sidebarWrap">


           {
            data.map((item ,index)=>(
                <div onClick={()=>setSelectSide(index)} key={index} className={` ${index == selectSide && "selectDash"} singleSideItem`}>

                <img src={item.img} alt="" />
                <span>{item?.title}</span>

                </div>
            ))
           }

        </div>
    )
}

export default Sidebar;