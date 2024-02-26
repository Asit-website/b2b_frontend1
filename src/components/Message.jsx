import { useEffect } from "react";
import { useMain } from "../hooks/useMain";

const Message = () => {

   const { saveUserDetail } = useMain();

   const saveController = async()=>{

      let user1 = JSON?.parse(localStorage.getItem("b2b_user"));

      const  sessionDetail = localStorage.getItem("sessionDetail");
      
      const parsedSessionDetail = JSON.parse(sessionDetail);

       if(sessionDetail){
        const resp = await saveUserDetail({parsedSessionDetail ,userId: user1._id});
          if(resp.status){
            localStorage.removeItem("sessionDetail");
          }
       }
   }

   useEffect(()=>{
      saveController();       
   },[])

  return (
     <>
        <div className="thank_yoiu">
              <div className="thank_msg">
                   <h2>Thank you! we got your Subscription</h2>
              </div>
        </div>
     </>
  )
}

export default Message
