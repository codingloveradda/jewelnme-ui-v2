import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";
import My_Order from "../../../public/Images/Profile_Services/my_order@2x.png";

const Submitted = () =>{
    return (
        <div className="model flex justify-center py-[119px]">
            <div className="box w-[1136px] h-[710px]">
                <div className="pl-20 pt-10 pr-10">
                    <div className="flex justify-end">
                        <Image src={Cancle} alt="cancle" className="w-4" />
                    </div>
                    <div className="submit_details flex flex-col items-center pt-10">
                        <Image src={My_Order} alt="bag" className="w-[230px] h-[230px]"/>
                        <h2 className="mt-[70px]">Submitted Successfully</h2>
                        <p className="font-normal mt-[28px]">Thank you for your submission!
                            We will get in touch with you.</p>
                        <Link href={"/"} legacyBehavior><a className="px-[117px] py-[14px] mt-[70px]">Home</a></Link>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Submitted;