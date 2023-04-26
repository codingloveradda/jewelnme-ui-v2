import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/Images/Logo.svg";
import ContectUs from "../../../public/Images/Header/Navbar-Icons/ContactUs.svg";
import Appointment from "../../../public/Images/Header/Navbar-Icons/Appointment.svg";
import Search from "../../../public/Images/Header/Navbar-Icons/Search.svg";
import Profile from "../../../public/Images/Header/Navbar-Icons/Profile.svg";
import Heart from "../../../public/Images/Header/Navbar-Icons/Heart.svg";
import bag from "../../../public/Images/Header/Navbar-Icons/Bag.svg";
import Solitaires from "../../Components/Mega-menus/Solitaires";
import Rings from "../../Components/Mega-menus/Rings";
import MJP from "../../Components/Mega-menus/MJP";

import { useState } from "react";
import SidebarDashboard from "../Sidebar/SidebarDashboard";
import Bag from "../Sidebar/Bag";
import Wishlist from "../Sidebar/Wishlist";
import Consult from "../Book_Appointment/Consult";


const Header = () => {

    const [bookApp, setBookApp] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);
    const [wishlistSide, setWistlistSide] = useState(false);
    const [bagSide, setBagSide] = useState(false);

 

    return (
        <>
            {/* Offer bar */}
            <div className="Offer_bar tabl:justify-center mbs:justify-around mbs:px-5 tabl:px-1 relative">
                <p className="laps:text-base">Live gold Price,</p>
                <p className="laps:text-base">Special Offer,</p>
                <p className="laps:text-base">Start My Jewel Plan Today 11+1</p>
                <p className="laps:absolute top-2 right-10 text-base mbs:hidden laps:block">
                    <i className="fa-solid fa-xmark"></i>
                </p>
            </div>

            {/* Logo bar */}
            <div className="Logo_bar tabl:flex tabl:justify-between tabl:px-[80px] laps:px-[100px] tabl:py-4 laps:py-6 lapm:py-8 mbs:hidden  border">
                <div className="flex w-[146px] justify-between items-center">
                    <Link href={"/Contact_Us"}>
                    <Image
                        src={ContectUs}
                        className="tabl:w-[25px] tabl:block mbs:hidden"
                        alt="Contect us"
                    /></Link>
                     
                    <Image 
                        src={Appointment}
                        className="tabl:w-[25px] tabl:block mbs:hidden"
                        alt="Book an Appointment"
                        onClick={() => setBookApp(true)}
                    />
                    {bookApp && <Consult closeModal={() => setBookApp(false)} />}

                    
            
                    <Image
                        src={Search}
                        className="mbs:w-[18px] tabl:w-[25px] tabl:block "
                        alt="Search"
                    />
                </div>
                <div>
                    <Link href={"/"}>
                    <Image
                        src={logo}
                        className="tabl:w-[160px] laps:w-[178px]"
                        alt="Logo"
                    />
                    </Link>
                 
                </div>
                <div className="flex w-[146px] tabl:justify-between mbs:justify-end items-center">
                    <Image
                        src={Profile}
                        className="tabl:w-[25px] tabl:block mbs:hidden"
                        alt="Profile"
                        onClick={() => setShowDashboard(true)}
                    />
                  {showDashboard && <SidebarDashboard closeModal={() => setShowDashboard(false)} />}
                    <Image
                        src={Heart}
                        className="tabl:w-[25px] tabl:block mbs:hidden"
                        alt="Heart"
                        onClick={() => setWistlistSide(true)}
                    />
                    {wishlistSide && <Wishlist closeModal={() => setWistlistSide(false)} />}
                   
                    <Image
                        src={bag}
                        className="tabl:w-[21px] tabl:block mbs:hidden"
                        alt="Bag"
                        onClick={() => setBagSide(true)}
                   
                    />
                    {bagSide && <Bag closeModal={() => setBagSide(false)} />} 

                    <span className="tabl:hidden mbs:block text-lg">
                        <i className="fa-solid fa-bars"></i>
                    </span>
                </div>
            </div>

            {/* nav-items menu */}
            <div className="flex hamburger tabl:justify-center py-2 menu-shadow navigation_bar">
                <div className="search_icon flex items-center tabl:hidden">
                    <Image
                        src={Search}
                        className="mbs:w-[18px] tabl:w-[25px] tabl:block"
                        alt="Search"
                    />
                </div>

                <div>
                    <Image src={logo} className="tabl:hidden mbs:w-[160px]" alt="Logo" />
                </div>

                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn tabl:hidden">
                    <i className="fas fa-bars"></i>
                </label>

                <ul className="flex tabl:justify-between items-center laps:w-[1014px] tabl:w-[740px] nav_ul">
                    <li className="hoverable Rings_hover active at">
                        <a className="text-base duration-150 hover:text-yellow-600">
                            RINGS
                        </a>

                        <div className="Rings z-20">
                          <Rings/>
                        </div>
                    </li>

                    <li>
                        <Link href={"./Process"} legacyBehavior>
                            <a className="text-base duration-150 hover:text-yellow-600">
                                EARRINGS
                            </a>
                        </Link>
                    </li>
                    <li>
                    <Link href={"./Process"} legacyBehavior>
                        <a className="text-base duration-150 hover:text-yellow-600">
                            PENDANTS
                        </a>
                        </Link>
                    </li>
                    <li>
                    <Link href={"./Process"} legacyBehavior>
                        <a className="text-base duration-150 hover:text-yellow-600">
                            NECKLACES
                        </a>
                        </Link>
                    </li>
                    <li>
                    <Link href={"./Process"} legacyBehavior>
                        <a className="text-base duration-150 hover:text-yellow-600">
                            BANGLES
                        </a>
                        </Link>
                    </li>
                    <li className="hoverable">
                        <a className="text-base duration-150 hover:text-yellow-600">
                            SOLITAIRES
                        </a>

                        <div className="Solitaires z-20">
                            <Solitaires />
                        </div>
                    </li>

                    <li className="hover_effect">
                        <a className="text-base duration-150 hover:text-yellow-600">
                            MY JEWEL PLAN
                        </a>

                        <div className="mjp_design h-[437px] z-20 max-w-[1920px]">
                            <MJP/>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
