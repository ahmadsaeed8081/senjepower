import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";
import CardDetail from "../../components/CardDetail";
import Select from "react-select";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  cont_address,
  cont_abi,
} from "../../../src/components/config";
import Web3 from "web3";
import { useLocation } from "react-router-dom";
import ConfirmationPopup from "../../components/confirmationPopup.js";
import Modal2 from "../../components/Modal2";

import { CopyIcon, BallIcon, MLNIcon, MLNIcon2, LockIcon } from "../../icons";
import { Padding } from "@mui/icons-material";
import Countdown from "../../components/Countdown/Time";
import { useContractReads,useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction, usePublicClient } from 'wagmi'
import {useNetwork,  useSwitchNetwork } from 'wagmi'
import Header from "../../components/Header";

import { useAccount, useDisconnect } from 'wagmi'

const Main = (props) => {

  const { address, isConnecting ,isDisconnected} = useAccount()
  const { chain } = useNetwork()


  const [open2, setOpen2] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [isWalletConnected, setisWalletConnected] = useState(false);
  const [investment, setInvestment] = useState("");
  const [ROI, set_ROI] = useState(0);
  const [Expected_return, set_Expected_return] = useState(0);
  const [curr_time, set_curr_time] = useState(0);
  const [total_withdraw_reaward, set_total_withdraw_reaward] = useState(0);
  const [withdraw_Amount, set_withdraw_Amount] = useState("");
  const [after_Withdraw, set_after_withdraw] = useState("");
  const [result, set_result] = useState("");

  const [totlaInvestment, setTotalInvestment] = useState(0);
  const [totalReward, setwithrawableAmount] = useState("0");
  const [totalEarning, set_totalEarning] = useState("0");

  const [ref_data, set_Ref_data] = useState("0");
  const [ref_data1, set_Ref_data1] = useState("0");
  const [balance, setBalance] = useState(0);
  const [minimum_investment, set_minimum_investment] = useState(0);
  const [Allinvestment, set_Allinvestment] = useState([]);
  const [Allinvestment_earning, set_Allinvestment_earning] = useState([]);

  const [totalbusiness, setbusiness] = useState("0");

  const [totalReferrals, settotalReferrals] = useState(0);
  const [referral, setReferral] = useState("0x0000000000000000000000000000000000000000");
  const [ref_from, set_ref_from] = useState("0");

  const [user, setUser] = useState("Connect your wallet");

  const [state, setState] = useState({
    days: 0,
    minutes: 0,
    hours: 0,
    seconds: 0,
    time_up: "",
    // bid_time: selectedAmount,
  });

  const CHAIN_ID = "3699";
  const CHAIN_ID1 = "0xe73";

//   const {  data:stakeResult_withdrawReward, isLoading2_withdrawReward, isSuccess2_withdrawReward, write:withdraw } = useContractWrite({
 
//     address: cont_address,
//     abi: cont_abi,
//     functionName: 'withdrawReward',
//     args:[((Number(withdraw_Amount))*10**18).toString()],


// })




const { config:investConfig } = usePrepareContractWrite({
  address: cont_address,
  abi: cont_abi,
  functionName: 'invest',
  args: [referral],
  value: Convert_To_Wei(Number(investment)+(Number(investment)*0.25/100)),
  onSuccess(data) {
    mount();
    console.log('Success', data)
  },

})
const { data:stakeResult, isLoading2, isSuccess2, write:Investing } = useContractWrite(investConfig)




const { config:claimRewardConfig } = usePrepareContractWrite({
  address: cont_address,
  abi: cont_abi,
  functionName: 'withdrawReward',
  args: [Convert_To_Wei(Number(withdraw_Amount))],

})
const { data:stakeResult_withdrawReward, isLoading2_withdrawReward, isSuccess2_withdrawReward, write:withdraw } = useContractWrite(claimRewardConfig)




const { chains, error, isLoading, pendingChainId, switchNetwork:reward_switch } =
useSwitchNetwork({
  chainId: CHAIN_ID1,
  // throwForSwitchChainNotSupported: true,
  onSuccess(){

    withdraw?.()
  }

})

const {switchNetwork:stake_switch } =
useSwitchNetwork({
  chainId: CHAIN_ID1,
  // throwForSwitchChainNotSupported: true,
  onSuccess(){

    Investing?.()
  }

})

const waitForTransaction = useWaitForTransaction({
  hash: stakeResult?.hash,
  onSuccess(data) {
    mount();
    console.log("Success", data);
  },
});

const waitForTransaction2 = useWaitForTransaction({
  hash: stakeResult_withdrawReward?.hash,
  onSuccess(data) {
    mount();
    console.log("Success", data);
  },
});
  const earningLit = [
    {
      id: "1",
      num: "15%",
      count: ref_data1[0],
      earn: ref_data[0],
    },
    {
      id: "2",
      num: "10%",
      count: ref_data1[1],
      earn: ref_data[1],
    },
    {
      id: "3",
      num: "4%",
      count: ref_data1[2],
      earn: ref_data[2],
    },
    {
      id: "4",
      num: "3%",
      count: ref_data1[3],
      earn: ref_data[3],
    },
    {
      id: "5",
      num: "2%",
      count: ref_data1[4],
      earn: ref_data[4],
    },
    {
      id: "6",
      num: "1%",
      count: ref_data1[5],
      earn: ref_data[5],
    },
    {
      id: "7",
      num: "1%",
      count: ref_data1[6],
      earn: ref_data[6],
    },
    {
      id: "8",
      num: "1%",
      count: ref_data1[7],
      earn: ref_data[7],
    },
    {
      id: "9",
      num: "1%",
      count: ref_data1[8],
      earn: ref_data[8],
    },
    {
      id: "10",
      num: "1%",
      count: ref_data1[9],
      earn: ref_data[9],
    },
    {
      id: "11",
      num: "0.5%",
      count: ref_data1[10],
      earn: ref_data[10],
    },
    {
      id: "12",
      num: "0.5%",
      count: ref_data1[11],
      earn: ref_data[11],
    },
    {
      id: "13",
      num: "0.5%",
      count: ref_data1[12],
      earn: ref_data[12],
    },
    {
      id: "14",
      num: "0.5%",
      count: ref_data1[13],
      earn: ref_data[13],
    },
    {
      id: "15",
      num: "2%",
      count: ref_data1[14],
      earn: ref_data[14],
    },
    {
      id: "16",
      num: "3%",
      count: ref_data1[15],
      earn: ref_data[15],
    },

   
  ];

  useEffect(() => {
    mount();
  }, [props.provider, result]);

  const search = useLocation().search;
  const id = new URLSearchParams(search).get("ref");

  const count = (_deadline) => {
    console.log("here is deadine "+_deadline)
    var now = new Date().getTime();
    _deadline = Number(_deadline) * 1000;
    var t;
    if ( Number(now) <  Number(_deadline)) {
      t = Number(_deadline) - Number(now);
      console.log(" its count " + _deadline + "   " + now + "   " + t);
      // console.log(deadline)
      var dd = Math.floor(t / (1000 * 60 * 60 * 24));
      var hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      var ss = Math.floor((t % (1000 * 60)) / 1000);

      var days = dd < 10 ? "0" + dd : dd;
      var hours = hh < 10 ? "0" + hh : hh;
      var minutes = mm < 10 ? "0" + mm : mm;
      var seconds = ss < 10 ? "0" + ss : ss;

      //  setState({ days, minutes, hours, seconds });
      console.log("innu8ni " + days);

      // if (t < 0) {
      //   setState({
      //     days: 0,
      //     minutes: 0,
      //     hours: 0,
      //     seconds: 0,
      //     time_up: "TIME IS UP",
      //   });

      //   // clearInterval(x);
      //   // var today = new Date();
      //   // today.setDate(today.getDate(Date) + 2);
      //   // deadline = today.getTime(Date);
      //   // return
      // }
      if (days > 0) {
        return Number(days)+1 + " days";
      } else if (hours > 0) {
        return Number(hours)+1 + " hours";
      } else if (minutes > 0) {
        return Number(minutes)+1 + " minutes";
      } else {
        return Number(seconds)+1 + " seconds";
      }
    } else {
      return "Expired";
    }
  };
  
  function Convert_To_Wei(val) {
    const web3= new Web3(new Web3.providers.HttpProvider("https://rpc.senjepowersscan.com"));
  
    val = web3.utils.toWei(val.toString(), "ether");
    return val;
  }
  async function mount() {
    if (isDisconnected) {
      return;
    }
    try {
      
      const web3= new Web3(new Web3.providers.HttpProvider("https://rpc.senjepowersscan.com"));

      const balance = await web3.eth.getBalance(address);


      const networkId = await web3.eth.net.getId();

      const contract = new web3.eth.Contract(cont_abi, cont_address);

      let totalReward = await contract.methods
        .getReward()
        .call({ from: address.toString() });
      console.log(address + "iyts acc");

      let total_earn = await contract.methods
        .get_Total_Earning()
        .call({ from: address.toString() });
      console.log(address + "iyts acc");

      var ref_data = await contract.methods
        .referralLevel_earning()
        .call({ from: address.toString() }); //arrray

      const ref_data1 = await contract.methods
        .referralLevel_count()
        .call({ from: address.toString() }); //array

      let totalInvest = await contract.methods
        .getTotalInvestment()
        .call({ from: address.toString() });

      const business = await contract.methods
        .totalbusiness()
        .call({ from: address.toString() });

      const totalReferral = await contract.methods
        .TotalReferrals()
        .call({ from: address.toString() });

      const total_withdraw_reaward = await contract.methods
        .total_withdraw_reaward()
        .call({ from: address.toString() });

      // const allInvestments = await contract.methods
      //   .getAllinvestments()
      //   .call({ from: address.toString() });
      const allInvestments = await contract.methods
      .getAllinvestments()
      .call({ from: address.toString() });
      let arr = [];
      for (let i = 0; i < allInvestments.length; i++) {
        console.log("helo " + allInvestments[i][3]);
        let Reward = await contract.methods
          .getReward_perInvestment(allInvestments[i][3])
          .call({ from: address.toString() });
        Reward = web3.utils.fromWei(Reward, "ether");

        arr[i] = Reward;
      }
      console.log("inv " +allInvestments.length);
      const all_Investments=[...allInvestments].reverse()

      totalInvest = web3.utils.fromWei(totalInvest, "ether");
      total_earn = web3.utils.fromWei(total_earn, "ether");

      set_Allinvestment_earning(arr);
      set_totalEarning(total_earn);
      let minimum_investment = await contract.methods
        .minimum_investment()
        .call(); //get stake

      // const totalinvestors = await contract.methods.totalInvestors().call(); //get stake

      const curr_time = await contract.methods.get_currTime().call(); //get stake



      minimum_investment = web3.utils.fromWei(minimum_investment, "ether");

      totalReward = web3.utils.fromWei(totalReward, "ether");

      if (id != null) {


        setReferral(id);
      }
      

      set_Allinvestment(all_Investments);
      set_curr_time(curr_time);
      setTotalInvestment(totalInvest);
      setwithrawableAmount(totalReward);
      set_minimum_investment(minimum_investment);
      set_total_withdraw_reaward(total_withdraw_reaward);
      setisWalletConnected(true);
      setbusiness(business);
      settotalReferrals(totalReferral);
      set_Ref_data(ref_data);
      set_Ref_data1(ref_data1);
      set_ref_from(ref_from[0]);
      setBalance(balance);
      setUser(address);
      console.log("its id " + id);

    } catch (error) {
      // Catch any errors for any of the above operations.

      console.error(error);
    }
  }

  function cal_after_withdraw(_withdraw_Amount) {
    if (Number(_withdraw_Amount) < Number(totalReward)) {
      set_after_withdraw(totalReward - _withdraw_Amount);
    } else if (Number(_withdraw_Amount) > Number(totalReward)) {
      set_after_withdraw(0);
    }
  }

  function find_Exp_earn(amount) {

    if (amount >= minimum_investment && amount <= 100) {
      return (amount / 100) * 0.3 * 400;
    } else if (amount > 100 && amount <= 200) {
      return (amount / 100) * 0.35 * 400;
    } else if (amount > 200 && amount <= 400) {
      return (amount / 100) * 0.4 * 400;
    } else if (amount > 400 && amount <= 800) {
      return (amount / 100) * 0.45 * 400;
    } else if (amount > 800 && amount <= 1600) {
      return (amount / 100) * 0.5 * 400;
    } else if (amount > 1600 && amount <= 5000) {
      return (amount / 100) * 0.55 * 400;
    } else if (amount > 5000) {
      return (amount / 100) * 0.6 * 400;
    }
    return 0;

  }

  function find_Roi(amount) {
    if (amount >= minimum_investment && amount <= 100) {
      return 0.3;
    } else if (amount > 100 && amount <= 200) {
      return 0.35;
    } else if (amount > 200 && amount <= 400) {
      return 4;
    } else if (amount > 400 && amount <= 800) {
      return 0.45;
    } else if (amount > 800 && amount <= 1600) {
      return 0.5;
    } else if (amount > 1600 && amount <= 5000) {
      return 0.55;
    } else if (amount > 5000) {
      return 0.6;
    }
    return 0;
  }

  async function Invest() {
    if (isDisconnected) {
      alert("kindly connect your wallet");
      return

    }
    if (investment <= 0 || investment == "") {
      alert("please write amount ");
      return
    }

    if (Number(balance) < Number(investment*10**18)) {
      alert("you dont have enough balance to invest");
      return;
    } 
    if (Number(investment) < Number(minimum_investment)) {
      alert("you can't stake less than " + minimum_investment);
      return;
    }
    console.log("object invest "+ ((Number(investment))*10**18).toString());

    if (chain.id != CHAIN_ID) {
      stake_switch?.();
    } else {

      Investing?.()
    }





  }
  // props.provider.on('chainChanged', hello);
  // props.provider.ethereum.on('accountsChanged', hello )

  // function hello() {
  //   window.location.reload();
  // }


  async function WithdrawReward() {


        if (isDisconnected) {
          alert("kindly connect your wallet");
          return
    
        }
        if (withdraw_Amount <= 0 || withdraw_Amount == "") {
          alert("please write amount ");
          return
        }
        if (Number(totalEarning)==0) {
          alert("You don't have earning to withdraw");
          return;
        }
        if (Number(withdraw_Amount) > Number(totalEarning)) {
          alert("you cant withdraw more than your current balance");
          return;
        }

        // Use web3 to get the user's accounts.
        if (chain.id != CHAIN_ID) {
          reward_switch?.();
        } else {
          console.log("object withdraw "+withdraw_Amount);

          withdraw?.()
        }

  }

  return (
    <div>
      <Header  balance={balance} />
      <div className="home-page flex flex-col">
        <div className="wrap wrapWidth flex">
          <div className="_block flex flex-col">
            <div className="hero-sec">
              <div className="left flex flex-col">
                <div className="hdr-tab flex items-center">
                  <div
                    className={`tab flex items-center justify-center ${
                      activeTab === "tab1" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab("tab1")}
                  >
                    Invest SPC
                  </div>
                  <div
                    className={`tab flex items-center justify-center ${
                      activeTab === "tab2" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab("tab2")}
                  >
                    Withdraw Earning
                  </div>
                </div>
                {activeTab === "tab1" ? (
                  <div className="meta flex flex-col">
                    <div className="row flex flex-col">
                      <div className="tag">Investment Amount</div>
                      <input
                        type="number"
                        className="txt cleanbtn"
                        value={investment}
                        onChange={(e) => {
                          setInvestment(e.target.value);
                          set_ROI(find_Roi(e.target.value));
                          set_Expected_return(find_Exp_earn(e.target.value));
                        }}
                        placeholder="0"
                        min={minimum_investment}
                      />
                    </div>
                    <div className="info-list flex flex-col">
                      <div className="item flex items-center justify-between">
                        <div className="lbl">Plan Duration</div>
                        <div className="val">400 Days</div>
                      </div>
                      <div className="item flex items-center justify-between">
                        <div className="lbl">Expected ROI</div>
                        <div className="val">{ROI ? ROI : "0"}</div>
                      </div>
                      <div className="item flex items-center justify-between">
                        <div className="lbl">Expected Return</div>
                        <div className="val">
                          {Expected_return ? Expected_return.toFixed(2) : "0"}{" "}
                          SPC
                        </div>
                      </div>
                    </div>
                    <div
                      className="btn button"

                      onClick={() => Invest()}
                       // onClick={() => setOpen2(true)}

                    >
                      Invest Amount
                    </div>
                  </div>
                ) : activeTab === "tab2" ? (
                  <div className="meta flex flex-col">
                    <div className="row flex flex-col">
                      <div className="tag">Withdraw Amount</div>
                      <input
                        type="number"
                        className="txt cleanbtn"
                        value={withdraw_Amount}
                        min={minimum_investment}
                        onChange={(e) => {
                          set_withdraw_Amount(e.target.value);
                          cal_after_withdraw(e.target.value);
                        }}
                      />
                    </div>
                    <div className="info-list flex flex-col">
                      {/* <div className="item flex items-center justify-between">
                        <div className="lbl">Current Balance</div>
                        <div className="val">456.00 SPC</div>
                      </div> */}
                      <div className="item flex items-center justify-between">
                        <div className="lbl">Balance After Withdraw</div>
                        <div className="val">
                          {withdraw_Amount == "" ? 0 : after_Withdraw} SPC
                        </div>
                      </div>
                      <div className="item flex items-center justify-between">
                        <div className="lbl">Total Withdraw</div>
                        <div className="val">
                          {total_withdraw_reaward / 10 ** 18} SPC
                        </div>
                      </div>
                    </div>
                    <div className="btn button" 
                    onClick={WithdrawReward}
                    >
                      Withdraw Amount
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="right flex flex-col">
                <div className="box flex items-center">
                  <div className="box-item flex flex-col justify-center">
                    <div className="lbl">Total Investment</div>
                    <div className="numb">{totlaInvestment}</div>
                  </div>
                  <div className="box-item flex flex-col justify-center">
                    <div className="lbl">Total Earning</div>
                    <div className="numb">{totalEarning}</div>
                  </div>
                </div>
                <div className="box flex items-center">
                  <div className="box-item flex flex-col justify-center">
                    <div className="lbl">Withdrawal Amount</div>
                    <div className="numb">{totalReward}</div>
                  </div>
                  <div className="box-item flex flex-col justify-center">
                    <div className="lbl">Total Referrals</div>
                    <div className="numb">{totalReferrals}</div>
                  </div>
                </div>
                <div className="box flex items-center">
                  <div className="box-item flex flex-col justify-center">
                    <div className="flex items-center">
                      <div className="lbl flex">My Link</div>
                      <CopyToClipboard
                        text={`https://stakespc.com/?ref=${address}`}
                      >
                        <button className="copy-icon flex items-center justify-center ml-5">
                          <CopyIcon />
                        </button>
                      </CopyToClipboard>
                    </div>
                    <div className="link">
                    https://stakespc.com/?ref=
                      {address == null
                        ? "..."
                        : address.toString().slice(0, 4) + "..."}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="history-sec flex flex-col">
              <div className="sec-tag">My Investmnet History</div>
              <div className={`table-block flex flex-col ${Allinvestment.length > 0 ? "tbl-height" : ""}`}>
                {Allinvestment.length > 0 ? (
                  <div>
                    {Allinvestment.map((item, index) => (
                      <div key={index} className="table-row flex items-center">
                        <div className="row-item flex flex-col">
                          <div className="row-lbl">Invested Amount</div>
                          <div className="row-val">
                            {item[0] / 10 ** 18} SPC
                          </div>
                        </div>
                        <div className="row-item flex flex-col">
                          <div className="row-lbl">Expiration Time Left</div>
                          <div className="row-val">{count(item[1])}</div>
                        </div>
                        <div className="row-item flex flex-col">
                          <div className="row-lbl">Total Earned</div>
                          <div className="row-val">
                            {Allinvestment_earning[index]} SPC
                          </div>
                        </div>
                        <div className="row-item flex flex-col">
                          <div className="row-lbl">Perday ROI</div>
                          <div className="row-val">
                            {find_Roi(item[0] / 10 ** 18)}%
                          </div>
                        </div>
                        {/* <div className="row-item flex flex-col justify-center items-center">
                  {curr_time < item[1]?(
                    <div className="action">
                      <button className="btn button" style={{ "BackgroundColor":"red" }} >Renew Investments</button>
                    </div>):(                    
                      <div className="action">
                      <button className="btn button" >Renew Investment</button>
                    </div>)}
                  </div> */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    {isWalletConnected ? (
                      <div
                        className="sec-tag"
                        style={{ textAlign: "center", paddingTop: "25px" }}
                      >
                        <p>You have no Previous investments</p>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="earning-sec flex flex-col">
              <div className="sec-tag">My Referral Earnings</div>
              <div className="table-block flex flex-col">
                <div className="table-row flex items-center">
                  <div className="row-item flex flex-col">
                    <div className="row-lbl">Levels</div>
                  </div>
                  <div className="row-item flex flex-col">
                    <div className="row-lbl">Earning Percentage</div>
                  </div>
                  <div className="row-item flex flex-col">
                    <div className="row-lbl">No. of Refered Investors</div>
                  </div>
                  <div className="row-item flex flex-col">
                    <div className="row-lbl">Total Earning (SPC)</div>
                  </div>
                </div>
                {earningLit.map((item, index) => (
                  <div key={index} className="table-row flex items-center">
                    <div className="row-item flex flex-col">
                      <div className="row-lbl">{item.id}</div>
                    </div>
                    <div className="row-item flex flex-col">
                      <div className="row-lbl">{item.num}</div>
                    </div>
                    <div className="row-item flex flex-col">
                      <div className="row-lbl">
                        {item.count ? item.count : "0"}
                      </div>
                    </div>
                    <div className="row-item flex flex-col">
                      <div className="row-lbl">
                        {item.earn ? item.earn / 10 ** 18 : "0"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <Modal open={open} onClose={() => setOpen(false)}>
          <CardDetail setOpen={setOpen} />
        </Modal> */}
      </div>
      <Modal2 open2={open2} onClose={() => setOpen2(false)}>
        <ConfirmationPopup setOpen2={setOpen2}/>
      </Modal2>
    </div>
  );
};

export default Main;
