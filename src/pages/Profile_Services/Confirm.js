import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Ring from "../../../public/Images/Profile_Services/ring.png";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Confirm = () => {
    return (
        <div className="model flex justify-center items-center py-[119px]">
            <div className="box w-[1136px] h-[710px]">
                <div className="pl-20 pt-10 pr-10">
                    <div className="flex justify-end">
                        <Image src={Cancle} className="w-4" />
                    </div>
                    <div className="panel flex justify-around items-center mt-7">
                        <h2>Address</h2>
                        <h2>Select Date & Time</h2>
                        <h1>Review & Confirm</h1>
                    </div>
                </div>
                <div className="product_box mt-[106px]">
                    <div className="grid grid-flow-col auto-cols-max">
                        <div className="img_box ml-8 px-10 ">
                            <div className="w-[260px]">
                                <Image src={Ring} alt="" />
                            </div>
                            <p>Arcana Fresh Diamond Studs - <span>URX1GX15</span></p>
                        </div>
                        <div className="pickup_details mt-5 px-9">
                            <h2 className="mt-7">Estimated Charges</h2>
                            <h1 className="mt-4">₹ 25,000</h1>
                            <div className="pt-9">
                                <div className="flex gap-11">
                                        <span>Pickup day & time :</span>                                   
                                    <div className="flex gap-10">
                                        <p>Tuesday,21 June 2022</p>
                                        <p>10:00 AM - 12:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex gap-[70px] pt-6">
                                        <span>Pickup address :</span>
                                    <div>
                                        <p>House No., Landmark, Sector City, State, Pincode</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="request flex justify-end items-center pt-24 pr-16 gap-16">
                    <div>
                        <p>*Please be available at the time of pickup</p>
                    </div>
                    <Link href={"../Profile_Services/Submitted"} legacyBehavior><a className="px-20 py-3">Request Pickup</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Confirm;