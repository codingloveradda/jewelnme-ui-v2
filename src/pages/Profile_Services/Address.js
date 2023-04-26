import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";


const Address = () => {
    return (
        <div className="model flex justify-center py-[119px]">
            <div className="box w-[1136px] h-[710px]">
                <div className="detail pl-20 py-10 pr-10">
                    <div className="flex justify-end">
                        <Image src={Cancle} className="w-4" />
                    </div>
                    <div className="panel flex justify-around items-center mt-7">
                        <h1>Address</h1>
                        <h2>Select Date & Time</h2>
                        <h2>Review & Confirm</h2>
                    </div>
                    <div className="grid grid-flow-col auto-cols-fr pt-[106px] gap-[374px] ">
                        <div className="address">
                            <div>
                                <input type="radio" />
                                <label for="" className="pl-6">John Deo <span>Home</span></label>
                            </div>
                           <div className='my-5'>
                             <p>House No., Landmark, Sector City, State, Pincode</p>
                           </div>
                            <p>Mobile No: +91 000 000 0000</p>
                        </div>
                        <div className="action_btn mt-[120px]">
                            <Link href={"../Profile_Services/Pickup"} legacyBehavior><a className="px-[69px] py-3.5">Pickup from Here</a></Link>
                        </div>
                    </div>
                </div>
                <div className="new_address mt-[70px] pl-[120px]">
                    <Link href={"../New_Address/Add_Address"} legacyBehavior><a className="px-7 py-3.5">+ Add New Address</a></Link>
                </div>
            </div>
        </div>
    );
}

export default Address;