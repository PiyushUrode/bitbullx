import poligon from "../../assets/icons/Polygon 4.webp"

import rmap1 from "../../assets/images/rmap1.webp"
import rmap2 from "../../assets/images/rmap2.webp"
import rmap3 from "../../assets/images/rmap3.webp"
import rmap4 from "../../assets/images/rmap4.webp"
import rmap5 from "../../assets/images/rmap5.webp"
import rmap6 from "../../assets/images/rmap6.webp"
import rmap7 from "../../assets/images/rmap7.webp"
import rmap8 from "../../assets/images/rmap8.webp"
import rmap9 from "../../assets/images/rmap9.webp"
import rmap10 from "../../assets/images/rmap10.webp"
import rmap11 from "../../assets/images/rmap11.webp"
import rmap12 from "../../assets/images/rmap12.webp"

import PropTypes from 'prop-types';





const S7Roadmapmain = () => {
    const roadmapData1 = [
        {
            heading: "Roadmap 2024",
            description: " Step by step, our roadmap guides you through discovery, planning, design, development, deployment, and ongoing maintenance, ensuring transparency and progress every step of the way.",

        },
        {
            phase: "01",
            title: " Project Inception and Token Creation",
            description: [
                "Establish the core team and finalize the project vision.",
                "Develop and deploy Bitbullx Token on the Bep 20 network with 18 decimal precision."
            ],
            image: rmap1,
        },
        {
            phase: "02",
            title: "Community Building and Marketing Kickoff",
            description: [
                "Launch the official website and social media channels.",
                "Initiate marketing campaigns to increase awareness and attract investors."
            ],
            image: rmap2,
        },
        {
            phase: "03",
            title: "Token Sale and Exchange Listing",
            description: [
                "Conduct public and private token sales to distribute tokens.",
                "List Bitbullx Token on major cryptocurrency exchanges for trading."
            ],
            image: rmap3,
        },
        {
            phase: "04",
            title: "Development of Utility Features",
            description: [
                "Implement BITDEX Bonus for referral rewards.",
                "Integrate BITTRADEX Bonus for trading incentives."
            ],
            image: rmap4,
        }
    ];
    const roadmapData2 = [
        {
            heading: "Roadmap 2025",
            description: " Step by step, our roadmap guides you through discovery, planning, design, development, deployment, and ongoing maintenance, ensuring transparency and progress every step of the way."

        },
        {
            phase: "01",
            title: "Expansion of Use Cases",
            description: [
                "Enhance utility with BITNEWS Bonus for active engagement.",
                "Develop BITPLAY Bonus for gaming enthusiasts."
            ],
            image: rmap5,
        },
        {
            phase: "02",
            title: "Integration with Payment Ecosystem",
            description: [
                "Collaborate with DTH providers for token utility in subscriptions.",
                "Partner with payment gateways to enable Bitbullx Token as a payment option"
            ],
            image: rmap6,
        },
        {
            phase: "03",
            title: "Staking and Reward Programs",
            description: [
                "Launch staking programs for token holders to earn rewards.",
                "Implement additional reward programs to incentivize token usage."
            ],
            image: rmap7,
        },
        {
            phase: "04",
            title: "Community Governance and Roadmap Updates",
            description: [
                "Introduce community governance features for token holders.",
                "Release an updated roadmap with upcoming milestones and developments."
            ],
            image: rmap8,
        }
    ];
    const roadmapData3 = [
        {
            heading: "Roadmap 2026",
            description: " Step by step, our roadmap guides you through discovery, planning, design, development, deployment, and ongoing maintenance, ensuring transparency and progress every step of the way."

        },
        {
            phase: "01",
            title: "Ecosystem Expansion",
            description: [
                "Expand ecosystem partnerships for wider token adoption.",
                "Explore additional use cases and integrations based on market trends."
            ],
            image: rmap9,
        },
        {
            phase: "02",
            title: "Regulatory Compliance and Security Enhancements",
            description: [
                "Ensure compliance with regulatory standards and guidelines.",
                "Enhance security measures to safeguard user assets and data."
            ],
            image: rmap10,
        },
        {
            phase: "03",
            title: "Research and Development",
            description: [
                "Invest in R&D for technological innovations and improvements.",
                "Explore opportunities for blockchain interoperability and scalability."
            ],
            image: rmap11,
        },
        {
            phase: "04",
            title: "Sustainability and Long-Term Growth",
            description: [
                "Focus on sustainable growth strategies for long-term success.",
                "Foster a vibrant community and ecosystem around Bitbullx Token."
            ],
            image: rmap12,
        }
    ];
    return (
        <>
            <S7Roadmap roadmapdata={roadmapData1} />
            <S7Roadmap roadmapdata={roadmapData2} />
            <S7Roadmap roadmapdata={roadmapData3} />

        </>
    )
}

export default S7Roadmapmain



const S7Roadmap = ({ roadmapdata }) => {

    return (
        <>
            <section id="Roadmap" >
                <div
                    id="about-main"
                    className=" bg-[url('/bgimgblackwave.svg')] bg-opacity-[0.8]  relative flex gap-16 flex-col min-h-[100vh] px-10 py-10 tablet:px-3"
                >
                    <div id="roadmap-heading" className=" w-full flex  justify-center">
                        <div className="max-w-[45rem] flex flex-col items-center text-center  gap-3 ">
                            <h2 className="  font-bold text-5xl">
                                {roadmapdata[0].heading}
                            </h2>

                            <p className="text-base tracking-wide text-gray-400 font-semibold leading-tight ">
                                {roadmapdata[0].description}
                            </p>
                        </div>
                    </div>




                    {/* cards */}
                    <div>
                        <div className="flex  flex-col grid-cols-9 p-2 mx-auto md:grid">

                            {/* 1 */}
                            <div className="flex  md:contents flex-row-reverse   ">

                                <div className=" h-fit relative  flex tablet:flex-col  max-w-[35rem]    my-10  tablet:my-5      col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal ">
                                    <div className=" h-fit  w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl from-purple-500 to-blue-700 my-3 " >
                                        {roadmapdata[1].phase}
                                    </div>
                                    <div className="  h-fit flex flex-col gap-5 rounded-xl  roadmap-shadow tracking-wider   p-6 " >


                                        <p className="    leading-6 font-bold text-xl">
                                            {roadmapdata[1].title}

                                        </p>
                                        <div className="flex  gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p   >{roadmapdata[1].description[0]}

                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p>{roadmapdata[1].description[1]}</p>
                                        </div>

                                    </div>


                                </div>

                                <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div
                                            className="w-[0.4rem] h-full bg-indigo-300 rounded-t-full "
                                            style={{ background: "var(--roadmap-gradient)" }}
                                        ></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3     top-1/2 -left-4   rotate-180 tablet:left-4  tablet:rotate-0 ">
                                        <img src={poligon} alt="pg" />
                                    </div>
                                </div>

                                <div className=" tablet:hidden relative  max-w-[35rem] flex          my-10      rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                                    <img src={roadmapdata[1].image} alt="" />
                                </div>
                            </div>


                            {/* 2 */}
                            <div className="flex md:contents   ">
                                <div className=" tablet:hidden relative  flex       my-10       col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                                    <img src={roadmapdata[2].image} alt="" />
                                </div>

                                <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div
                                            className="w-[0.4rem] h-full bg-indigo-300"
                                            style={{ background: "var(--roadmap-gradient2) " }}
                                        ></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3     top-1/2 left-4     ">
                                        <img src={poligon} alt="pg" />
                                    </div>
                                </div>

                                <div className="  h-fit  max-w-[35rem] flex flex-row-reverse tablet:flex-col       relative     my-10   tablet:my-5    rounded-xl col-start-6 col-end-10 mr-auto tracking-normal">

                                    <div className=" h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr from-purple-500 to-blue-700 ml-[1px] my-3 " >
                                        {roadmapdata[2].phase}
                                    </div>

                                    <div className="flex flex-col  gap-5 rounded-xl  roadmap-shadow tracking-wider   p-6 " >

                                        <p className="    leading-6 font-bold text-xl">
                                            {roadmapdata[2].title}

                                        </p>
                                        <div className="flex gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p>{roadmapdata[2].description[0]}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p> {roadmapdata[2].description[1]}</p>
                                        </div>

                                    </div>




                                </div>



                            </div>

                            {/* 3 */}
                            <div className="flex md:contents flex-row-reverse   ">

                                <div className=" h-fit relative  flex tablet:flex-col  max-w-[35rem]    my-10  tablet:my-5      col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal ">
                                    <div className=" h-fit  w-fit text-4xl px-4 py-5 rounded-s-full tablet:rounded-t-full bg-gradient-to-bl from-purple-500 to-blue-700 my-3 " >
                                        {roadmapdata[3].phase}
                                    </div>
                                    <div className=" flex flex-col gap-5 rounded-xl  roadmap-shadow tracking-wider   p-6 " >


                                        <p className="    leading-6 font-bold text-xl">
                                            {roadmapdata[3].title}

                                        </p>
                                        <div className="flex  gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p   >{roadmapdata[3].description[0]}

                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p>{roadmapdata[3].description[1]}</p>
                                        </div>

                                    </div>


                                </div>

                                <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div
                                            className="w-[0.4rem] h-full bg-indigo-300 rounded-t-full "
                                            style={{ background: "var(--roadmap-gradient)" }}
                                        ></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3     top-1/2 -left-4   rotate-180 tablet:left-4  tablet:rotate-0 ">
                                        <img src={poligon} alt="pg" />
                                    </div>
                                </div>

                                <div className=" tablet:hidden relative  max-w-[35rem] flex          my-10      rounded-xl col-start-6 col-end-10 mr-auto tracking-normal " >
                                    <img src={roadmapdata[3].image} alt="" />
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="flex md:contents   ">
                                <div className=" tablet:hidden relative  flex       my-10       col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto tracking-normal" >
                                    <img src={roadmapdata[4].image} alt="" />
                                </div>

                                <div className="relative col-start-5 col-end-6 mr-3 md:mx-auto">
                                    <div className="flex items-center justify-center w-6 h-full">
                                        <div
                                            className="w-[0.4rem] h-full bg-indigo-300"
                                            style={{ background: "var(--roadmap-gradient2) " }}
                                        ></div>
                                    </div>
                                    <div className="absolute w-6 h-6 -mt-3     top-1/2 left-4     ">
                                        <img src={poligon} alt="pg" />
                                    </div>
                                </div>

                                <div className="  h-fit  max-w-[35rem] flex flex-row-reverse tablet:flex-col       relative     my-10   tablet:my-5    rounded-xl col-start-6 col-end-10 mr-auto tracking-normal">

                                    <div className=" h-fit w-fit text-4xl px-4 py-5 rounded-e-full tablet:rounded-t-full bg-gradient-to-tr from-purple-500 to-blue-700 ml-[1px] my-3 " >
                                        {roadmapdata[4].phase}
                                    </div>

                                    <div className="flex flex-col  gap-5 rounded-xl  roadmap-shadow tracking-wider   p-6 " >

                                        <p className="    leading-6 font-bold text-xl">
                                            {roadmapdata[4].title}

                                        </p>
                                        <div className="flex gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p>{roadmapdata[4].description[0]}
                                            </p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="font-bold" >✧</p>
                                            <p> {roadmapdata[4].description[1]}</p>
                                        </div>

                                    </div>


                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

S7Roadmap.propTypes = {
    roadmapdata: PropTypes.oneOf(["roadmapData1", "roadmapData2", "roadmapData3"]).isRequired,
};



