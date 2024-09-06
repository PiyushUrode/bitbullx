
import re1 from "../../assets/images/re1.webp"
import re2 from "../../assets/images/re2.webp"
import re3 from "../../assets/images/re3.webp"
import re4 from "../../assets/images/re4.webp"
import re5 from "../../assets/images/re5.webp"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const S4Rewards = () => {
    return (
        <>
            <div id="Rewards">
                <div className=" min-h-fit w-screen  " >

                    <div className=" heading flex  flex-col items-center text-center space-y-5 px-5  py-10 ">
                        <div className=" space-y-3 " >

                            <p>Welcome to Bitbullx Token</p>
                            <h1 className="text-5xl font-bold  tablet:text-4xl " >Discover Your Rewards  </h1>
                        </div>
                        <p className="text-sm max-w-[45rem] leading-tight text-gray-400 " >Explore the numerous benefits and rewards available with Bitbullx Token. Whether through staking, gaming, or everyday transactions, Bitbullx Token offers multiple avenues to earn and grow your digital assets. Join our community today and start maximizing your rewards.</p>
                    </div>



                    <Swiper
                        // spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            dynamicBullets: true,   
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >Bitdex</h2>
                                        <p className=" text-base tablet:text-sm " >Stake your Bitbullx Tokens to receive regular rewards and contribute to network security. Enjoy a reliable source of passive income through our robust staking program.</p>
                                        <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re1} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >Earn Passive Income</h2>
                                        <p className=" text-base tablet:text-sm " >Stake your Bitbullx Tokens to receive regular rewards and contribute to network security. Enjoy a reliable source of passive income through our robust staking program.</p>
                                        <a href="" className="btn2 w-fit phone:mx-auto " > Buy Now  → </a>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re2} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide> */}

                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >Bitwin</h2>
                                        <p className=" text-base tablet:text-sm " >Participate in our gaming ecosystem and earn Bitbullx Tokens for your achievements. Enhance your gaming experience with real-time rewards that you can use within our platform.</p>
                                        <Link to="https://bitwin.live/" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re4} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        {/* <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >BITPLAY BONUS</h2>
                                        <p className=" text-base tablet:text-sm " >BITPLAY: Elevate your wins with a 5% flat referral bonus on your winning amount. Share the excitement with friends and earn rewards together! Join BITPLAY now to experience the thrill of gaming and bonuses combined</p>
                                        <a href="" className="btn2 w-fit phone:mx-auto " > Buy Now  → </a>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re4} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide> */}

                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >Bitpe</h2>
                                        <p className=" text-base tablet:text-sm " >Use Bitbullx Tokens for everyday payments such as DTH, recharge, and utilities. Experience the convenience of fast, secure, and cost-effective transactions, making daily life easier.</p>
                                        <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re5} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >Bittradex </h2>
                                        <p className=" text-base tablet:text-sm " >Your trusted gateway for the finest trading experience.
Offering multiple options to diversify and enhance your investments.
Join us for unparalleled access to top-tier trading opportunities.</p>
                                        <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re2} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className=" flex justify-center  " >
                                <div id="card1" className=" flex gap-5 justify-between items-center bg-[#16151D] min-h-[17rem] max-w-[70rem] rounded-3xl mx-10 phone:mx-5 p-5     phone:flex-col-reverse  " >

                                    <div id=" " className="max-w-[60%]   flex flex-col justify-center phone:max-w-[100%] phone:text-center  space-y-5     ">

                                        <h2 className="text-5xl tablet:text-3xl  font-bold" >Bitnews</h2>
                                        <p className=" text-base tablet:text-sm " >Your information center for the latest in global technology.
Stay updated with cutting-edge news and insights from around the world.
Empower yourself with the knowledge to stay ahead in tech trends.</p>
                                        <Link to="/Presale" className="btn2 w-fit phone:mx-auto " > Buy Now  → </Link>

                                    </div>
                                    <div className=" overflow-hidden rounded-3xl " >
                                        <img src={re3} className="h-full w-auto phone:w-[16rem] object-cover" alt="re1" />
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>

                        
                         

                        
                    </Swiper>

                   

                </div>
            </div>
        </>
    )
}

export default S4Rewards