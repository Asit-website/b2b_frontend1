import Sidebar from "../common/Sidebar";
import "./postProject.css";
import ppHero from "../image/ppHero.png";
import Dropzone from 'react-dropzone'
import upload from "../image/upload.png"
import Footer from "../common/Footer";
import { useMain } from "../hooks/useMain";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";




function PostProject() {

  const [value, setValue] = useState({});

  const [allImages , setAllImages] = useState([]);

  const { projectPostImage ,projectDeleteImg ,postProject } = useMain();

  const [formData , setFormData] = useState({
    title:"",
    location:"",
    desc:""
  })

  const handleImageUpload = async (acceptedFiles) => {

    for (const file of acceptedFiles) {
      const ans = await projectPostImage({ userId: value._id, file }); 
      console.log("uploadiMg" ,ans); 
      setAllImages(prev => ([...prev, ...(ans?.data || [])]));

    }
  };

  const removeImageByPublicId = (publicIdToRemove) => {
    setAllImages(prev => prev.filter(image => image.public_id !== publicIdToRemove));
  };

  const deleteUploadImg = async(id)=>{
     const ans = await projectDeleteImg({id});
     console.log("ans" ,ans);
     removeImageByPublicId(id);
  }

  useEffect(() => {
    let user1 = JSON?.parse(localStorage.getItem("b2b_user"));
    setValue({ ...user1, password: "" });
  }, [localStorage.getItem("b2b_user")]);


  const changeHandler = (e)=>{

    e.preventDefault();
    const {name,value} = e.target;

    setFormData((prev)=>({
      ...prev ,
      [name]:value
    }))
  }


  const projectSubmitHandler = async(e)=>{

    e.preventDefault();


    if(allImages.length === 0){
      return alert("Please choose the iamges");
    }

    const {title , desc , location} = formData;


    const ans = await postProject({ title, desc, location, file: allImages });

 console.log("ans", ans);

    if(ans?.status){
      alert("Successfuly created the project");
      setFormData({
        title: "",
        location: "",
        desc: ""
      });

    setAllImages([]);
    }
    else {
      alert("Something went wrong");
    }
    console.log("ans" ,ans);
  }
  
  
  return (
    <>
    
    <div className="PPWrap">

      <Sidebar />

      <div className="PPRightContain">

         <div className="prmain">

    
        <div className="ppFirSec1Wrap">
          {/* hero section */}
          <div className="ppFirSec1">
            {/* left side */}
            <div className="ppFS1Left">
              <h2>Post a Project</h2>
              <p>
                Share your projects to reach BuildLink Network audience and
                attract new clients. You can post new builds, renovations, real
                estate listings, vacation rentals, multifamily buildings, or any
                other type of home.
              </p>
            </div>
            {/* right side */}
            <div className="ppFS1Right">
              <img src={ppHero} alt="" />
            </div>
          </div>

        </div>

        {/* second sec2 */}
        <div className="ppSec2Wrap">

           <div className="pSec2Cont">

            {/* left side */}
            <form onSubmit={projectSubmitHandler} className="pSec2Left">

               {/* top */}
               <div className="pS2tOP">

                <p className="head">Enter Details</p>


{/* mid */}
                <div className="ps2mid">
                        
                        {/* first  */}
                        <div className="midSing">
                        <h2>Project Name</h2>
                        <p>Short and Sweet. Please do not write a story type headline or the full address here.</p>
                        <input required type="text" placeholder="The Miller House" name="title" onChange={changeHandler} value={formData.title} />
                        </div>

                        {/* sercond  */}
                        <div className="midSing">
                        <h2>Location</h2>
                        <p>Actual street address will be kept private. Please provide at least a city.</p>
                        <input required type="text" placeholder="Location" name="location" onChange={changeHandler} value={formData.location} />
                        </div>

                        {/* third  */}
                        <div className="midSing">
                        <h2>Description</h2>
                        <p>We are more likely to feature a project with a description than not.</p>
                        <textarea required placeholder="Add Description" id="" cols="30" rows="10" name="desc" onChange={changeHandler} value={formData.desc} />
                        </div>



                </div>

                 {/* botton */}
                 <div className="ps2Bottom">
                    <h2 className="hd">Add Photos, Drawings, and Floorplans</h2>
                    <p className="pp">For best results, we recommend photos be a minimum of 800 pixels by 800 pixels and no larger than 10mb.Only .gif, .jpg, and .png file types are supported.</p>

                    <Dropzone   onDrop={handleImageUpload}>
  {({getRootProps, getInputProps}) => (
    <section className="dropzone">
      <div {...getRootProps()} className="drapWrap">
        <input {...getInputProps()}  />
        <img className="upload" src={upload} alt="" />
        <p className="draptEXXT">Drag photos here or browse your device</p>
      </div>
    </section>
  )}
</Dropzone>
 
                 </div>

                 {/* uploaded iamges  */}
                 {
                  allImages?.length >0 && 
                  <div className="allUplaodedImage">

                    {
                      allImages?.map((data , index)=>(
                        <div className="singleImg" key={index}>
                                
                                 <img src={data.url} alt="" />

                                 <ImCross onClick={()=>deleteUploadImg(data?.public_id)} className="imgCross" />



                        </div>
                      ))
                    }

                  </div>
                 }

               </div>

               {/* bottom */}
               <div className="butnBotn">
                <button type="submit" className="publishBtn"><span>Publish</span></button>
               </div>

            </form>

            {/* right side */}
              <div className="pSec2Right">

                     <div className="sinSec2R">
                        <h2>Get featured by BuildLink Network</h2>
                        <p>Each project is reviewed by BuildLink Network editors for possible feature online or in print.</p>
                     </div>
                     
                     <div className="sinSec2R">
                        <h2>Generate leads</h2>
                        <p>Post vacation homes and real estate listings, too.</p>
                     </div>
                     <div className="sinSec2R">
                        <h2>Share with your community</h2>
                        <p>Every project posted to Dwell includes a public link for easy sharing.</p>
                     </div>


              </div>

           </div>

        </div>

        </div>

      </div>
    </div>

    <Footer adjustFirst={true} />

    </>
  );
}

export default PostProject;
