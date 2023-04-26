import React, {useState} from 'react'
import Image from 'next/image';
import Cancle from "../../../public/Images/Profile_Services/Cancle.png"
import Coupon_Banner from "../../../public/Images/Coupon/Coupon_Banner.jpg"
import {RxCross1} from "react-icons/rx"
import Completed from '../Book_Appointment/Completed';

const Apply_Coupon = () => {

    const [showModal, setShowModel] = useState(false);

    const closeModel = () => setShowModel(false);
    return (
        <div className="model flex justify-center items-center relative">
            <div className="box relative ">
                <div className="apply-coupon h-[244px]"
                 style={{ backgroundImage: `url(${Coupon_Banner.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
                 }}
                 >
                    <div className="apply-icons-cros">
                        <RxCross1 />
                    </div>
                    <div className="img_title">
                        <p>Add Gift Wrap</p>
                    </div>
                </div>

                <div className='coupon_details px-12 pt-[42px]'>
                    <div>
                        <a>
                            <input type="radio" className="mr-[10px]" />
                            <label>Add Gift Wrap</label>
                        </a>

                    </div>
                    <div className="grid grid-cols-2 mt-10 gap-12">
                        <div>
                            <label>Message</label>
                            <textarea className="h-[183px] w-[100%] py-5 px-4 mt-2.5">Write a massage</textarea>
                            <input type="text" placeholder="From" className="w-[100%] p-2" />
                        </div>
                        <div>
                            <div>
                                <label>Occasion</label>
                                <input type="text" placeholder="Enter the Event" className="w-[100%] p-2 mt-2.5" />
                            </div>

                            <div className='mt-[55px]'>
                                <label>Occasion Date</label>
                                <input type="text" placeholder="Enter the Event" className="mt-2.5 w-[100%] p-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action_btn flex justify-end px-[50px] mt-11">
                    <a  onClick={() => setShowModel(true)}>Add</a>
                    {showModal && <Completed closeModel={closeModel} />}
                </div>

            </div>
        </div>
    )
}

export default Apply_Coupon