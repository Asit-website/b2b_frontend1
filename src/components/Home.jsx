import React, { useEffect, useState } from "react";
import left1 from "../image/home_left1.png";
import join1 from "../image/join1.png";
import join2 from "../image/join2.png";
import join3 from "../image/join3.png";
import join4 from "../image/join4.png";
import join5 from "../image/join5.png";
import join6 from "../image/join6.png";
import right1 from "../image/right_home.png";
import { Button, Modal } from 'flowbite-react';
import find from "../image/find.png"
import find2 from "../image/find2.png"
import Footer from "../common/Footer";
import p1 from "../image/p1.png"
import rating from "../image/rating.png"
import ring1 from '../image/ring1.svg'
import ring2 from '../image/ring2.svg'
import ring3 from '../image/ring3.svg'
import ss from '../image/shs.png';
import sks from '../image/sks.png';
import depth from '../image/depth.jpg'
import { useMain } from "../hooks/useMain";
import { useNavigate } from "react-router-dom";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const data = [
  "Civil contractors", "Architects", "Consulting Engineers", "Interior Designers", "Fence", "Main Contractors", "Hauling & Excavating", "Structural contractors", "Masonry", "Carpenters", "Concrete pouring", "Mechanical contractors", "Electrical contractors", "Plumbing contractors", "Fire protection", "Roofing contractors", "Painting contractors", "Glass works", "Drainage contractors", "Garden /Lawn works", "Wall Ceiling", "Insulation", "Realtors", "Lenders", "Investors", "Owners"
]


const Home = ({ pop, setPop, notify }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [open11, setOpen11] = useState(false);
  const [open12, setOpen12] = useState(false);
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
  const stylePerr6 = {
    display: open6 ? "block" : "none",
  };
  const stylePerr7 = {
    display: open7 ? "block" : "none",
  };
  const stylePerr8 = {
    display: open8 ? "block" : "none",
  };
  const stylePerr9 = {
    display: open9 ? "block" : "none",
  };
  const stylePerr10 = {
    display: open10 ? "block" : "none",
  };
  const stylePerr11 = {
    display: open11 ? "block" : "none",
  };
  const stylePerr12 = {
    display: open12 ? "block" : "none",
  };

  const { fetchUserCategory, fetchAllLocation, fetchUserByLoc , fetchUserByLocArc } = useMain();

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const [searchArch, setSearchArch] = useState("");

  const [searchLocation, setSearchLocation] = useState("");

  const [allLocation, setAllLocation] = useState([]);


  const getUsersByCategoryHandler = async () => {
    try {

      if (searchArch === "") {
        return
      }
      const ans = await fetchUserCategory({
        category: searchArch
      });

      if (ans?.status) {

        navigate("/architecturePage", { state: { data: ans?.data, title: searchArch } });

      } else {
        alert("Something went wrong");
      }


    } catch (error) {
      console.log(error);
    }
  }


  const getUserByLocation = async () => {
    try {

      if (searchLocation === "") {
        return
      }
      const ans = await fetchUserByLoc({
        location: searchLocation
      });


      if (ans?.status) {

        navigate("/architecturePage", { state: { data: ans?.data, title: searchLocation } });
      } else {
        alert("Something went wrong");
      }


    } catch (error) {
      console.log(error);
    }
  }


  const getUserByLocArc = async()=>{
    try {
      const ans = await fetchUserByLocArc({
        location: searchLocation , 
        category: searchArch
      });

      console.log("an" ,ans);

      if (ans?.status) {
        navigate("/architecturePage", { state: { data: ans?.data, title: searchArch } });
      } else {
        alert("Something went wrong");
      }


    } catch (error) {
      console.log(error);
    }
  }

    
  const getAllLocation = async () => {
    try {

      const ans = await fetchAllLocation();
      if (ans?.status) {
        setAllLocation(ans?.locations);
      }


    } catch (error) {
      console.log(error);
    }
  }

  // to get aall location 
  useEffect(() => {
    getAllLocation();
  }, [])



  return (
    <>

      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
              to ensure a common set of data rights in the European Union. It requires organizations to notify users as
              soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal> */}

      <div id="home_banner">

        <div className="home_banner-back">

          <div className="home_banner-back1">
            <div className="home_banner_head">
              <h1>
                The world's top contractors for <br /> superior project
                collaboration
              </h1>
            </div>
            <div className="home_banner_para">
              <p>
                Most trusted reputation and customer experience <br /> platform
                for brands & local businesses
              </p>
            </div>

            <div className="home_banner_buttons">
              {/* <div>
                <form class="flex items-center">
                  <label for="voice-search" class="sr-only">
               
                  </label>
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M19.6 21.5L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.14583 15.8708 4.8875 14.6125C3.62917 13.3542 3 11.8167 3 10C3 8.18333 3.62917 6.64583 4.8875 5.3875C6.14583 4.12917 7.68333 3.5 9.5 3.5C11.3167 3.5 12.8542 4.12917 14.1125 5.3875C15.3708 6.64583 16 8.18333 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L21 20.1L19.6 21.5ZM9.5 14.5C10.75 14.5 11.8125 14.0625 12.6875 13.1875C13.5625 12.3125 14 11.25 14 10C14 8.75 13.5625 7.6875 12.6875 6.8125C11.8125 5.9375 10.75 5.5 9.5 5.5C8.25 5.5 7.1875 5.9375 6.3125 6.8125C5.4375 7.6875 5 8.75 5 10C5 11.25 5.4375 12.3125 6.3125 13.1875C7.1875 14.0625 8.25 14.5 9.5 14.5Z"
                          fill="#596080"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Architects "
                      required
                    />
                    <button
                      type="button"
                      class="absolute inset-y-0 end-0 flex items-center pe-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M11 23.45V21.45C8.91665 21.2167 7.12915 20.3542 5.63749 18.8625C4.14582 17.3708 3.28332 15.5833 3.04999 13.5H1.04999V11.5H3.04999C3.28332 9.41667 4.14582 7.62917 5.63749 6.1375C7.12915 4.64584 8.91665 3.78334 11 3.55V1.55H13V3.55C15.0833 3.78334 16.8708 4.64584 18.3625 6.1375C19.8542 7.62917 20.7167 9.41667 20.95 11.5H22.95V13.5H20.95C20.7167 15.5833 19.8542 17.3708 18.3625 18.8625C16.8708 20.3542 15.0833 21.2167 13 21.45V23.45H11ZM12 19.5C13.9333 19.5 15.5833 18.8167 16.95 17.45C18.3167 16.0833 19 14.4333 19 12.5C19 10.5667 18.3167 8.91667 16.95 7.55C15.5833 6.18334 13.9333 5.5 12 5.5C10.0667 5.5 8.41665 6.18334 7.04999 7.55C5.68332 8.91667 4.99999 10.5667 4.99999 12.5C4.99999 14.4333 5.68332 16.0833 7.04999 17.45C8.41665 18.8167 10.0667 19.5 12 19.5ZM12 16.5C10.9 16.5 9.95832 16.1083 9.17499 15.325C8.39165 14.5417 7.99999 13.6 7.99999 12.5C7.99999 11.4 8.39165 10.4583 9.17499 9.675C9.95832 8.89167 10.9 8.5 12 8.5C13.1 8.5 14.0417 8.89167 14.825 9.675C15.6083 10.4583 16 11.4 16 12.5C16 13.6 15.6083 14.5417 14.825 15.325C14.0417 16.1083 13.1 16.5 12 16.5ZM12 14.5C12.55 14.5 13.0208 14.3042 13.4125 13.9125C13.8042 13.5208 14 13.05 14 12.5C14 11.95 13.8042 11.4792 13.4125 11.0875C13.0208 10.6958 12.55 10.5 12 10.5C11.45 10.5 10.9792 10.6958 10.5875 11.0875C10.1958 11.4792 9.99999 11.95 9.99999 12.5C9.99999 13.05 10.1958 13.5208 10.5875 13.9125C10.9792 14.3042 11.45 14.5 12 14.5Z"
                          fill="#1A73E8"
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    type="submit"
                    class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </form>
              </div> */}

              <select className="searchLocation" required name="searchLocation" id="" value={searchLocation} onChange={(e) => setSearchLocation(e.target.value)}>
                <option value="Search Location">Search Location </option>
                {
                  allLocation.map((item, index) => (
                    <option value={item} key={index}>{item}</option>
                  ))
                }

              </select>


              <div className="serchFind">
                <img src={find} alt="" />
                <select required name="searchArch" id="" value={searchArch} onChange={(e) => setSearchArch(e.target.value)}>
                  <option value="Search Architects">Search Architects </option>
                  {
                    data.map((item, index) => (
                      <option value={item} key={index}>{item}</option>
                    ))
                  }

                </select>

                {/* <img src={find2} alt="" /> */}
              </div>

              <button onClick={() => {
                if(searchLocation !== "" && searchArch !== ""){
                  getUserByLocArc();
                }
               else if (searchLocation !== "") {
                  getUserByLocation();
                }
                else {
                  getUsersByCategoryHandler();
                }
              }}>
                <span>Search</span>
              </button>

            </div>


          </div>

          <div className="home_banner2">
            <img src={left1} alt="home" />
          </div>
        </div>

      </div>

      <div id="home_services_banner">
        <div className="home_services_back">
          <div className="home_services_banner_content">
            <div className="services_banner_head">
              <h2>Accelerate your quest for construction services</h2>
            </div>
            <div className="services_banner_para">
              <p>
                The future of B2B buying is here. Let BuildLink Network <br />{" "}
                find your provider match.
              </p>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M1.66669 18.3333V3.33332C1.66669 2.87499 1.82988 2.48263 2.15627 2.15624C2.48266 1.82985 2.87502 1.66666 3.33335 1.66666H16.6667C17.125 1.66666 17.5174 1.82985 17.8438 2.15624C18.1702 2.48263 18.3334 2.87499 18.3334 3.33332V13.3333C18.3334 13.7917 18.1702 14.184 17.8438 14.5104C17.5174 14.8368 17.125 15 16.6667 15H5.00002L1.66669 18.3333ZM4.29169 13.3333H16.6667V3.33332H3.33335V14.2708L4.29169 13.3333Z"
                  fill="#2C868F"
                />
              </svg>
              <span>Let’s Chat</span>
            </button>
          </div>
        </div>
      </div>

      <div id="home_partner">
        <div className="home_partner_container">
          <div className="home_partner_content">
            <h2>Your perfect partner for any Construction</h2>
            <p>
              Discover top-notch architectural expertise across 1,500+
              specialized service lines to tackle your <br /> unique design and
              construction challenges.
            </p>
          </div>
          <div className="home_partner_cards">
            <div className="card1">
              <div className="card1_content">
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Architects</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.39998 8L5.33331 4.93333L6.26665 4L10.2666 8L6.26665 12L5.33331 11.0667L8.39998 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Consulting Engineers</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Interior Designers</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Fence</p>
                </div>
                <div style={{ visibility: "hidden" }} className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Main Contractors</p>
                  <div className="newi">
                    <p>New</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card1_content">

                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Main Contractors</p>
                  <div className="newi">
                    <p>New</p>
                  </div>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Hauling & Excavating</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Structural Contractors</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Masonry</p>
                </div>
                <div style={{ visibility: "hidden" }} className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Hauling & Excavating</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.39998 8L5.33331 4.93333L6.26665 4L10.2666 8L6.26665 12L5.33331 11.0667L8.39998 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card1_content">
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Carpenters</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.39998 8L5.33331 4.93333L6.26665 4L10.2666 8L6.26665 12L5.33331 11.0667L8.39998 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Civil Contractors</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Concrete Pouring</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Mechanical Contractors</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Electrical contractors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="home_partner_cards">
            <div className="card1">
              <div className="card1_content">
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Plumbing contractors</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.39998 8L5.33331 4.93333L6.26665 4L10.2666 8L6.26665 12L5.33331 11.0667L8.39998 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Fire protection</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Roofing contractors</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Painting contractors</p>
                  {/* <div className="newi">
                      <p>New</p>
                  </div> */}
                </div>
                <div style={{ opacity: "0" }} className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Roofing contractors</p>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card1_content">
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Glass works</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.39998 8L5.33331 4.93333L6.26665 4L10.2666 8L6.26665 12L5.33331 11.0667L8.39998 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Drainage contractors</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Garden /Lawn works</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Wall /Ceiling</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Insulation</p>
                </div>
              </div>
            </div>
            <div className="card1">
              <div className="card1_content">
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Realtors</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.39998 8L5.33331 4.93333L6.26665 4L10.2666 8L6.26665 12L5.33331 11.0667L8.39998 8Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Lenders</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Investors</p>
                </div>
                <div className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Owners</p>
                </div>
                <div style={{ visibility: "hidden" }} className="inner-card">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <circle
                      cx="6.00016"
                      cy="5.99998"
                      r="2.22727"
                      fill="#2C868F"
                      stroke="#2C868F"
                    />
                    <circle
                      cx="6"
                      cy="6"
                      r="5.75"
                      stroke="#2C868F"
                      stroke-width="0.5"
                    />
                  </svg>
                  <p>Main Contractors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="home_Join">
        <div className="home_join_container">
          <div className="home_join_content">
            <h2>Join over 5000+ Contractors using Building Connected</h2>
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

      <div id="home_product">
        <div className="home_product_container">
          <div className="home_product_content">
            <h2>Building Product Manufacturers</h2>
            <p>
              Tools for you, no matter where you are in your research process.
            </p>
          </div>
          <div className="home_product_cards">
            <div className="card">
              <div className="card_content">
                <div className="inner-card">
                  <span>Search</span>
                  <h2>Browse 280K service providers</h2>
                  <p>
                    Explore our global network of trusted partners from 1,500+
                    business categories. Find the right company or service in
                    minutes.
                  </p>
                </div>
                <div className="back_section1">
                  {/* <img src={ring1} alt="" /> */}
                  <img src={sks} alt="sks" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="inner-card">
                  <span>Find</span>
                  <h2 className="narrows">Narrow results and shortlist top picks</h2>
                  <p>
                    Explore our global network of trusted partners from 1,500+ business categories. Find the right company or service in minutes.
                  </p>
                </div>
                <div className="back_section2">
                  {/* <img src={ring2} alt="" /> */}
                  <img src={ss} alt="ss" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card_content">
                <div className="inner-card">
                  <span>Decide</span>
                  <h2 className="farrows">Read in-depth verified reviews</h2>
                  <p>
                    Explore our global network of trusted partners from 1,500+ business categories. Find the right company or service in minutes.
                  </p>
                </div>
                <div className="back_section3">
                  {/* <img src={ring3} alt="" /> */}
                  <img src={depth} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="building_man">
          <div className="main_builds">
               <div className="read_in">
                    <h2>Read in-depth verified reviews</h2>
                    <p>Access reliable insights with in-depth verified reviews. Make informed decisions by leveraging firsthand experiences from industry professionals, ensuring confidence in your choices within the construction marketplace.</p>
               </div>
          </div>
      </div>

      <div className="fielding_man">
          <div className="main_fileding">
               <div className="read_in">
                   <h2>Narrow results and shortlist top picks</h2>
                   <p>Effortlessly find the best fit on BuildLink Network. Narrow results using smart filters, ensuring you shortlist top picks tailored to your construction needs. Streamline your decision-making for project success.</p>
                   <div className="read_img">
                      <img src={ss} alt="shs" />
                   </div>
               </div>
          </div>
      </div>

      <div className="fielding_man fielding_man1">
          <div className="main_fileding">
               <div className="read_in">
                   <h2>Browse Over 100K service providers.</h2>
                   <p>Explore a vast network of service providers. Discover industry professionals, suppliers, and contractors to fulfill your construction needs efficiently and connect with experts in the field.</p>
                   <div className="read_img">
                      <img src={sks} alt="shs" />
                   </div>
               </div>
          </div>
      </div> */}

      <div id="home_solution">
        <div className="home_solution_container">
          {/* <div className="home_solution_container_buttons">
            <button className="btn_first">
              <span>
                General <br />
                Contractors
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M32.85 22H8.82996V26H32.85V32L40.83 24L32.85 16V22Z"
                  fill="#2C868F"
                />
              </svg>
            </button>
            <button className="btn_first">
              <span>
                Sub <br />
                Contractors
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
              >
                <path
                  d="M32.85 22H8.82996V26H32.85V32L40.83 24L32.85 16V22Z"
                  fill="#2C868F"
                />
              </svg>
            </button>
          </div> */}
          <div className="solution_content">
            <h2>The trusted solution for</h2>
            <p>
              Powering preconstruction every day for over 1,000,000 of the
              world’s top <br />
              subcontractors
            </p>
            <div className="total_details">
              <div className="inner_details">
                <h2>10K+</h2>
                <p>Projects bid out last month</p>
              </div>
              <div className="inner_details">
                <h2>$50B</h2>
                <p>Bid out monthly</p>
              </div>
              <div className="inner_details">
                <h2>2M+</h2>
                <p>Bid invites sent each month</p>
              </div>
            </div>
          </div>


          <Carousel
            autoPlay="true"
            infiniteLoop="true"
            interval="4000"
            autoFocus="true"

          >
            <div className="Home_marking">

              <div className="Home_marking_right">
                <img src={right1} alt="" />
              </div>

              <div className="Home_marking_left">

                <div className="Home_marking_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="42"
                    viewBox="0 0 52 42"
                    fill="none"
                  >
                    <path
                      d="M29.5887 42V29.3706C29.5887 21.4406 31.4441 14.979 35.1549 9.98601C38.9634 4.8951 44.5784 1.56643 52 0V9.54545C48.6798 10.3287 46.0432 11.7972 44.0901 13.951C42.1371 16.007 40.8676 18.5035 40.2817 21.4406H49.0704V42H29.5887ZM0 42V29.3706C0 21.4406 1.8554 14.979 5.5662 9.98601C9.37465 4.8951 14.9408 1.56643 22.2648 0V9.54545C18.9446 10.3287 16.308 11.7972 14.3549 13.951C12.4019 16.007 11.1324 18.5035 10.5465 21.4406H19.3352V42H0Z"
                      fill="#161B32"
                    />
                  </svg>
                  <p>
                    BuildLink Network transformed how I find projects. The targeted matching system connected me with ideal opportunities, and the collaborative network boosted my business. A game-changer for residential contractors!
                  </p>
                  <span>Jane T., Residential Contractor</span>
                </div>

              </div>

            </div>


            <div className="Home_marking">

              <div className="Home_marking_right">
                <img src={right1} alt="" />
              </div>

              <div className="Home_marking_left">

                <div className="Home_marking_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="42"
                    viewBox="0 0 52 42"
                    fill="none"
                  >
                    <path
                      d="M29.5887 42V29.3706C29.5887 21.4406 31.4441 14.979 35.1549 9.98601C38.9634 4.8951 44.5784 1.56643 52 0V9.54545C48.6798 10.3287 46.0432 11.7972 44.0901 13.951C42.1371 16.007 40.8676 18.5035 40.2817 21.4406H49.0704V42H29.5887ZM0 42V29.3706C0 21.4406 1.8554 14.979 5.5662 9.98601C9.37465 4.8951 14.9408 1.56643 22.2648 0V9.54545C18.9446 10.3287 16.308 11.7972 14.3549 13.951C12.4019 16.007 11.1324 18.5035 10.5465 21.4406H19.3352V42H0Z"
                      fill="#161B32"
                    />
                  </svg>
                  <p>
                    As a commercial supplier, BuildLink Network amplified our visibility. The marketplace showcases and dynamic features enhanced our product reach. This platform is pivotal for expanding our business in the industry.
                  </p>
                  <span>Mike S., Commercial Supplier</span>
                </div>

              </div>

            </div>


            <div className="Home_marking">

              <div className="Home_marking_right">
                <img src={right1} alt="" />
              </div>

              <div className="Home_marking_left">

                <div className="Home_marking_content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="42"
                    viewBox="0 0 52 42"
                    fill="none"
                  >
                    <path
                      d="M29.5887 42V29.3706C29.5887 21.4406 31.4441 14.979 35.1549 9.98601C38.9634 4.8951 44.5784 1.56643 52 0V9.54545C48.6798 10.3287 46.0432 11.7972 44.0901 13.951C42.1371 16.007 40.8676 18.5035 40.2817 21.4406H49.0704V42H29.5887ZM0 42V29.3706C0 21.4406 1.8554 14.979 5.5662 9.98601C9.37465 4.8951 14.9408 1.56643 22.2648 0V9.54545C18.9446 10.3287 16.308 11.7972 14.3549 13.951C12.4019 16.007 11.1324 18.5035 10.5465 21.4406H19.3352V42H0Z"
                      fill="#161B32"
                    />
                  </svg>
                  <p>
                    BuildLink Network's insights are invaluable. The data-driven approach helped us anticipate market trends, leading to smarter decisions. The platform is an essential tool for project managers navigating the construction landscape.
                  </p>
                  <span>Sarah B., Project Manager</span>
                </div>

              </div>

            </div>

            <div className="Home_marking">

<div className="Home_marking_right">
  <img src={right1} alt="" />
</div>

<div className="Home_marking_left">

  <div className="Home_marking_content">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="42"
      viewBox="0 0 52 42"
      fill="none"
    >
      <path
        d="M29.5887 42V29.3706C29.5887 21.4406 31.4441 14.979 35.1549 9.98601C38.9634 4.8951 44.5784 1.56643 52 0V9.54545C48.6798 10.3287 46.0432 11.7972 44.0901 13.951C42.1371 16.007 40.8676 18.5035 40.2817 21.4406H49.0704V42H29.5887ZM0 42V29.3706C0 21.4406 1.8554 14.979 5.5662 9.98601C9.37465 4.8951 14.9408 1.56643 22.2648 0V9.54545C18.9446 10.3287 16.308 11.7972 14.3549 13.951C12.4019 16.007 11.1324 18.5035 10.5465 21.4406H19.3352V42H0Z"
        fill="#161B32"
      />
    </svg>
    <p>
    BuildLink Network is my go-to for industry connections. The collaborative networking feature has opened doors to meaningful partnerships. It's more than a platform; it's a community that fuels success in construction.
    </p>
    <span>John M., Construction Professional</span>
  </div>

</div>

</div>
          </Carousel>


        </div>
      </div>

      {/* new sECTION */}
      <div id="shareExpe">

        <div className="shareExCont">

          {/* left side */}
          <div className="shExLeft">

            <h2>Share your experience and make B2B buying more transparent</h2>
            <p>Leave a review of the business partners you’ve worked with over the years. Make your voice heard and help other business leaders make a confident choice.
            </p>

            <button><span>Write a Review</span></button>

          </div>

          {/* right side */}
          <div className="shExRight">

            <div className="shEXrIcONT">



              {/* left side */}
              <div className="shERiLef">

                {/* first  */}
                <div className="sinRev">

                  <p className="headRev">As a project manager, I've used various B2B construction platforms, but this website stands out for its user-friendly interface. The layout is intuitive, making it incredibly easy to navigate through different services and products. Finding what I need takes minimal time, and the detailed descriptions of each item help in making the right choices for our projects. The efficiency and ease of use have made this my go-to resource for construction needs.</p>

                  <div className="ReProRating">

                    <div className="rePro">

                      <img src={p1} alt="" />
                      <span>James Peterson</span>


                    </div>

                    <div className="rating">
                      <img src={rating} alt="" />
                      <span>04/08/23</span>
                    </div>

                  </div>



                </div>

                {/* second  */}
                <div className="sinRev">

                  <p className="headRev">As a project manager, I've used various B2B construction platforms, but this website stands out for its user-friendly interface. The layout is intuitive, making it incredibly easy to navigate through different services and products. Finding what I need takes minimal time, and the detailed descriptions of each item help in making the right choices for our projects. The efficiency and ease of use have made this my go-to resource for construction needs.</p>

                  <div className="ReProRating">

                    <div className="rePro">

                      <img src={p1} alt="" />
                      <span>Carlos Alvarez</span>


                    </div>

                    <div className="rating">
                      <img src={rating} alt="" />
                      <span>04/08/23</span>
                    </div>

                  </div>



                </div>

              </div>

              {/* right side */}
              <div className="shErRig">

                {/* first  */}
                <div className="sinRev">

                  <p className="headRev">The user experience on this B2B construction website is top-notch. Navigating through various services and finding exactly what I need is incredibly straightforward.</p>

                  <div className="ReProRating">

                    <div className="rePro">

                      <img src={p1} alt="" />
                      <span>Anita Desai</span>


                    </div>

                    <div className="rating">
                      <img src={rating} alt="" />
                      <span>04/08/23</span>
                    </div>

                  </div>



                </div>

                {/* second  */}
                <div className="sinRev">

                  <p className="headRev">As a project manager, I've used various B2B construction platforms, but this website stands out for its user-friendly interface. The layout is intuitive, making it incredibly easy to navigate through different services and products. Finding what I need takes minimal time, and the detailed descriptions of each item help in making the right choices for our projects. The efficiency and ease of use have made this my go-to resource for construction needs.</p>

                  <div className="ReProRating">

                    <div className="rePro">

                      <img src={p1} alt="" />
                      <span>Grace Liu</span>


                    </div>

                    <div className="rating">
                      <img src={rating} alt="" />
                      <span>04/08/23</span>
                    </div>

                  </div>



                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="setacv" id="Accordion_section_pricing">
        <div className="Accordion_section_pricing_detail">
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
                  <span>How is project management and communication handled by your platform?</span>
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
                    BuildLink Network employs advanced project management and communication features to streamline collaboration. Users can create, monitor, and update projects within the platform, ensuring transparency. Integrated messaging and collaboration tools facilitate real-time communication among stakeholders, fostering efficient project coordination. The Autodesk Construction Cloud integration enhances data control, reducing errors and enhancing overall project management effectiveness.
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
                  <span>Can this platform be used for commercial purpose?</span>
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
                    Yes, BuildLink Network is designed for commercial purposes within the construction industry. It caters to a wide range of professionals, including contractors, suppliers, project managers, and more, facilitating collaboration, project management, and networking to support commercial activities within the construction sector.

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
                  <span>How can I showcase my products on the platform? </span>
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
                    A: Simply create a profile, upload product details in the marketplace showcase, and enhance visibility among potential buyers.
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
                  <span>Is the platform suitable for small businesses? </span>
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
                    Yes, BuildLink Network accommodates businesses of all sizes, providing opportunities for networking, project matching, and product showcasing.
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
                    How does the platform handle data security?
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
                    BuildLink Network prioritizes data security, implementing robust measures to safeguard user information and ensure a secure online environment.
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
                  <span>Can I track the performance of my projects on the platform?</span>
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
                    Yes, utilize the platform's analytics tools to track project performance, evaluate key metrics, and make data-driven decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* ===========6th swe========= */}
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-5">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right gap-3"
                  data-accordion-target="#accordion-collapse-body-6"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-6"
                  onClick={() => setOpen6(!open6)}
                >
                  <span>Is there customer support available?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr6}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Yes, BuildLink Network offers customer support to address inquiries, provide assistance, and ensure a positive user experience.

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
                  onClick={() => setOpen7(!open7)}
                >
                  <span>Can I collaborate with other professionals outside my network? </span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr7}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Absolutely, the platform encourages collaborative networking, allowing users to connect with a diverse range of industry professionals beyond their immediate network.
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
                  onClick={() => setOpen8(!open8)}
                >
                  <span>How does the platform assist in vendor management? </span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr8}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    BuildLink Network simplifies vendor management through features like verified reviews, ensuring users make informed decisions when selecting suppliers for their projects.

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
                  onClick={() => setOpen9(!open9)}
                >
                  <span>What advantages does Autodesk Construction Cloud integration bring? </span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr9}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    The integration enhances data management, reduces data silos, and provides centralized control, ensuring consistency and efficiency in project workflows.
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
                  onClick={() => setOpen10(!open10)}
                >
                  <span>How can I stay updated on market trends within the platform?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr10}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Leverage the platform's data insights feature, offering real-time information on market trends, helping users stay informed and make strategic decisions.
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
                  onClick={() => setOpen11(!open11)}
                >
                  <span>Can I customize my profile for targeted networking? </span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr11}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Yes, users can customize their profiles to highlight specific expertise, facilitating targeted networking opportunities aligned with their business goals.
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
                  onClick={() => setOpen12(!open12)}
                >
                  <span>How do Buildlink network ensure project quality and safty ?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr12}
              >
                <div className="p-4   inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                  BuildLink Network prioritizes project quality and safety by integrating robust collaboration tools, enabling real-time communication among stakeholders. The platform's adherence to industry standards, data-driven insights, and document management features ensure compliance. With Autodesk Construction Cloud integration, it fosters centralized data control, reducing errors and enhancing overall project quality and safety.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="home_last_section">

        <div className="home_last_section_container">

          <div className="home_last_section_flex">

            <div className="home_last_section_first">
              <h2>Connect with your next client on BuildLink Network</h2>
              <p>
                Get in front of millions of active B2B buyers worldwide inside
                the leading global business services marketplace.
              </p>
              <button onClick={() => {
                localStorage.getItem('b2b_user') ? navigate('/personalInformation') : notify("danger", "need to signin before creating profile")
              }}><span>Create a Profile</span></button>
            </div>

            <div className="home_last_section_second">
              {" "}
              <hr />
            </div>

            <div className="home_last_section_third">
              <h2>Share the love!</h2>
              <p>
                Tell us how BuildLink Network helps in your process, and you
                could be featured on this page.
              </p>
              <a onClick={() => {
                localStorage.getItem('b2b_user') ? navigate('/personalInformation') : notify("error", "need to signin before creating profile")
              }} href="#"> Create a Profile</a>
            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Home;
