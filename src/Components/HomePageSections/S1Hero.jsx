
import bull from "../../assets/images/bullimg.webp"
import heroVideo from "../../assets/images/herovideo.mp4"
// import p1 from "../../assets/images/p1.webp"
// import p2 from "../../assets/images/p2.webp"
// import p3 from "../../assets/images/p3.webp"
import p4 from "../../assets/images/4.png"
import p5 from "../../assets/images/5.png"
import p11 from "../../assets/images/1.png"
import p21 from "../../assets/images/2.png"
import p31 from "../../assets/images/3.png"
import Popup from "../popup/Popup.jsx"

const S1Hero = () => {
    return (
        <>
            <div id="Hero" className=" min-h-[100vh]  relative " >
                <Popup/>

                <div className="  absolute left-0 bottom-0 bg-gradient-to-t from-black via-[rgba(0, 143, 129, 0.0061)] to-[rgba(0, 0, 0, 1)] w-[100%] h-[100px]  bottom-0 z-3"></div>

                <video   autoPlay muted loop className="w-screen absolute left-0 top-0 h-full  object-cover flex   z-[-1] max-[900px]:h-[210%] max-[500px]:h-[240%] opacity-[0.5] " >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                <div className="hero-heading flex  flex-col items-center text-center space-y-10 px-5  py-10 ">
                    <div className=" space-y-3 " >

                        <p className=" text-base text-primary-gradient font-bold tracking-widest " >Welcome to Bitbullx Token</p>
                        <h1 className="text-7xl font-bold desktop:text-6xl desktop:laptop:text-5xl desktop:laptop:tablet:phone:text-4xl  " >Revolutionizing    <br className=" visible phone:hidden " />Digital Finance with Bitbullx Token</h1>
                    </div>
                    <p className="text-lg max-w-[45rem] leading-tight text-gray-300 " >Bitbullx Token (BBX) offers innovative solutions in the crypto space, providing secure, efficient, and scalable blockchain technology for diverse financial applications. Join us in shaping the future of decentralized finance.</p>
                <a target="blank" className="btn3" href="https://bitbull-whitepaper.gitbook.io/bitbull/"> Whitepaper</a>
                </div>

                <div id="bull-img " className="flex justify-center" >
                    <img src={bull} className="w-auto h-auto" alt="" />
                </div>

            </div>

            <div id="parteners">
                <div className="flex  tablet:flex-wrap " >
                    <div  className='flex  justify-center items-center p-2  mx-auto   '>
                        <img loading="lazy" 
                            src={p11}
                            alt="parteners"
                            className="  object-contain opacity-90  h-auto w-auto"
                        />
                    </div>
                    <div  className='flex  justify-center items-center p-2  mx-auto   '>
                        <img loading="lazy" 
                            src={p21}
                            alt="parteners"
                            className="  object-contain opacity-90  h-auto w-auto"
                        />
                    </div>
                    <div  className='flex  justify-center items-center p-2  mx-auto   '>
                        <img loading="lazy" 
                            src={p31}
                            alt="parteners"
                            className="  object-contain opacity-90  h-auto w-auto"
                        />
                    </div>
                    <div  className='flex  justify-center items-center p-2  mx-auto   '>
                        <img loading="lazy" 
                            src={p4}
                            alt="parteners"
                            className="  object-contain opacity-90  h-auto w-auto"
                        />
                    </div>
                    <div  className='flex  justify-center items-center p-2  mx-auto   '>
                        <img loading="lazy" 
                            src={p5}
                            alt="parteners"
                            className="  object-contain opacity-90  h-auto w-auto"
                        />
                    </div>
                    
                </div>
            </div>


        </>
    )
}

export default S1Hero