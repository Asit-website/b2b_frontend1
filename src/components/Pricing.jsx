import React, { useState } from "react";
import gt1 from "../image/pricing_img.svg";
import t from "../image/try.svg";
const Pricing = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
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
  return (
    <>
     <div id="today_section">
      <div className="today_container">
        <div className="today_head">
          <h1>One simple solution for contractors and design pros</h1>
          <p>The easy way to manage your projects, clients, and business — all in one place.</p>
        </div>
      </div>
     </div>
      <div id="procard_section">
        <div id="procard">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
            <h5 className="mb-1 text-xxl font-large text-Basic-500 dark:text-Basic-400 proh5">
              Basic
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-m font-large text-gray-500 dark:text-gray-400 ser">
                USD $0/month
              </span>
            </div>
            <h2 className="proh2">Included in Basic:</h2>
            <ul role="list" className="space-y-3 trt mb-12">
              <li className="flex items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Unlimited online review collection
                </span>
              </li>
              <li className="flex">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Project Capacity: Up to 2 concurrent projects
                </span>
              </li>
              <li className="flex">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Basic Project Management Features
                </span>
              </li>
              <li className="flex ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal text-gray-500 ms-3">
                  Limited Access to Premium Templates
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="probutton bg-#FCFDFD-600 hover:bg-#2C868F-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
            >
              Create a free profile
            </button>
            <p className="propara">
              Or <a href="#">talk to an expert</a>
            </p>
          </div>
        </div>
        <div id="procard" className="proding">
        <div className="headery">
              <h2>Recommended</h2>
          </div>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
         
            <h5 className="mb-1 text-xxl font-large text-Basic-500 dark:text-Basic-400 proh5">
              Enterprise
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-m font-large text-gray-500 dark:text-gray-400 ser">
                USD $125/month
              </span>
            </div>
            <h2 className="proh2">All benefits of Basic, and:</h2>
            <ul role="list" className="space-y-3 trt  mb-12">
              <li className="flex items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400 ms-3">
                  Unlimited online review collection
                </span>
              </li>
              <li className="flex">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Project Capacity: Up to 2 concurrent projects
                </span>
              </li>
              <li className="flex">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Basic Project Management Features
                </span>
              </li>
              <li className="flex ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 ms-3">
                  Limited Access to Premium Templates
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="probutton bg-#FCFDFD-600 hover:bg-#2C868F-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
            >
              Upgrade to Enterprise
            </button>
            <p className="propara">
              Or <a href="#">talk to an expert</a>
            </p>
          </div>
        </div>
        <div id="procard">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
            <h5 className="mb-1 text-xxl font-large text-Basic-500 dark:text-Basic-400 proh5">
              Pro
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-m ser font-large text-gray-500 dark:text-gray-400">
                USD $350/month
              </span>
            </div>
            <h2 className="proh2">All benefits of Basic, and:</h2>
            <ul role="list" className="space-y-3 trt mb-12">
              <li className="flex items-center">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Unlimited online review collection
                </span>
              </li>
              <li className="flex">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Project Capacity: Up to 2 concurrent projects
                </span>
              </li>
              <li className="flex">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 dark:text-gray-400 ms-3">
                  Basic Project Management Features
                </span>
              </li>
              <li className="flex ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_186_993)">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="url(#paint0_linear_186_993)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_186_993"
                      x1={4}
                      y1="11.0828"
                      x2={20}
                      y2="11.0828"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3C716A" />
                      <stop offset={1} stopColor="#4F9C8E" />
                    </linearGradient>
                    <clipPath id="clip0_186_993">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-base font-normal  text-gray-500 ms-3">
                  Limited Access to Premium Templates
                </span>
              </li>
            </ul>
            <button
              type="button"
              className="probutton bg-#FCFDFD-600 hover:bg-#2C868F-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-3 inline-flex justify-center w-full text-center"
            >
              Upgrade to Pro
            </button>
            <p className="propara">
              Or <a href="#">talk to an expert</a>
            </p>
          </div>
        </div>
      </div>

      <div className="main_intro">
        <div className="intro">
          <div className="intro_flex">
            <div className="intro-left">
              <div className="intro_div">
                <h2>Introducing the new AI Stylist</h2>
                <p>
                  Create an AI-powered project brief and send to best-fit <br />
                  services providers all at once
                </p>
                <div className="intro_btn">
                  <button className="try_btn">
                    <img src={t} alt="try" />
                    <span>Try Now</span>
                  </button>
                  <button className="Learn_btn">
                    <span>Learn more</span>
                  </button>
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

      <div id="Accordion_section_pricing">
        <div className="Accordion_section_pricing_detail">
          <div className="Accordion_section_pricing_head">
            <h2>Frequently asked questions</h2>
          </div>
          <div id="accordion-collapse" data-accordion="collapse">
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-#161B32-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-#D8DBEB-700 dark:text-gray-400   gap-3 "
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                  onClick={() => setOpen(!open)}
                >
                  <span>What Services Do You Offer?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-1"
                style={stylePerr}
              >
                <div className="p-4  dark:bg-gray-900 inner_div">
                  <p className="">
                    Potential clients want to understand the range of
                    construction services your company provides. This can
                    include general contracting, project management,
                    design-build services, commercial construction, renovations,
                    and specialized construction like industrial or
                    infrastructure projects. It’s important to provide detailed
                    descriptions of each service, accompanied by case studies or
                    examples of past projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-2">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-#161B32-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-#D8DBEB-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 "
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                  onClick={() => setOpen1(!open1)}
                >
                  <span>What Is Your Experience and Track Record?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
                style={stylePerr1}
              >
                <div className="p-4  dark:bg-gray-900 inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Potential clients want to understand the range of
                    construction services your company provides. This can
                    include general contracting, project management,
                    design-build services, commercial construction, renovations,
                    and specialized construction like industrial or
                    infrastructure projects. It’s important to provide detailed
                    descriptions of each service, accompanied by case studies or
                    examples of past projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-3">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-#161B32-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-#D8DBEB-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 "
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                  onClick={() => setOpen2(!open2)}
                >
                  <span>How Do You Ensure Project Quality and Safety?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3"
                style={stylePerr2}
              >
                <div className="p-4  dark:bg-gray-900 inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Potential clients want to understand the range of
                    construction services your company provides. This can
                    include general contracting, project management,
                    design-build services, commercial construction, renovations,
                    and specialized construction like industrial or
                    infrastructure projects. It’s important to provide detailed
                    descriptions of each service, accompanied by case studies or
                    examples of past projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-4">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-#161B32-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-#D8DBEB-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 "
                  data-accordion-target="#accordion-collapse-body-4"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-4"
                  onClick={() => setOpen3(!open3)}
                >
                  <span>What Are Your Pricing and Payment Terms?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-4"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-4"
                style={stylePerr3}
              >
                <div className="p-4  dark:bg-gray-900 inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Potential clients want to understand the range of
                    construction services your company provides. This can
                    include general contracting, project management,
                    design-build services, commercial construction, renovations,
                    and specialized construction like industrial or
                    infrastructure projects. It’s important to provide detailed
                    descriptions of each service, accompanied by case studies or
                    examples of past projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-5">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-#161B32-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-#D8DBEB-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 "
                  data-accordion-target="#accordion-collapse-body-5"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-5"
                  onClick={() => setOpen4(!open4)}
                >
                  <span>
                    How Do You Handle Project Management and Communication?
                  </span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-5"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-5"
                style={stylePerr4}
              >
                <div className="p-4  dark:bg-gray-900 inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Potential clients want to understand the range of
                    construction services your company provides. This can
                    include general contracting, project management,
                    design-build services, commercial construction, renovations,
                    and specialized construction like industrial or
                    infrastructure projects. It’s important to provide detailed
                    descriptions of each service, accompanied by case studies or
                    examples of past projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="border  border-#D8DBEB-200 rounded-xl acc_div">
              <h2 id="accordion-collapse-heading-5">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-4 font-medium rtl:text-right text-#161B32-700  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-#D8DBEB-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 "
                  data-accordion-target="#accordion-collapse-body-6"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-6"
                  onClick={() => setOpen5(!open5)}
                >
                  <span>Can I use this for commercial purposes?</span>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-6"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-6"
                style={stylePerr5}
              >
                <div className="p-4  dark:bg-gray-900 inner_div">
                  <p className="text-#596080-500 dark:text-#596080-400">
                    Potential clients want to understand the range of
                    construction services your company provides. This can
                    include general contracting, project management,
                    design-build services, commercial construction, renovations,
                    and specialized construction like industrial or
                    infrastructure projects. It’s important to provide detailed
                    descriptions of each service, accompanied by case studies or
                    examples of past projects.
                  </p>
                </div>
              </div>
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
    </>
  );
};

export default Pricing;
