import React from "react";
import left1 from "../image/home_left1.png";
import join1 from "../image/join1.png";
import join2 from "../image/join2.png";
import join3 from "../image/join3.png";
import join4 from "../image/join4.png";
import join5 from "../image/join5.png";
import join6 from "../image/join6.png";
import right1 from "../image/right_home.png";

const Home = () => {
  return (
    <>
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

              <button>
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
                      fill="#2C868F"
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
                  <p>Fense</p>
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
                  <p>Main Contractors</p>
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
                      fill="#2C868F"
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
                  <p>Fense</p>
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
                  <p>Main Contractors</p>
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
                      fill="#2C868F"
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
                  <p>Fense</p>
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
                  <p>Main Contractors</p>
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
                      fill="#2C868F"
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
                  <p>Fense</p>
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
                  <p>Main Contractors</p>
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
                      fill="#2C868F"
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
                  <p>Fense</p>
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
                  <p>Main Contractors</p>
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
                      fill="#2C868F"
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
                  <p>Fense</p>
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
                <div className="back_section1"></div>
              </div>
            </div>
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
                <div className="back_section2"></div>
              </div>
            </div>
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
                <div className="back_section3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home_solution">
        <div className="home_solution_container">
          <div className="home_solution_container_buttons">
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
            <button className="btn_first2">
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
                  d="M32.1799 22H8.15991V26H32.1799V32L40.1599 24L32.1799 16V22Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
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
                  BuildLink Network makes it easy to track estimates and keep in
                  touch with general contractors.
                </p>
                <span>BEN TERRY, Director of Marketing</span>
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
              <button><span>Create a Profile</span></button>
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
              <a href="#"> Create a Profile</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
