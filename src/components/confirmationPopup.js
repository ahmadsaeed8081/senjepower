import React, { useEffect, useState } from "react";
import Modal2 from "./Modal2";
const ConfirmationPopup = ({ setOpen, unstaking,unstaking_req,penality }) => {


  const [open2, setOpen2] = useState(false);



  return (
    <div className="confirmation-popup-body flex flex-col justify-between">
      <h1 className="title"> 🚨 Notification: 
</h1>
      <p className="desc">
      We regret to inform you that staking is suspended indefinitely. Please refrain from staking coins. Starting from October 25th, staking deposits will transition to SPC Exchange.
    </p>
      <p className="desc">

           आप सभी सेंजे पॉवर्स परिवार को सूचित किया जाता है कि SP coin का स्टेकिंग अभी अस्थाई रूप से बंद है। कृपया अभी क्वॉइन स्टेक ना करें। 25 अक्टूबर से स्टेकिंग, डिपॉजिट व सेल डायरेक्ट SPC एक्सचेंज पर होगी।

      </p>
      <div className="actions flex items-center justify-center w-full">
        {/* <button  
          className="btn-c button"
          onClick={(e) => {
            setOpen(false);
          }}
        >
          Unstake Request
        </button> */}
        {/* <button
          className="btn-c button"
          style={{ backgroundColor:"hsla(11,80%,45%,1)",border:"red" }}
          onClick={(e) => {

            setOpen2(true);
            // setOpen(false);

          }}
        >
        Immediate Unstake

        </button> */}
      </div>
    </div>
  );
};

export default ConfirmationPopup;
