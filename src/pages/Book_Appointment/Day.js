import React, { useState } from 'react'
import Image from 'next/image'
// import Cancle from "../../../public/Images/Profile_Services/Cancle.png";
// import Go from '../../../public/Images/Profile_Services/Go.png';
import { RxCross2 } from "react-icons/rx";
import {BsArrowRight} from "react-icons/bs";
import Final from './Final';

const Day = ({closeModal}) => {

    const [showModal, setShowModel] = useState(false)

    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className="modal-container flex justify-center items-center">
                <div className="box w-[1136px] h-[710px] relative">
                    <div className="flex justify-end py-10 pr-10">
                        <RxCross2 onClick={closeModal}/>
                    </div>
                    <div className="absolute top-[71px] left-[418px]">
                        <div className=" absolute w-[98%] h-[5px] top-[12px] right-1 bg-[#777D85]">
                            <div className="absolute w-0 h-[100%]"></div>
                        </div>
                        <div className=" flex justify-between w-[300px]  text-white text-xl font-semibold">
                            <div className="flex justify-center items-center z-10 rounded-full  px-[10px] bg-[#192537]">
                                <p>1</p>
                            </div>
                            <div
                                className="flex justify-center items-center z-10 rounded-full px-2 bg-[#192537]">
                                <p>2</p>
                            </div>
                            <div
                                className="flex justify-center items-center z-10 rounded-full px-2 bg-[#777D85]">
                                <p>3</p>
                            </div>
                        </div>
                    </div>


                    <div className="title flex justify-center mt-16">
                        <h1>Select Day & Time</h1>
                    </div>

                    <div className="select_day mx-[90px] grid grid-cols-2 gap-[88px] mt-14">
                        <div className=" w-full">
                            <h2>Day</h2>
                            <div className="grid grid-cols-2 gap-8 mt-8">
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label>Today</label>
                                </div>
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label>Tomorrow</label>
                                </div>
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label>Day after Tomorrow</label>
                                </div>
                            </div>

                            <div className="mt-7 w-[442px]">
                                <select
                                    className="w-full py-4 px-6">
                                    <option value={"Another day"}>Another day</option>
                                    <option>3 Days After</option>
                                    <option>4 Days After</option>
                                    <option>5 Days After</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2>Available Time Slotes (IST)</h2>
                            <div className="flex justify-between mb-5 mt-8">
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label>10:00 AM</label>
                                </div>
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label>10:30 AM</label>
                                </div>
                                <div>import { RxCross2 } from "react-icons/rx";
                                    <input type="radio" className="mr-[11px]" />
                                    <label className="font-family text-base text-[#192537] ">11:00 AM</label>
                                </div>
                            </div>
                            <div className="flex justify-between mb-5">
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label className="font-family text-base text-[#192537]">10:00 AM</label>
                                </div>
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label className="font-family text-base text-[#192537] ">10:30 AM</label>
                                </div>
                                <div>
                                    <input type="radio" className="mr-[11px]" />
                                    <label className="font-family text-base text-[#192537] ">11:00 AM</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-36 mx-14'>
                        <a className="flex justify-end items-center gap-4" onClick={() => setShowModel(true)} >Next<BsArrowRight /></a>
                        {showModal && <Final closeModal={closeModal} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Day