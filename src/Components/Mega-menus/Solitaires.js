import Image from "next/image";
import Studs from "../../../public/Images/Header/Solitaires/Studs.png";
import asscher from "../../../public/Images/Header/Solitaires/group/asscher.png";
import cushion from "../../../public/Images/Header/Solitaires/group/cushion.png";
import emerald from "../../../public/Images/Header/Solitaires/group/emerald.png";
import heart from "../../../public/Images/Header/Solitaires/group/heart.png";
import marquise from "../../../public/Images/Header/Solitaires/group/marquise.png";
import oval from "../../../public/Images/Header/Solitaires/group/oval.png";
import pear from "../../../public/Images/Header/Solitaires/group/pear.png";
import princes from "../../../public/Images/Header/Solitaires/group/princes.png";
import radiant from "../../../public/Images/Header/Solitaires/group/radiant.png";
import round from "../../../public/Images/Header/Solitaires/group/round.png";
import Link from "next/link";

const Solitaires = () => {

    return (
        <>
            <div className="bg-white mt-[-4px] Solitaires_menu">
                <div className="p-10 mt-3 grid grid-cols-2">
                    <div className="grid grid-cols-2 pr-8 grid-gap Solitaires_collection">
                        <div className="">
                            <Image src={Studs} alt="Studs" />
                        </div>
                        <div className="">
                            <h2 className=" text-2xl font-bold pt-10">
                                Jewelnme Solitaire Collection
                            </h2>
                            <p className=" text-lg font-light pt-7 mb-7">
                                Giving a jewel is always special. "Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <Link href={"./Solitaires/Solitaires"} legacyBehavior>
                                <a className="py-3 px-8 text-lg">
                                    View all <span className="ml-4">
                                        <i className="fa-solid fa-arrow-right"></i></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max px-10 gap-x-40">
                        <div className="">
                            <h2 className="text-[#192537] text-lg font-semibold pt-10 ">
                                Buy Loose Diamonds
                            </h2>

                            <div className="flex gap-16">
                                <div className="flex flex-col">
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={round} alt="round" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Round
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={oval} alt="oval" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Oval
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={cushion} alt="cushion" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Cushion
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={pear} alt="pear" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Pear
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={princes} alt="princes" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Princess
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={emerald} alt="emerald" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Emerald
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={marquise} alt="marquise" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Marquise
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={asscher} alt="asscher" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Asscher
                                        </p>
                                    </Link>
                                </div>
                                <div className="flex flex-col">
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={radiant} alt="radiant" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Radiant
                                        </p>
                                    </Link>
                                    <Link href={"../Process"} className="flex items-center gap-6 pt-6">
                                        <Image src={heart} alt="heart" />
                                        <p className="text-[#192537] text-lg font-light">
                                            Heart
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-[#192537] text-lg font-semibold pt-10 ">
                                Shop by Price
                            </h2>
                            <Link href={"../Process"}>
                                <p className="pt-6 text-[#192537] text-lg font-light ">
                                    Under ₹ 25,000
                                </p>
                            </Link>
                            <Link href={"../Process"}>
                                <p className="pt-4 text-[#192537] text-lg font-light ">
                                    ₹ 25,000 - ₹ 1 Lakh
                                </p>
                            </Link>
                            <Link href={"../Process"}>
                                <p className="pt-4 text-[#192537] text-lg font-light ">
                                    Above ₹ 1 Lakh
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Solitaires;