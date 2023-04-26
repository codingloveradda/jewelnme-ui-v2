import React, { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { RxArrowRight } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import FirstCarousel from "../../Components/Page9Carousel/FirstCarousel";
import ProductCardP9 from "../../Components/ProductCardP9/ProductCardP9";
import OurPromise from "../../Components/OurPromise/OurPromise";
import RingBannerIMG from "../../../public/Images/page-9/main_banner.jpg";
import dRingIMG from "../../../public/Images/Header/MY_JEWEL_PLAN/D.png";
import MJPhomepage from "../../../public/Images/page-9/MJPHomepage.jpg";
import xasscher from "../../../public/Images/Header/Solitaires/group/2x/asscher2.png";
import xcushion from "../../../public/Images/Header/Solitaires/group/2x/cushion2.png";
import xemerald from "../../../public/Images/Header/Solitaires/group/2x/emerald2.png";
import xheart from "../../../public/Images/Header/Solitaires/group/2x/heart2.png";
import xmarquise from "../../../public/Images/Header/Solitaires/group/2x/marquise2.png";
import xoval from "../../../public/Images/Header/Solitaires/group/2x/oval2.png";
import xpear from "../../../public/Images/Header/Solitaires/group/2x/pear2.png";
import xprinces from "../../../public/Images/Header/Solitaires/group/2x/princes2.png";
import xradiant from "../../../public/Images/Header/Solitaires/group/2x/radiant2.png";
import xround from "../../../public/Images/Header/Solitaires/group/2x/round2.png";
import ReviewUser from "../../../public/Images/page-9/user.png";
import InstaPhoto from "../../../public/Images/page-9/InstaPhoto3.png";
import SecCarousel from "../../Components/Page9Carousel/SecCarousel";

import Consult from "../Book_Appointment/Consult";





const MainHome = () => {


    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);


    return (
        <>
            <Header />


            {/* <div className="h-[100%] " style={{ backgroundImage: `url(${RingBannerIMG.src})`, backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPosition:"top" }}>
            </div> */}
            <div className="banneer">
                 <Image src={RingBannerIMG} className="w-full" alt="mjp" />
            </div>

            <OurPromise />
            <div className="grid grid-cols-2 relative mjp_consult_wrapper">
                <div className="">
                    <Image src={MJPhomepage} className="lapl:h-[550px] laps:h-[404px]" alt="mjp" />
                </div>
                <div className="laps:py-[30px] lapl:py-[40px] laps:pl-[70px] lapm:pl-[100px] lapl:pl-[150px] lapXL:pl-[216px] mjp_consult">
                    <h1 className="laps:text-[26px] lapl:text-[36px] laps:mb-2 lapl:mb-8">My Jewel Plan (MJP)</h1>
                    <p className=" laps:w-[380px] lapm:w-[500px] laps:mb-2 lapl:mb-5 laps:text-[14px] lapl:text-[18px] mjp_consult_descrip">Acknowledging the true spirit of making
                        fine jewelry accessible to everyone, Jewelnme launched My Jewel Plan (MJP), an economical 
                        and seamless method to ensure its customers own every single jewel from their Wishlist.
                    </p>
                    <Link href="/MJP_Plan" className="text-base text-[#192537] laps:text-[14px] lapl:text-[18px] text-center flex items-center ">Know more <span className="ml-3"><RxArrowRight /></span></Link>
                    <p className="text-base laps:mt-8 lapl:mt-14 laps:mb-3 laps:text-[14px] lapl:text-[18px] lapl:mb-8 ">Consult With Our Sales Representative</p>
                    <div className="flex laps:flex-col lapl:flex-row">
                        <a className="btn_mjp_consult lapl:mb-0 laps:mb-5 laps:text-[14px] lapl:text-[18px] laps:w-[200px] lapl:w-[235px] mr-8" onClick={() => setShowModal(true)}>Book an Appointment<BsArrowRight /></a>
                        {showModal && <Consult closeModal={closeModal} />}
                        <Link href={"../MJP_Enrollment_form/Form"} className="btn_mjp_consult lapl:w-[190px] laps:w-[160px] laps:text-[14px] lapl:text-[18px]">Start MJP Now <BsArrowRight /></Link>
                    </div>
                </div>
                <div className="absolute laps:top-[35%] laps:left-[33%] lapl:top-[30%] lapl:left-[36.2%]">
                    <Image src={dRingIMG} alt="ring" className="lapl:w-[482px] lapl:h-[482px] laps:w-[325px] laps:h-[325px] " />
                </div>
            </div>

            {/* Solitaires */}
            <div className="laps:px-[50px] lapl:px-[100px] pt-[116px] Solitaires_diamonds h-[550px]">
                <h1 className="text-3xl text-center mb-[116px]">Shop Solitaires by Shape</h1>
                <Link href={"Solitaires/Solitaires"} className="flex justify-between">
                    {/* <!-- Stone Cards --> */}
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px]">
                            <Image src={xround} alt="round" />
                        </div>
                        <p className="text-start ml-3">Round</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px]">
                            <Image src={xoval} alt="oval" />
                        </div>
                        <p className="text-start ml-4">Oval</p>
                    </div>
                    <div className="w-[115px] h-[130px] ">
                        <div className="w-[115px] h-[120px] flex ">
                            <Image src={xcushion} alt="cushion" className="self-center" />
                        </div>
                        <p className="text-start ml-2">Cushion</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px]  flex flex-col">
                            <Image src={xpear} alt="Pear" className="mt-[10px]" />
                        </div>
                        <p className="text-start ml-5 justify-self-center">Pear</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xprinces} alt="Princess" className="mt-[20px]" />
                        </div>
                        <p className="text-start ml-2">Princess</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xemerald} alt="emerald" className="mt-[10px]" />
                        </div>
                        <p className="text-start ml-2">Emerald</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xmarquise} alt="marquise" className="mt-[0px]"/>
                        </div>
                        <p className="text-start ml-2">Marquise</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xasscher} alt="asscher" className="mt-[22px]" />
                        </div>
                        <p className="text-start ml-3">Asscher</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xradiant} alt="Radiant"  className="mt-[19px]"/>
                        </div>
                        <p className="text-start ml-3">Radiant</p>
                    </div>
                    <div className="w-[115px] h-[140px]">
                        <div className="w-[115px] h-[120px] flex flex-col">
                            <Image src={xheart} alt="heart"  className="mt-[19px]"/>
                        </div>
                        <p className="text-start ml-5 ">Heart</p>
                    </div>
                </Link>
            </div>

            {/* carousel */}
            <div className="py-12">
                <FirstCarousel/>
            </div>

            <div className="New-Arrivals ">
                <h1>New Arrivals</h1>
                <div className=" New-Arrivals_wrapper ">
                    <ProductCardP9 />
                    <ProductCardP9 />
                    <ProductCardP9 />
                    <ProductCardP9 />
                </div>
            </div>
            <div className="New-Arrivals ">
                <h1>Top Selling</h1>
                <div className=" New-Arrivals_wrapper ">
                    <ProductCardP9 />
                    <ProductCardP9 />
                    <ProductCardP9 />
                    <ProductCardP9 />
                </div>
            </div>

            {/* Review Section */}
            <div className="h-[592px] bg-[#FCFCFC] user-review">
                <h1 className="pt-[80px] text-3xl font-bold text-center">Customer Reviews</h1>
                <div className="mx-[300px]">
                    <div className="flex justify-center itmes gap-[60px]">
                        <Image className="mt-[112px] h-[69px] w-[68px] rounded-full lastone"
                            src={ReviewUser} alt="" />
                        <Image className="h-[85px] mt-[104px] w-[85px] rounded-full seclast"
                            src={ReviewUser} alt="" />
                        <Image className="h-[119px] mt-[87px] w-[118px] rounded-full"
                            src={ReviewUser} alt="" />
                        <Image className="h-[85px] mt-[104px] w-[85px] rounded-full seclast"
                            src={ReviewUser} alt="" />
                        <Image className=" mt-[112px] h-[69px] w-[68px] rounded-full lastone"
                            src={ReviewUser} alt="" />
                    </div>
                    <div className="review_description">
                        <h2 className=" text-center mt-8">Surbhi</h2>
                        <div className="text-center">
                            <p className=" mx-auto"> Ring received today! Absolutely beautiful! Am very pleased-thank you so much! it feels on and a great fit. </p>
                            <div className="Rating_Stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*  Share your moments with us!  */}
            <div className="grid grid-cols-2 my-[80px] mx-[100px] Social_share">
                <div className="w-[350px] h-[550px] ml-[100px] flex justify-center InstaPhoto">
                    <Image src={InstaPhoto} alt="" />
                </div>
                <div className="my-[50px] text-[#192537]">
                    <h1 className=" mb-10">Share your moments with us!</h1>
                    <p className="w-[646px] font-light">
                        We'd love to feature your images and videos on our website (but we'll always check with you before
                        we
                        do). Whether it's your favorite piece of Jewelnme jewelry or a special moment, here are a few tips
                        on
                        how to take a great shot:
                    </p>
                    <ul className="mt-8 text-base font-light">
                        <li>
                            <p className="mb-2">1. Ensure your photo is in focus</p>
                        </li>
                        <li>
                            <p className="mb-2">2. Use natural color in good light.</p>
                        </li>
                        <li>
                            <p className="mb-2">3. Capture the spontaneous, real moments in between the poses.</p>
                        </li>
                        <li>
                            <p className="mb-2"> 4. Share on Instagram using <span className="font-bold">#Jewelnme</span> and tag us <span className="font-bold">@myjewelnme.</span></p>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Stay Social */}
                <SecCarousel/>

            <Footer />
        </>
    );
}

export default MainHome;