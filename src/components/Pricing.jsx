import React, { useEffect, useState } from "react";
import gt1 from "../image/pricing_img.svg";
import t from "../image/try.svg";
import Footer from "../common/Footer";
import { useMain } from '../hooks/useMain';
import ds from '../image/ds.jpg';
import { loadStripe } from '@stripe/stripe-js';

const Pricing = () => {
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

  const [value, setValue] = useState({});

  useEffect(() => {
    let user1 = JSON?.parse(localStorage.getItem("b2b_user"));
    setValue({ ...user1, password: "" });
  }, [localStorage.getItem("b2b_user")]);


  // for payment integration 
  const makePayment = async (amount , type) => {
    const stripe = await loadStripe("pk_test_51OmCLvSBps3k53HfMHZGby0kGGTZ5KTUVUpjkwUIO905MFoqNHtd0PWRj4KeMdVud0bCpsdHQSmetCHwtfaD1mnk003JvDFm9z");

    const body = {
      amount: amount , 
      subscription_type:type , 
       userId : value._id
    }

    const token = localStorage.getItem('b2b_token');

    const headers = {
      "content-type": "application/json" , 
      'Authorization': `Bearer ${token}`
    }

    // https://backend.bln.obtechenterprise.com
    
    const response = await fetch("https://backend.bln.obtechenterprise.com/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })

    const session = await response.json();

    localStorage.setItem('sessionDetail', JSON.stringify(session));

    //  redirect 
    const result = stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result?.error) {
      console.log(result.error);
    }

  }

  const {getSubscription} = useMain();

   const [allCardDetail , setAllCardDetail] = useState([]);

   const fetchCartPrice = async()=>{
    try{

      const resp = await getSubscription();

      if(resp.status){
        setAllCardDetail(resp?.data);
      }

    } catch(error){
      console.log(error);
    }
   }

   useEffect(()=>{
   fetchCartPrice();
   },[])

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
              {allCardDetail[0]?.subscription_type}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-m font-large text-gray-500 dark:text-gray-400 ser">
                USD ${allCardDetail[0]?.subsciption_price}/month
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
                {allCardDetail[0]?.desc1}
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
                {allCardDetail[0]?.desc2}
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
                {allCardDetail[0]?.desc3}
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
                {allCardDetail[0]?.desc4}
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

        {/* another card  */}

        <div id="procard">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">
            <h5 className="mb-1 text-xxl font-large text-Basic-500 dark:text-Basic-400 proh5">
            {allCardDetail[1]?.subscription_type}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-m ser font-large text-gray-500 dark:text-gray-400">
              USD ${allCardDetail[1]?.subsciption_price}/month  
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
                {allCardDetail[1]?.desc1}
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
                {allCardDetail[1]?.desc2}
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
                {allCardDetail[1]?.desc3}
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
                {allCardDetail[1]?.desc4}
                </span>
              </li>
            </ul>
            <button
              onClick={() => makePayment(allCardDetail[1]?.subsciption_price , allCardDetail[1]?.subscription_type)}
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

        {/* another */}

        <div id="procard" className="proding">
          <div className="headery">
            <h2>Recommended</h2>
          </div>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 ">

            <h5 className="mb-1 text-xxl font-large text-Basic-500 dark:text-Basic-400 proh5">
            {allCardDetail[2]?.subscription_type}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-m font-large text-gray-500 dark:text-gray-400 ser">
              USD ${allCardDetail[2]?.subsciption_price}/month 
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
                {allCardDetail[2]?.desc1}
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
                {allCardDetail[2]?.desc2}
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
                {allCardDetail[2]?.desc3}
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
                {allCardDetail[2]?.desc4}
                </span>
              </li>
            </ul>
            <button onClick={() => makePayment(allCardDetail[2]?.subsciption_price ,  allCardDetail[2]?.subscription_type)}
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

      </div>

      <div className="main_intro">
        <div className="intro">
          <div className="intro_flex">
            <div className="intro-left">
              <div className="intro_div">
                <h2>Constructing Dreams in 3D: Where Vision Meets Precision for Construction Professionals.</h2>
                <p>
                Start constructing your dreams with precision – unlock the power of 3D vision for unparalleled excellence in your construction projects
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
                <img src={ds} alt="gt1" />
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

      <div className="ready_main">
        <div className="ready">
          <div className="ready_div">
            <h4>Ready to get started? </h4>
            <h2>Share your experience & make profile</h2>
            <button>Get in touch with us</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
