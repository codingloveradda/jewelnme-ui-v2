import Image from "next/image";
import Link from "next/link";
import MainMJP from "../../../public/Images/Header/MY_JEWEL_PLAN/MainMJP.png"
import D from "../../../public/Images/Header/MY_JEWEL_PLAN/D.png";
import Path from "../../../public/Images/Header/MY_JEWEL_PLAN/Path.svg";

const MJP = () => {
    return (
        <div className=" h-[437px] bg-white mt-[-4px] MJP_menu">
            <div className="p-10 mt-3 grid grid-cols-2 gap-20">
                <div className="pr-10">
                    <Image src={MainMJP} alt="main image" />
                </div>
                <div className="MJP_breif">
                    <div>
                        <h1 className="pt-[38px] mb-[29px] text-2xl text-[#192537] MJP_product_name">
                            My Jewel Plan
                        </h1>
                        <div className="w-[653px] h-[163px] grid content-between">
                            <p className="text-lg font-light MJP_product_description">
                                Acknowledging the true spirit of making fine jewelry
                                accessible to everyone, Jewelnme launched My Jewel Plan
                                (MJP), an economical and seamless method to ensure its
                                customers own every single jewel from their Wishlist.
                            </p>
                            <Link href={"./MJP_Plan"}>
                                <p className="text-lg pb-[27px]">
                                    Know more <span className="ml-4">
                                        <i className="fa-solid fa-arrow-right-long"></i></span>
                                </p>
                            </Link>
                        </div>

                        <Link href={"./MJP_Enrollment_form/Form"} legacyBehavior>
                            <a className=" btn_MJP">
                                Start MJP Now <span className="ml-4">
                                    <i className="fa-solid fa-arrow-right-long"></i></span>
                            </a>
                        </Link>

                    </div>
                    <div className="absolute top-[100px] left-[576px]">
                        <Image src={D} className=" " alt="ring" />
                    </div>
                    <div className="absolute top-[290px] right-[60px]">
                        <Image src={Path} className="MJP image" alt="ring" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MJP;