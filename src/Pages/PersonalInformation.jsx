import "./personalInformation.css"
import photo from "../image/photo.png"

function PersonalInformation(){
    return (
        <div className="persInfoWrap">

            <div className="persInfoCont">

                 <div className="persInfo">

                 <h2>Personal Information</h2>

                {/* photo  */}
                <div className="photoWrap">
                    <img src={photo} alt="" />

                    <button><span>Choose file</span>

                    </button>

                </div>

                <div className="comNameWrap">

                    <label className="nameCom">
                        <p>Name/Company *</p>
                        <input type="text" placeholder="Emerson Gutters and Drainage" className="cmpName" />
                    </label>

                    <div className="conEmilWrap">

                      <label htmlFor="">
                        <p>Contact No *</p>
                        <input type="text" />
                      </label>

                      <label htmlFor="">
                        <p>Email *</p>
                        <input type="text" />
                      </label>

                    </div>

                </div>

                 </div>

                 <div className="aboutCont">
                    <h2>About</h2>

              <div className="webbud">

                <label htmlFor="">
                    <p>Website *</p>
                    <input type="text" placeholder="https://" />
                </label>
                
                <label htmlFor="">
                    <p>Budget *</p>
                    <input type="text" placeholder="" />
                </label>


              </div>

              <div className="webbud">

                <label htmlFor="">
                    <p>Category *</p>
                   <select name="" id="" >

                    <option value="" >Select</option>
                   </select>
                </label>

                <label htmlFor="">
                    <p>Location *</p>
                    <input type="text" placeholder="" />
                </label>


              </div>

              <div className="webbud">

           

                <label htmlFor="">
                    <p>About Company *</p>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>


              </div>

              



                 </div>


                 <div className="aboutCont">
                    <h2>Social Media</h2>

              <div className="webbud">

                <label htmlFor="">
                    <p>Twitter</p>
                    <input type="text" placeholder="https://" />
                </label>
                <label htmlFor="">
                    <p>Facebook</p>
                    <input type="text" placeholder="https://" />
                </label>
                
             


              </div>

              <div className="webbud">

                <label htmlFor="">
                    <p>Linkedin</p>
                    <input type="text" placeholder="https://" />
                </label>
                <label htmlFor="">
                    <p>Insta</p>
                    <input type="text" placeholder="https://" />
                </label>
                
             


              </div>

       
              



                 </div>

                 <div className="cancelSaveBtn">

                    <button className="cancel"><span>Cancel</span></button>
                    <button className="saveChange"><span>Save Change</span></button>

                 </div>

            </div>

        </div>
    )
}


export default PersonalInformation;