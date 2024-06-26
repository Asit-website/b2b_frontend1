import React, { useState, useEffect } from "react";
import "./personalInformation.css";
import photo from "../image/photo.png";
import { useMain } from "../hooks/useMain";
import { useNavigate } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import Footer from "../common/Footer"

function PersonalInformation({ notify, userImage, setUserImage, imageId, setImageId }) {
  const { updateUser, deleteImage } = useMain();
  const [value, setValue] = useState({});
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // let user = JSON.parse(localStorage.getItem('b2b_user'));

  useEffect(() => {
    let user1 = JSON?.parse(localStorage.getItem("b2b_user"));
    setValue({ ...user1, password: "" });
  }, [localStorage.getItem("b2b_user")]);

  const handleChange = (e) => {
    if (e.target.name === "file" && e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        // localStorage.setItem("img", e.target.result);
        localStorage.setItem("img", setImage(e.target.result));
      };

      reader.readAsDataURL(e.target.files[0]);
      setValue({ ...value, [e.target.name]: e.target.files[0] });

      console.log("if", e.target.files[0]);
    } else {
      setValue({ ...value, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);

    // if (!value.password) {
    //   value.password = '';
    // }

    // if (!value.password1) {
    //   value.password1 = '';
    // }
    // if (value.password !== value.password1) {
    //   notify(false, "Password and confirm password must be same");
    //   return;
    // }

    console.log("value" ,value._id);

    const ans = await updateUser({ ...value, userId: value._id });
     console.log("ans" ,ans);

    if (ans?.data?.img?.url) {
      setUserImage(ans?.data?.img?.url);
    }
    if (ans?.data?.img?.id) {
      setImageId(ans?.data?.img?.url);
    }

    localStorage.setItem("b2b_user", JSON.stringify(ans.data));

    if (ans.status) {
      notify(ans.status, ans.message);
      // setValue({});
      // navigate("/endUser/myProfile");
    } else {
      console.log("error");
    }
  };

  const handlePoint = (e) => {
    e.preventDefault();
    setValue({
      name: "",
      phone: "",
      email: "",
      website: "",
      budget: "",
      categoryies: "",
      location: "",
      aboutCompany: "",
      twiter: "",
      facebook: "",
      linkdin: "",
      insta: "",
      city: "",
    });
    setImage(null);
    setUserImage(null);
  };

  const deleteImageHandler = async () => {

    const ans = await deleteImage({ imageId, userId: value._id });

    if (ans.status) {
      notify(ans.status, "Image delete successfully");
      localStorage.setItem("b2b_user", JSON.stringify(ans.data));
      setUserImage(null);
      setImageId(null);
      setImage(null)

    } else {
      console.log("error");
    }
  }

  return (
    <div className="myPersonal">

      <Sidebar />

      <div className="persInfoWrap">

        <form onSubmit={handleSubmit}>

          <div className="persInfoCont">

            <div className="persInfo">
              <h2>Personal Information</h2>

              {/* photo  */}
              <div className="photoWrap">

                <img className="photosap" src={userImage ? userImage : image ? image : photo} alt="" />

                {userImage ? (
                  <button type="button" onClick={deleteImageHandler} className="deleteBtn"><span>Delete</span></button>
                ) : (

                  <button type="button" className="pos">
                    <label htmlFor="">Choose file</label>
                    <input className="takeInputPhoto" name="file" onChange={handleChange} type="file" />
                  </button>
                )}
              </div>

              <div className="comNameWrap">
                <label htmlFor="name" className="nameCom">
                  <p>Name/Company *</p>
                  <input
                    id="name"
                    name="name"
                    value={value.name}
                    onChange={handleChange}
                    type="text"
                    className="cmpName"
                  />
                </label>

                <div className="conEmilWrap">
                  <label htmlFor="phone">
                    <p>Contact No *</p>
                    <input
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      value={value.phone}
                      type="text"
                    />
                  </label>

                  <label htmlFor="email">
                    <p>Email *</p>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={value.email}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="aboutCont">
              <h2>About</h2>

              <div className="webbud">
                <label htmlFor="categoryies">
                  <p>Service *</p>
                  <select
                    className=" w-100"
                    name="categoryies"
                    id="categoryies"
                    onChange={handleChange}
                    value={value.categoryies}
                  >
                    <option>Civil contractors</option>
                    <option>Architects</option>
                    <option>Consulting Engineers</option>
                    <option>Interior Designers</option>
                    <option>Fense</option>
                    <option>Main Contractors</option>
                    <option>Hauling & Excavating</option>
                    <option>Main contractors</option>
                    <option>Hauling & excavating</option>
                    <option>Structural contractors</option>
                    <option>Masonry</option>
                    <option>Carpenters</option>
                    <option>Concrete pouring</option>
                    <option>Mechanical contractors</option>
                    <option>Electrical contractors</option>
                    <option>Plumbing contractors</option>
                    <option>Fire protection</option>
                    <option>Roofing contractors</option>
                    <option>Painting contractors</option>
                    <option>Glass works</option>
                    <option>Drainage contractors</option>
                    <option>Garden /Lawn works</option>
                    <option>Wall /Ceiling</option>
                    <option>Insulation</option>
                    <option>Realtors</option>
                    <option>Lenders</option>
                    <option>Investors</option>
                    <option>Owners</option>
                  </select>
                </label>
              </div>

              <div className="webbud">
                <label htmlFor="website">
                  <p>Website *</p>
                  <input
                    id="website"
                    onChange={handleChange}
                    name="website"
                    value={value.website}
                    type="text"
                    placeholder="https://"
                  />
                </label>

                <label htmlFor="budget">
                  <p>Budget *</p>
                  <input
                    id="budget"
                    name="budget"
                    onChange={handleChange}
                    value={value.budget}
                    type="text"
                    placeholder=""
                  />
                </label>
              </div>

              <div className="webbud">
                <label htmlFor="city">
                  <p>City *</p>
                  {/* <select
                    name="city"
                    id="city"
                    onChange={handleChange}
                    value={value.city}
                  >
                    
                    <option>city1</option>
                    <option>city2</option>
                    <option>city3</option>
                    <option>city4</option>
                    <option>city5</option>
                    <option>city6</option>
                  </select> */}
                  <input type="Enter City Name" name="city" id="city" value={value.city} onChange={handleChange} />
                </label>

                <label htmlFor="location">
                  <p>Location *</p>
                  <input
                    id="location"
                    name="location"
                    onChange={handleChange}
                    value={value.location}
                    type="text"
                    placeholder=""
                  />
                </label>
              </div>

              <div className="webbud">
                <label htmlFor="aboutCompany">
                  <p>About Company *</p>
                  <textarea
                    name="aboutCompany"
                    id="aboutCompany"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    value={value.aboutCompany}
                  ></textarea>
                </label>
              </div>
            </div>

            <div className="aboutCont">
              <h2>Social Media</h2>

              <div className="webbud">
                <label htmlFor="twiter">
                  <p>Twitter</p>
                  <input
                    id="twiter"
                    name="twiter"
                    onChange={handleChange}
                    value={value.twiter}
                    type="text"
                    placeholder="https://"
                  />
                </label>
                <label htmlFor="facebook">
                  <p>Facebook</p>
                  <input
                    id="facebook"
                    name="facebook"
                    onChange={handleChange}
                    value={value.facebook}
                    type="text"
                    placeholder="https://"
                  />
                </label>
              </div>

              <div className="webbud">
                <label htmlFor="linkdin">
                  <p>Linkedin</p>
                  <input
                    id="linkdin"
                    name="linkdin"
                    value={value.linkdin}
                    onChange={handleChange}
                    type="text"
                    placeholder="https://"
                  />
                </label>
                <label htmlFor="insta">
                  <p>Insta</p>
                  <input
                    id="insta"
                    name="insta"
                    value={value.insta}
                    onChange={handleChange}
                    type="text"
                    placeholder="https://"
                  />
                </label>
              </div>
            </div>

            <div className="cancelSaveBtn">
              <button type="button" onClick={handlePoint} className="cancel">
                <span>Cancel</span>
              </button>
              <button type="submit" className="saveChange">
                <span>Save Change</span>
              </button>
            </div>

          </div>

        </form>

      </div>

      <Footer adjustFirst={true} />
    </div>
  );
}

export default PersonalInformation;
