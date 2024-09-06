 
import tokenomicsimg from "../../assets/images/tokoImg.webp"
const S6Tokenomics = () => {
  return (
      <>
          <section id="Tokenomics" >
              <div
                  id="about-main"
                  className=" bg-[url('/bgimgblackwave.webp')] bg-opacity-[0.8]  relative flex gap-5 flex-col min-h-[100vh] px-10 py-10 tablet:px-3"
              >
                  <div id="roadmap-heading" className=" w-full flex  justify-center">
                      <div className="max-w-[40rem] flex flex-col items-center text-center  gap-3 ">
                          <h2 className="  font-bold text-5xl">
                              Tokenomics
                          </h2>

                          <p className="text-lg phone:text-base text-gray-400  leading-tight ">
                              Explore our tokenomics for insights into our balanced distribution model, incentivizing engagement and fostering ecosystem growth.
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-5 tablet:justify-center tablet:flex-col ">

                      <div id="left" className="w-[55%] flex  tablet:w-full justify-center ">
                          <img src={tokenomicsimg} alt="" />
                      </div>



                      <div id="right" className="  w-[45%] tablet:w-full flex   justify-center items-center ">


                          <div className="flex flex-col  w-[30rem]  gap-5    ">

                              <div id="card" className=" max-w-[30rem]    h-[4rem] relative flex gap-3 border-[3.5px]   border-t-[#FD0C74] border-l-[#FD0C74] border-b-[#090EDB] border-r-[#090EDB] rounded-full shadow-md shadow-[#090EDB]  "
                                  style={{ background: "var(--tokenomics-gradient)" }}
                              >
                                  {/* <div className=" absolute left-[-8%] top-1/2 transform -translate-y-1/2 h-16 w-16 " >
                                      <img className=" h-full w-full " src={pointimg} alt="" />
                                  </div> */}
                                  <div className="flex    font-semibold uppercase text-lg phone:text-base  items-center px-7 justify-between w-full">
                                      <p>TOKEN NAME </p>
                                      <p className="text-right" >BITBULLX</p>
                                  </div>
                              </div>

                              <div id="card" className="    max-w-[30rem]    h-[4rem] relative flex gap-3 border-[3.5px]   border-t-[#FD0C74] border-l-[#FD0C74] border-b-[#090EDB] border-r-[#090EDB] rounded-full shadow-md shadow-[#090EDB] "
                                  style={{ background: "var(--tokenomics-gradient)" }}
                              >
                                  {/* <div className=" absolute left-[-8%] top-1/2 transform -translate-y-1/2 h-16 w-16 " >
                                      <img className=" h-full w-full " src={pointimg} alt="" />
                                  </div> */}
                                  <div className="flex font-semibold uppercase text-lg phone:text-base  items-center px-7 justify-between w-full">
                                      <p>Symbol </p>
                                      <p>BBX</p>
                                  </div>
                              </div>

                              <div id="card" className="   max-w-[30rem]    h-[4rem] relative flex gap-3 border-[3.5px]   border-t-[#FD0C74] border-l-[#FD0C74] border-b-[#090EDB] border-r-[#090EDB] rounded-full shadow-md shadow-[#090EDB] "
                                  style={{ background: "var(--tokenomics-gradient)" }}
                              >
                                  {/* <div className=" absolute left-[-8%] top-1/2 transform -translate-y-1/2 h-16 w-16 " >
                                      <img className=" h-full w-full " src={pointimg} alt="" />
                                  </div> */}
                                  <div className="flex  font-semibold uppercase text-lg phone:text-base  items-center px-7 justify-between w-full">
                                      <p>Token Supply </p>
                                      <p className="text-right" >1 Billion </p>
                                  </div>
                              </div>

                              <div id="card" className="    max-w-[30rem]    h-[4rem] relative flex gap-3 border-[3.5px]   border-t-[#FD0C74] border-l-[#FD0C74] border-b-[#090EDB] border-r-[#090EDB] rounded-full shadow-md shadow-[#090EDB] "
                                  style={{ background: "var(--tokenomics-gradient)" }}
                              >
                                  {/* <div className=" absolute left-[-8%] top-1/2 transform -translate-y-1/2 h-16 w-16 " >
                                      <img className=" h-full w-full " src={pointimg} alt="" />
                                  </div> */}
                                  <div className="flex font-semibold uppercase text-lg phone:text-base  items-center px-7 justify-between w-full">
                                      <p>Network </p>
                                      <p>BEP20</p>
                                  </div>
                              </div>

                              <div id="card" className="    max-w-[30rem]    h-[4rem] relative flex gap-3 border-[3.5px]   border-t-[#FD0C74] border-l-[#FD0C74] border-b-[#090EDB] border-r-[#090EDB] rounded-full shadow-md shadow-[#090EDB] "
                                  style={{ background: "var(--tokenomics-gradient)" }}
                              >
                                  {/* <div className=" absolute left-[-8%] top-1/2 transform -translate-y-1/2 h-16 w-16 " >
                                      <img className=" h-full w-full " src={pointimg} alt="" />
                                  </div> */}
                                  <div className="flex font-semibold uppercase text-lg phone:text-base  items-center px-7 justify-between w-full">
                                      <p>Decimal </p>
                                      <p>18</p>
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

export default S6Tokenomics