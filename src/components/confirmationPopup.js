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
     
    </div>
  );
};

export default ConfirmationPopup;
