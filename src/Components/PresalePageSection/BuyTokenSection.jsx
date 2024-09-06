import { useState, useEffect } from "react";
import "./BuyTokenSection.css";
import progress_dot from "../../assets/icons/progres_dot.webp";

import USDT_logo from "../../assets/icons/USDT_logo.png"
import bitbullLogo from "../../assets/logo/favicon.png"

import buyOption1 from "../../assets/icons/payment-1.webp";
import buyOption2 from "../../assets/icons/payment-2.webp";
import buyOption3 from "../../assets/icons/payment-3.webp";
import buyOption4 from "../../assets/icons/payment-4.webp";
import buyOption5 from "../../assets/icons/payment-5.webp";
import buyOption6 from "../../assets/icons/payment-6.webp";
import buyOption7 from "../../assets/icons/payment-7.webp";

import { Web3Button } from "@web3modal/react";
// import { list } from "../constant/tokenlist";
import PresaleAbi from "../constant/presaleAbi.json";
import USDTAbi from "../constant/usdtAbi.json";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import Web3 from "web3";
import {
  prepareWriteContract,
  writeContract,
  waitForTransaction,
} from "@wagmi/core";
import { Link } from "react-router-dom";

const isValid = (regex) => (input) => regex.test(input);
const numberRegex = /^\d*\.?\d*$/;
const isValidNumber = isValid(numberRegex);


export default function BuyToken() {
  const [IsKeyPresent, setIsKeyPresent] = useState(false);

  const { isConnected, address } = useAccount();
  const cAddress = "0x9f1766bdaDe674D5D3b84f93E1be8FD3F33721F4";
  const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";

  const [totalFundsRaised, setTotalFundsRaised] = useState(0);
  const [totalTokensSold, setTotalTokensSold] = useState(0);
  const [usdtPrice, setUsdtPrice] = useState(0);
  const webSupply_Binance = new Web3("https://1rpc.io/bnb");
  const usdtTokenContract = new webSupply_Binance.eth.Contract(USDTAbi, usdtAddress);

  const gartVal = usdtPrice;

  const [data, setData] = useState({
    eth: "",
    gart: "",
  });

  const [allowance, setAllowance] = useState(0);

  useEffect(() => {
    const fetchAllowance = async () => {
      try {
        const usdtContract = new webSupply_Binance.eth.Contract(
          USDTAbi,
          usdtAddress
        );
        const allowanceAmount = await usdtContract.methods
          .allowance(address, cAddress)
          .call();
        setAllowance(allowanceAmount);
      } catch (error) {
        console.error("Error fetching allowance:", error);
      }
    };
    console.log("fetch allowance");
    fetchAllowance();
  }, [address, cAddress]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const presaleContract = new webSupply_Binance.eth.Contract(
          PresaleAbi,
          cAddress
        );

        const fundsRaised = await presaleContract.methods
          .totalUSDTCollected()
          .call();
        setTotalFundsRaised(fundsRaised / 10 ** 18);

        const tokensSold = await presaleContract.methods
          .totalTokensSold()
          .call();
        setTotalTokensSold(tokensSold / 10 ** 18);

        const usdtPri = await presaleContract.methods.tokensPerUSDT().call();
        setUsdtPrice(usdtPri / 100);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log("totalFundsRaised", totalFundsRaised);
  // console.log("totalTokensSold", totalTokensSold);
  // console.log("usdtPrice", usdtPrice);




  function keyPresentHandle() {
    setIsKeyPresent(!IsKeyPresent);
  }

  const buyWithUsdt = async () => {
    if (!address || !isConnected) {
      toast.error("Please connect your wallet!");
      return;
  }
    try {
      let ethValue = webSupply_Binance.utils.toWei(data.eth.toString());
      const ethValueNumber = Number(ethValue);

      const tokenBalance = await usdtTokenContract.methods.balanceOf(address).call();

      if (Number(tokenBalance) < ethValueNumber) {
          toast.error("Insufficient USDT balance for this transaction");
          return;
      }

      if (allowance < ethValueNumber) {
          toast.error("You don't have enough allowance for this transaction");
          return;
      }

      const buyTransaction = await prepareWriteContract({
        address: cAddress,
        abi: PresaleAbi,
        functionName: "buyWithUSDT",
        args: [ethValueNumber],
        from: address,
      });

      const toastId = toast.loading("Processing Buy Transaction..");
      await writeContract(buyTransaction);

      toast.success("Buy Transaction completed successfully", { id: toastId });
      setData({ eth: "", gart: "" });

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      toast.dismiss();
      if (allowance < 0) {
          toast.error("You don't have enough allowance for this transaction");
      } else {
          toast.error("Error in stake transaction");
      }

      console.error(error);
  }
  };

  const approveTransaction = async () => {
    if (!address || !isConnected) {
      toast.error("Please connect your wallet!");
      return;
  }
    try {
      let ethValue = webSupply_Binance.utils.toWei(data.eth.toString());
      const ethValueNumber = Number(ethValue);
      const approvalTransaction = await prepareWriteContract({
        address: usdtAddress,
        abi: USDTAbi,
        functionName: "approve",
        args: [cAddress, ethValueNumber],
        from: address,
      });

      const toastId = toast.loading("Approving transaction...");
      const hash = await writeContract(approvalTransaction);
      toast.loading("Processing Approval Transaction..", { id: toastId });
      await waitForTransaction(hash);
      toast.dismiss(toastId);
      toast.success("Approval completed successfully");
      setAllowance(ethValueNumber);
    } catch (error) {
            toast.dismiss();
            toast.error("Error in approve transaction");
            console.error(error);
    }
  };

  const handleBuyButtonClick = async () => {
    if (allowance > 0) {
      await buyWithUsdt();
    } else {
      await approveTransaction();
    }
  };

          // Assuming these are the raised and target amounts
          const raisedAmount = totalFundsRaised;
          const targetAmount = 1000000;
      
          // Calculate the percentage
          const percentageRaised = (raisedAmount / targetAmount) * 100;
          const progressBarWidth = `${percentageRaised}%`;

  return (
    <div className="BuyCoin_Section_Container flex justify-between tablet:items-center py-10 px-20 laptop:px-5  gap-8 w-full">
      <div className=" Buycoin_info_container flex flex-col gap-4 justify-center items-start w-[50%]">

        <h1 className="text-start text-5xl  ">
          Join the Bitbullx Token Presale Today!
        </h1>

        <p className="text-start w-fit phone:text-sm ">
          Be part of the revolution in digital finance by joining the Bitbullx Token (BBX) presale. This is your exclusive opportunity to invest early in a groundbreaking project that aims to democratize finance through innovative blockchain technology. Secure your Bitbullx Tokens now and enjoy the benefits of being an early adopter.
        </p>

        <div className=" buttons flex flex-wrap gap-5">
          <a href="#How-to-buy" className="btn2" >How to Buy</a>
          {/* <button className="btn3">Refer & Earn</button> */}
        </div>
      </div>


      {/* buycoin payment section */}

      <div className=" max-w-[35rem] payment_main_container flex flex-col justify-start items-center gap-9 pb-5 w-[50%] bg-neutral-950 rounded-2xl overflow-hidden border border-solid border-sky-800	">
        <div className="bg-neutral-800 p-1 pl-5 w-full">
          <p className="text-start font-bold text-base text-slate-400">
            Current Batch <span className="font-bold text-white">BATCH1</span>
          </p>
        </div>

        <div className="buy_coin_main_container flex flex-col items-center bg-neutral-800 w-11/12 pt-4 pb-4 rounded-xl">
          <div className="coin_Seles_graph flex flex-col items-center gap-3 p-4 w-full">
            <div className=" flex w-full">
              <section className="w-2/4 text-center">
                <span className=" text-slate-400">Total Coin Sales USD</span> <br /> $ {totalFundsRaised}
              </section>
              <section className="w-2/4 text-center border-l border-slate-600">
                <span className=" text-slate-400">Total Coin Sold</span> <br /> BBX {totalTokensSold}
              </section>
            </div>

            <div className="w-11/12 bg-black rounded-full h-9 p-0.5 border border-slate-500">
              <div
                className="h-full p-1 pl-4 top-0 left-0 rounded-full relative"
                style={{
                  background:
                    " linear-gradient(90deg, #00980F 21.9%, #24FF00 100%)",
                  width: progressBarWidth,
                }}
              >
                {/* <div className="absolute top-0 left-0 h-full w-fit pl-2 text-xs flex items-center text-slate-300">Remaining 16.3M</div> */}
                <img
                  src={progress_dot}
                  alt="progres circle"
                  className="absolute top-0 right-0 w-8 h-auto"
                />
              </div>
            </div>
          </div>

          <div className="buy_coin_container flex flex-col items-center gap-3 p-4 w-full">
            <div className=" flex w-full">
              <section className="w-2/4 text-center">
                1 USDT = {usdtPrice} BBX
              </section>
              <section className="w-2/4 text-center ">
                Next Batch :  0.6
              </section>
            </div>

            <Web3Button />

            <div className="w-full flex flex-col items-center px-5 phone:px-1 gap-5 " >
              {/* USDT amount input field */}

              <div className="relative mb-2 w-[100%] h-fit">
                <div className="absolute inset-y-0 start-0 mx-3 flex items-center pointer-events-none">
                  <img
                    loading="lazy"
                    src={USDT_logo}
                    className="h-[30px] w-[30px]"
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-100 border border-gray-300 text-black text-sm rounded-lg block w-full px-14 py-3"
                  placeholder="USDT Amount"
                  value={data.eth}
                  onChange={(e) => {
                    const val = e.target.value
                      .split("")
                      .filter((el) => isValidNumber(el))
                      .join("");
                    setData({
                      ...data,
                      eth: val,
                      gart: val * gartVal,
                    });
                  }}
                />
              </div>

              {/* bitbull amount input field */}

              <div className="relative mb-2 w-[100%]">
                <div className="absolute inset-y-0 start-0 mx-3 flex items-center pointer-events-none">
                  <img
                    loading="lazy"
                    src={bitbullLogo}
                    className="h-[30px] w-[30px]"
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full px-14 py-3"
                  placeholder="Bitbullx Amount"
                  value={data.gart}
                  onChange={(e) => {
                    const val = e.target.value
                      .split("")
                      .filter((el) => isValidNumber(el))
                      .join("");
                    setData({
                      ...data,
                      gart: val,
                      eth: val / gartVal,
                    });
                  }}
                />
              </div>

              <button onClick={handleBuyButtonClick} className=" px-3  w-fit py-2 rounded-lg text-sm flex items-center bg-gray-500 hover:bg-gray-700" type="button"> 
                {allowance > 0 ? "Buy Now" : "Approve"}
              </button>

            </div>

            {/* <div
              className="  flex justify-between  items-center h-fit p-2 pl-4 pr-4 w-11/12 rounded-md"
              style={{
                background:
                  "linear-gradient(90deg, #8922ff 30.5%, #2851C5 78%)",
              }}

            >
              <span className="font-bold">Buy coins</span>
              <img
                src={ameio_logo}
                alt="progres circle"
                className="w-8 h-auto"
              />
            </div> */}
          </div>
        </div>

        <div className="Buy_options_container flex flex-col items-center gap-4 w-full">
          <div className=" buy_option_imges flex gap-5 w-full justify-center">
            {/* <img src={buyOption1} alt="" className="w-8" /> */}
            <img src={buyOption2} alt="" className="w-8" />
            {/* <img src={buyOption3} alt="" className="w-8" /> */}
            <img src={buyOption4} alt="" className="w-8" />
            <img src={buyOption5} alt="" className="w-8" />
            <img src={buyOption6} alt="" className="w-8" />
            <img src={buyOption7} alt="" className="w-8" />
          </div>

          {/* <div className="special_key_container flex flex-col items-center w-full gap-4">
            <p className="w-full text-center text-sm">
              Do you have Special Referral code ?
              <span
                onClick={keyPresentHandle}
                className="text-blue-600 font-bold cursor-pointer"
              >
                {IsKeyPresent ? " No" : "  Yes"}
              </span>
            </p>

            {IsKeyPresent &&

              <form action="">
                <div
                  className={`  flex flex-col md:flex-row items-center`}
                >
                  <input
                    type="text"
                    placeholder="Enter key"
                    className="w-full md:w-auto flex-grow p-2 mb-2 md:mb-0 md:mr-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                  />
                  <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                    Apply
                  </button>
                </div>
              </form>
            }
          </div> */}
        </div>
      </div>
    </div>
  );
}
