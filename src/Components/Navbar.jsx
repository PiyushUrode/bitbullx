import { useEffect, useState } from 'react';
import logo from "../assets/logo/logo2.png"
import { Link } from 'react-router-dom';

// import logo from "../assets/voip_logo (1)/voip_logo.webp"
// import { Link } from "react-router-dom"

const Navbar = () => {

    const [isScrolled, setisScrolled] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])


    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const closeMenu = () => {
        setIsNavVisible(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Smooth scrolling animation
        });

    };


    return (

        <>

            <nav
                className={`${isScrolled ? 'bg-black dark:transparent' : 'bg-transparent'
                    } w-full z-10 overflow-x-hidden   top-0 start-0 border-b border-none dark:border-gray-600`}
            >
                <div className=" relative max-w-full   flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">


                    <a href="/" onClick={closeMenu}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img loading="lazy" src={logo}  className=' w-[9rem] h-auto '  alt="VOIP" />
                            {/* <h1 className=' text-4xl font-bold font-outfit  text-primary-gradient phone:text-xl ' >Voip Finance</h1> */}
                        </div>
                    </a>


                    <div className="flex  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link   to="/Presale"
                            className="      border-2  px-5 py-2 rounded-3xl    oxanium text-white   font-medium phone:font-light    text-sm first-line  phone:h-[40px]  ">Buy Token  →
                        </Link>



                        <button
                            onClick={toggleNav}
                            type="button"
                            className="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-red-100 bg-gray-900 border border-[--primary-color] rounded-lg md:hidden   focus:outline-none focus:ring-2 focus:ring-[--prime-color]   ring-[--prime-color]  hover:bg-gray-900  "
                            aria-controls="navbar-sticky1"
                            aria-expanded={isNavVisible}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns=" "
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>


                    <div
                        id="navbar-sticky1"
                        className={`items-center  justify-between  w-full md:flex md:w-auto md:order-1 ${isNavVisible ? 'block  ' : 'hidden'
                            }`}
                    >
                        <ul className="   navcar  flex    flex-col p-4   md:py-1.5   mt-4 font-medium border border-[--primary-color]  md:rounded-[50px] rounded-lg   md:space-x-[3vmax] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   text-white tablet:bg-gray-900    ">

                            <li className='md:border-none border-b-[1px]  border-gradient '>
                                <Link to="/" onClick={closeMenu}>
                                    <div className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0  dark:border-gray-700 hover:text-[#e18dff] font-outfit   ">Home</div>
                                </Link>
                            </li>

                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=usecase" onClick={closeMenu}  >
                                    <div className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#e18dff] font-outfit ">Usecase</div>
                                </Link>
                            </li>
                            {/* <li className='md:border-none border-b-[1px] border-gradient '>
                                <a to="/How-to-buy" onClick={closeMenu}>
                                    <div className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#e18dff] font-outfit ">How to buy</div>
                                </a>
                            </li> */}
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=Tokenomics" onClick={closeMenu}>
                                    <div className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#e18dff] font-outfit ">Tokenomics</div>
                                </Link>
                            </li>
                            <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/?=Roadmap" onClick={closeMenu}>
                                    <div className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#e18dff] font-outfit ">Roadmap</div>
                                </Link>
                            </li>
                            {/* <li className='md:border-none border-b-[1px] border-gradient '>
                                <Link to="/Presale" onClick={closeMenu}>
                                    <div className=" font-normal block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:p-0       dark:border-gray-700 hover:text-[#e18dff] font-outfit ">Presale</div>
                                </Link>
                            </li> */}



                        </ul>

                    </div>


                </div>
            </nav>


           






        </>
    )
}

export default Navbar