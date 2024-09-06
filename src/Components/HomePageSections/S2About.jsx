
// import abt1video from "../../assets/images/aboutvideo.mp4"
import sec2img from "../../assets/images/sec2img.jpg"

const S2About = () => {
    return (
        <>
            <div id="About" className=" py-20 tablet:py-5" >
                <div className=" min-h-fit w-screen  " >
                    <div id="abt1" className="flex gap-10  laptop:flex-col      justify-between my-10 laptop:tablet:phone:my-10  laptop:tablet:px-5  px-20">
                        {/* Video section */}
                        <div className="flex items-center     w-[50%] laptop:w-full ">
                            <img src={sec2img} alt="" className=" w-full h-fit " />
                            {/* <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[100px]  bottom-0 z-3"></div> */}
                            {/* <video autoPlay muted loop className="w-screen  rounded-2xl  left-0 top-0 h-full  object-cover flex   z-[-1]      " >
                              <source src={abt1video} type="video/mp4" />
                          </video> */}
                        </div>

                        {/* Text section */}
                        <div className="flex gap-5  flex-col   w-[50%] laptop:w-full  ">
                            <h2 className="btn3 text-sm w-fit click pointer-events-none "   > About Us </h2>
                            <h2 className="text-5xl phone:text-3xl leading-tight font-bold"> Future of Finance & Technology</h2>
                            <p className=" text-xl  phone:text-base text-gray-300 ">
                                Bitbullx Token is dedicated to creating a decentralized financial ecosystem that is accessible, secure, and efficient. Our mission is to democratize finance by leveraging blockchain technology to provide real-world applications and benefits.

                            </p>
                            <a target="blank" href="https://Bitbull-whitepaper.gitbook.io/Bitbull" className="btn2 w-fit " > Read More  → </a>
                        </div>
                    </div>







                </div>
            </div>

        </>
    )
}

export default S2About