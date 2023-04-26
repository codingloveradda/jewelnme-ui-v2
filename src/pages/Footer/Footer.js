import Image from "next/image";
import Group1 from "../../../public/Images/Footer/Group 9964.svg"
import Group2 from "../../../public/Images/Footer/Group 9965.svg"
import Group3 from "../../../public/Images/Footer/Group 9966.svg"
import Group4 from "../../../public/Images/Footer/Group 9967.svg"
import Group5 from "../../../public/Images/Footer/Group 9968.svg"
import Group6 from "../../../public/Images/Footer/Group 9969.svg"
import Group7 from "../../../public/Images/Footer/Group 9970.svg"
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className="grid  laps:grid-cols-3  lapm:p-[100px] laps:p-[60px] mbs:p-[20px] bg-[#192537]">
                <div className="Stay">
                    <h1 className="text-white mbs:text-base tabl:text-xl mb-8">STAY CONNECTED</h1>
                    <div className="flex border-b-2 border-white mbs:w-52 laps:w-60 mb-8">
                        <input type="text" className="bg-[#192537] mr-5" placeholder="Enter Email Address" />
                        <p className="text-white"><i className="fa-solid fa-arrow-right-long "></i></p>
                    </div>
                    <p className="text-white w-[475px] font-light mb-5">
                        By subscribing to our newsletter you agree to our <br /> privacy policy. *(restrictions and
                        exclusions
                        apply)
                    </p>
                    <div className="flex text-white mb-5 ">
                    <Link href={"https://www.facebook.com/myjewelnme"}>
                            <i className="text-2xl mr-4 fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link href={"https://www.instagram.com/myjewelnme/"}>
                            <i className="text-2xl mr-4 fa-brands fa-instagram"></i>
                        </Link >
                        <Link href={"https://in.pinterest.com/myjewelnme/"}>
                            <i className="text-2xl mr-4 fa-brands fa-pinterest"></i>
                        </Link >
                        <Link href={"https://www.youtube.com/@myjewelnme"}>
                            <i className="text-2xl mr-4 fa-brands fa-youtube"></i>
                        </Link >
                        <Link href={"https://twitter.com/myjewelnme"}>
                            <i className="text-2xl mr-4 fa-brands fa-twitter"></i>
                        </Link >
                        <Link href={"https://in.linkedin.com/company/myjewelnme"}>
                            <i className="text-2xl mr-4 fa-brands fa-linkedin-in"></i>
                        </Link >
                    </div>
                </div>
                <div className="col-span-2 text-white">
                    <div className="grid lapm:grid-cols-4 laps:grid-cols-2 ">
                        <div>
                            <h1 className="mbs:text-base tabl:text-xl mb-8">EXPLORE</h1>
                            <ul>
                            <Link href={"../Process"}><li className="text-lg font-light mb-5">Rings</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Earings</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Pendants</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Necklaces</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Bangles</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Solitaires</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light ">My Jewel Plan</li></Link>
                            </ul>
                        </div>
                        <div>
                            <h1 className="mbs:text-base tabl:text-xl mb-8">JEWEL GUIDE</h1>
                            <ul>
                                <Link href={"/Authenticity"}>
                                 <li className="text-lg font-light mb-5">Authenticity</li>
                                </Link>
                                <Link href={"/Diamonds"}>
                                <li className="text-lg font-light mb-5">Diamond</li>
                                </Link>
                                <Link href={"/Gem_Stone"}>
                                <li className="text-lg font-light mb-5">Gem Stone</li>
                                </Link>
                                <Link href={"/Precious_Metals"}>
                                <li className="text-lg font-light">Metal</li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h1 className="mbs:text-base tabl:text-xl mb-8">POLICIES</h1>
                            <ul>
                            <Link href={"../Process"}><li className="text-lg font-light mb-5">Exchange Policy</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Buy back policy</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Resizing & Repairs</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">Privacy policy</li></Link>
                                <Link href={"../Process"}><li className="text-lg font-light">Term & Conditions</li></Link>
                            </ul>
                        </div>
                        <div className="grid content-between">
                            <div>
                                <h1 className="mbs:text-base tabl:text-xl mb-8">QUERY</h1>
                                <ul>
                                <Link href={"../Process"}><li className="text-lg font-light mb-5">FAQs</li></Link>
                                    <Link href={"../Process"}><li className="text-lg font-light mb-5">Career</li></Link>
                                    <Link href={"../Process"}><li className="text-lg font-light">Contact</li></Link>
                                </ul>
                            </div>
                            <div className="flex justify-end">
                                <span className="text-xl font-light"><i className="fa-solid fa-arrow-up"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="h-[93px] mbs:text-center tabl:text-start grid laps:grid-cols-3 laps:grid-rows-1 tabl:grid-cols-3 justify-center items-center laps:px-[100px] mbs:px-[20px] py-4 footer_bar ">
                <div>
                    <p className="mbs:text-[11px] laps:text-lg font-light">Corporate Identity Number:
                        U36999PB2021PTC054075
                    </p>
                </div>
                <div>
                    <p className="mbs:text-[11px] laps:text-lg font-light">Jewelnme Private Limited 2022, All Rights
                        Reserved.</p>
                </div>
                <div
                    className=" mbs:grid mbs:grid-cols-7 laps:col-span-0 mbs:justify-items-center mbs:items-center mbs:justify-center ">
                    <div>
                        <Image src={Group1} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                    <div>
                        <Image src={Group2} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                    <div>
                        <Image src={Group3} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                    <div>
                        <Image src={Group4} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                    <div>
                        <Image src={Group5} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                    <div>
                        <Image src={Group6} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                    <div>
                        <Image src={Group7} className="mbs:w-6 laps:w-9" alt="payment mode" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer;