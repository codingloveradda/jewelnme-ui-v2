import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Ring from "../../../public/Images/Profile_Services/ring.png";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Exchange = ({closeModal}) => {
    return (
        <>
        <div className='modal-wrapper' onClick={closeModal}></div>
        <div className="modal-container flex justify-center items-center" >
            <div className="box w-[1136px] h-[710px]">
                <div className="h-[566px]">
                    <div className="pl-[122px] pt-10 pr-10">
                        <div className="flex justify-end">
                            <Image src={Cancle} className="w-4" onClick={closeModal}/> 
                        </div>
                        <div className="grid grid-flow-col auto-cols-max gap-[120px] mt-[62px]">
                            <div>
                                <div>
                                    <Image src={Ring} alt="" />
                                </div>
                                <p className="img_text">Arcana Fresh Diamond Studs - <span>URX1GX15</span></p>
                            </div>
                            <div className="details_exchange">
                                <h1>Exchange My Jewel</h1>
                                <h3>Billing Value: ₹ 25,000</h3>
                                <h4>Current Value</h4>
                                <h2 className="mt-3.5">₹ 25,000</h2>
                                <span>*Exchange value may vary, depanding on the product's condition</span>
                                <p>The amount will be transferred to your JM Points after quality test.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="term_box flex justify-center items-center pl-[122px] pr-[66px] gap-[187px] h-[144px]">
                    <div className="confirm">
                        <input type="radio" />
                            <label className='ml-2'>By clicking this you agree to our <span><a href="#">Terms-and-Conditions.</a></span></label>
                    </div>
                    <div className="action_btn">
                    <Link href={"../Profile_Services/Address"} legacyBehavior><a className="px-[75px] py-3">Schedule Pickup</a></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Exchange;