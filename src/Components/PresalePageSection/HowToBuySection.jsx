import "./HowToBuySection.css";

import wallet_icon from "../../assets/images/wallet.webp";
import wallet_img from "../../assets/images/walletimg.webp"


import step2_usdt from "../../assets/images/token-branded.webp";
import buycart_icon from "../../assets/images/buycart.webp";
import step2_coin from "../../assets/images/coin_chain.png";

import step3_icon from "../../assets/images/dellevericon.webp";
import dron_icon from "../../assets/images/drone_icon.webp";

export default function HowToBuy() {

    return (
        <div id="How-to-buy" className="HowToBuySection_container">
            <h1 className="main_heading text-5xl text-center py-10 ">How to Buy BitBullx Token</h1>

            <div className=" flex flex-col gap-20 ">




                {/* step 1   */}

                <div className=" flex font-thin tablet:flex-col justify-between gap-5 tablet:gap-10  px-20 laptop:px-5">

                    <div className=" flex justify-center h-fit  w-[50%] tablet:w-[100%] ">
                        <div className="   flex flex-col gap-3  max-w-[30rem]   " >
                            <div className=" flex gap-1 items-center  ">
                                <p className="text-2xl font-extrabold " >Step 1</p>
                                <img src={wallet_icon} className=" h-auto w-[3rem] " alt="step1logo" />
                            </div>
                            <div className=" space-y-3 tablet:text-base ">
                                <div className="text-2xl font-bold ">Connect Your Wallet (BEP 20)</div>
                                <p>Use a compatible wallet such as MetaMask or Trust Wallet to connect to the Bitbullx Token presale platform.
                                </p>
                                <p>Ensure your wallet is set to the Binance Smart Chain network.
                                </p>
                                {/* <p>If you are purchasing on mobile, we recommend using Trust Wallet or Plus Wallet and connecting through built in Wallet Connect.</p> */}
                            </div>
                        </div>
                    </div>


                    <div className="w-[50%] flex justify-center items-center  tablet:w-[100%]">
                        <div className=" max-w-[30rem]  flex flex-col gap-2 " >

                            <img className=" w-[40rem]" src={wallet_img} alt="" />

                        </div>
                    </div>
                </div>



                {/* step 2  */}

                <div className=" flex font-thin tablet:flex-col justify-between gap-5 tablet:gap-10  px-20 laptop:px-5">

                    <div className=" flex justify-center h-fit  w-[50%] tablet:w-[100%] ">
                        <div className="   flex flex-col gap-3 border-2 rounded-2xl max-w-[30rem] p-10 " >
                            {/* <img className=" h-auto w-[4rem] " src={step2_usdt} alt="" /> */}
                            <div className=" flex gap-1 items-center ">
                                <div className="text-2xl  ">Step 2</div>
                                <img className="w-[4rem]" src={step2_usdt} alt="step2logo" />
                            </div>
                            <div className=" text-2xl font-bold " >Approve Tokens from Your Connected Wallet</div>
                            <p>Authorize the connection between your wallet and the Bitbullx Token presale platform.</p>
                            <p>This step is necessary to allow the platform to interact with your wallet for the token purchase.</p>
                        </div>
                    </div>

{/* 3 */}
                    <div className="w-[50%] flex justify-center  tablet:w-[100%]">
                        <div className=" max-w-[30rem]  flex flex-col gap-2 " >
                            <div className=" flex gap-1 items-center ">
                                <div className="text-2xl  ">Step 3</div>
                                <img className="w-[4rem]" src={buycart_icon} alt="step2logo" />
                            </div>
                            <div className=" text-2xl font-bold">Enter the Amount You Want to Buy</div>
                            <div>Specify the number of Bitbullx Tokens you wish to purchase.</div>
                            <div>Ensure you have sufficient BEP-20 compatible tokens in your wallet to complete the transaction.</div>
                            <img src={step2_coin} alt="" />
                        </div>
                    </div>
                </div>

                {/* step 4 */}

                <div className=" flex font-thin tablet:flex-col justify-between items-center gap-5 tablet:gap-10  px-20 laptop:px-5">

                    <div className=" flex justify-center h-fit  w-[50%] tablet:w-[100%] ">
                        <div className="   flex   flex-col gap-3  max-w-[30rem]   " >
                            <div className=" flex gap-2  items-center   ">
                                <p className="text-2xl font-extrabold " >Step 4</p>
                                <img src={step3_icon} className=" h-auto w-[3rem] " alt="step1logo" />
                            </div>
                            <div className=" text-2xl font-bold " >Click Approve</div>
                            <p>Confirm your purchase by clicking the {'"Approve"'} button.</p>
                            <p>Your Bitbullx Tokens will be transferred to your wallet upon successful completion of the transaction.</p>
                        </div>
                    </div>


                    <div className="w-[50%] flex justify-center items-center  tablet:w-[100%]">
                        <div className=" max-w-[30rem]  flex flex-col gap-2 " >

                            <img className=" w-[40rem]" src={dron_icon} alt="" />

                        </div>
                    </div>
                </div>



            </div>
        </div>)
}