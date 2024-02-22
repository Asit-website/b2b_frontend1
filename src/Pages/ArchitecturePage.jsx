import "./architecturePage.css";
import technical from "../image/technician.png";
import mapPin from "../image/mapPin.png";
import award from "../image/award.png";
import hotel from "../image/hotel.png";
import portfolio from "../image/portfolio.png";
import send from "../image/send.png";
import visit from "../image/global.png";
import verify from "../image/verified.png";
import star from "../image/star.png"
import loc from "../image/loc.png"
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import technical23 from "../image/technician23.png"


function ArchitecturePage() {

  const location = useLocation();

  const state = location.state;

  const [srcArchiData, setSrcArchiData] = useState();

  useEffect(() => {
    if (state) {
      setSrcArchiData(state?.data);
    }
  }, [])

  console.log("srha" , srcArchiData);

  return (
    <>
      <div className="arct_wrapS1">

        <div className="arct_ContS1">
          {/* left side */}
          <div className="arctS1Left">
            <h2>Your Premier Destination for Expert Consulting Architects </h2>

            <p>
              Our platform serves as a gateway for businesses seeking
              unparalleled expertise and reliable solutions for their
              engineering challenges. Here's why partnering with us is the key
              to unlocking success:
            </p>
          </div>

          {/* right side */}
          <div className="arctS1Right">
            <img src={technical} alt="" />
          </div>
        </div>
      </div>

      <div className="allArc_datas2">
        {/* first  */}
        <div className="pricingWrap">
          {/* left side */}
          <h2 className="priceHead">{state.title}</h2>

          <div className="locaPrice">
            {/* location */}
            <div className="s2Location">
              <input type="text" placeholder="Location" />
              <img src={mapPin} alt="" />
            </div>

            {/* pricing  */}
            <div className="s2Pricing">
              <span>Pricing</span> <img src={award} alt="" />
            </div>
          </div>

        </div>

        {/* second */}
        <div className="allFilters">
          <select name="" id="" className="arcSelect">
            <option value="Architects">Architects</option>
          </select>

          <select name="" id="" className="clientBudget">
            <option value="Client Budget">Client Budget</option>
          </select>

          <select name="" id="" className="Reviews">
            <option value="Reviews">Reviews</option>
          </select>

          <select name="" id="" className="Shortby">
            <option value="Short by">Short by</option>
          </select>

          <p className="clearAll">Clear All</p>
        </div>

        <main className="listsALl">
          <h2 className="listHead">List of the Expert Architects </h2>

          <div className="allExpertArc">


            <div className="allExpertArcCont">



              {
                srcArchiData?.length > 0 ? (

                  srcArchiData?.map((item, index) => (

                    <div className="singleExpert" key={index}>

                      {/* left side */}
                      <div className="sinExLeft">

                        {/* top */}
                        <div className="sExTop">

                          {/* left side */}
                          <div className="sExToLeft">

                            <img className="reshy" src={item?.img ? item?.img[0]?.url : hotel} alt="" />

                            <div className="hotelName">

                              <h2>{item?.name}</h2>

                              <div className="rating">

                                <img src={star} alt="" />

                                <p>Rating {item?.rating ? item?.rating : "3.4"}/5</p>

                                <span>{item?.reviews ? item?.reviews : "59"} Reviews </span>

                              </div>

                            </div>

                          </div>


                          {/* rigth side  */}
                          <div className="sExLefRight">

                            <div className="verified">
                              <img src={verify} alt="" /> <span>Verified</span>
                            </div>

                            <div className="Budget">
                              <span>Budget: ${item?.budget ? item?.budget : "5000"}</span>
                            </div>

                          </div>



                        </div>

                        {/* bottom */}
                        <div className="sExBottom">

                          {/* left side */}
                          <div className="exBoLeft">

                            <div className="lHeading2">

                              <img src={loc} alt="" />
                              <h2>{ item.location ? item.location : `2218 Bryan St #200, Dallas, TX 75201, United States`}</h2>

                            </div>

                            <p className="para2">
                              {item.desc ? item?.desc : `Strategic Insight Solutions excels in providing cutting-edge strategies to enhance your business's competitive advantage.`}
                            </p>

                          </div>

                          {/* right side */}
                          <div className="exBtoRight">

                            <span>{item?.quote ? item?.quote : "Strategic Insight Solutions excels in providing cutting-edge strategies to enhance your business's competitive advantage. "}</span>

                          </div>

                        </div>

                      </div>

                      {/* right side */}
                      <div className="sinExRight">
                        <div className="visitWev visit">
                         <a target="_blank" href={`${item.website ? item.website : null}`}><span>Visit Website</span> <img src={global} alt="" /></a>
                        </div>
                        <div className="visitWev portfolio">
                          <span>View Portfolio</span> <img src={portfolio} alt="" />
                        </div>
                        <div className="visitWev send">
                          <span>Send Message</span> <img src={send} alt="" />
                        </div>
                      </div>
                    </div>
                  ))

                ) : (
                  <div className="technical23">
                    <img src={technical23} alt="" />
                    <p>{state?.title}</p>
                  </div>
                )
              }



            </div>

          </div>
        </main>
      </div>
    </>
  );
}

export default ArchitecturePage;
