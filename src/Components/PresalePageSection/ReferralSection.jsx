
import referral_img from "../../assets/images/referral_mobile_coins.webp";

export default function Referral() {
    return (
        <div className=" w-screen py-20  ">
            <div className="  bg-[url('/refarbg.svg')] bg-cover bg-opacity-[0.3]   flex justify-between items-center mx-28 laptop:mx-10 desktop:tablet:mx-5 rounded-2xl bg-gray-500 p-5 px-20 desktop:tablet:px-5 desktop:px-10 text-black  desktop:tablet:flex-col-reverse gap-5 " >

                <div className=" ">
                    <div className=" flex flex-col gap-5 max-w-[50rem]" >
                        <p className=" text-3xl font-bold ">Earn a 10% bonus from all referred investors!</p>
                        <p className=" text-xl font-normal ">Share your unique link with friends, family, and your network, to automatically receive 10% of all of their investments in Ameio.</p>
                        <a className="border-2 rounded-full px-5 py-1 w-fit text-white font-bold " >Refer Now</a>
                    </div>
                </div>
                <div className=" " >
                    <img className=" h-auto w-[20rem] " src={referral_img} alt="" />
                </div>
            </div>

        </div>)
}