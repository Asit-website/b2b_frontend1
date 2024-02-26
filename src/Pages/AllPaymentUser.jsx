import { useEffect, useState } from "react";
import "./allPaymentUser.css";
import { useMain } from "../hooks/useMain";

function AllPaymentUser() {
  const [allPayment, setAllPayment] = useState([]);

  const { paymentUserFetch } = useMain();

  const fetchAllPayment = async () => {
    const resp = await paymentUserFetch();
    if (resp.status) {
      setAllPayment(resp?.user);
    }
  };

  useEffect(() => {
    fetchAllPayment();
  }, []);


  return (
    <div className="allPymntWrap">
      <div className="pmntCont">
       {
        allPayment.map((item ,index)=>(
            <div key={index} className="singletYPE">
                   <h2 className="subTyep" >{item?.subscription_type} ${item?.subsciption_price}</h2>

                    <div className="allUsers">
                        {
                            item?.users?.length >0 ?
                        
                        item?.users?.map((item , index)=>(
                            <div key={index} className="singleUser">

                                <p>Name : <span>{item?.name}</span></p>
                                <p>Location: <span>{item?.location}</span></p>
                                <p>Email: <span>{item?.email}</span></p>

                            </div>
                        ))
                        :
                        <span className="noUser">No User Found</span>

}
                    </div>
            </div>
        ))
       }
      </div>
    </div>
  );
}

export default AllPaymentUser;
