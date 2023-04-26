import React, { useState } from 'react'

import Completed from './Completed';
import {BsArrowRight} from "react-icons/bs";

const Final = ({closeModal}) => {

    const [showModal, setShowModel] = useState(false)

    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className="modal-container flex justify-center items-center">
                <div className="box w-[1136px] relative h-[710px]">
                    <div className="flex justify-end py-10 pr-10">
                        <BsArrowRight onClick={closeModal} />
                    </div>
                    <div className="absolute top-[71px] left-[418px]">
                        <div className=" absolute w-[98%] h-[5px] top-[12px] right-1 bg-[#192537]">
                            <div className="absolute w-0 h-[100%]"></div>
                        </div>
                        <div className=" flex justify-between w-[300px] text-white text-xl font-semibold ">
                            <div className="flex justify-center items-center z-10 rounded-full  px-[10px] bg-[#192537]">
                                <p>1</p>
                            </div>
                            <div className="flex justify-center items-center z-10 rounded-full px-2 bg-[#192537]">
                                <p>2</p>
                            </div>
                            <div className="flex justify-center items-center z-10 rounded-full px-2 bg-[#192537]">
                                <p>3</p>
                            </div>
                        </div>
                    </div>

                    <div className="title flex items-center flex-col mt-16 px-[140px]">
                        <h1>Final Details</h1>
                    </div>
                    <form className="information h-[350px] w-[920px] mx-auto mt-11 overflow-y-auto">
                        <div className="flex  gap-10">
                            <div className="py-3">
                                <label>First Name</label>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="py-3">
                                <label>Last Name</label>
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="py-3">
                                <label>Mobile Number</label><br />
                                <input type="text" placeholder="Mobile Number" />
                            </div>
                            <div className="py-3">
                                <label>Email ID</label><br />
                                <input type="text" placeholder="Email ID" />
                            </div>
                        </div>
                        <button className="mt-12"><i className="fa-solid fa-location-dot pr-4"></i> Use My Current Location</button>
                        <div className="flex flex-col py-3 mt-2">
                            <label>Address*</label>
                            <textarea className='pt-2' placeholder="Flat no./Building Name/Society/Landmark/Locality/Area"></textarea>
                        </div>
                        <div className="flex gap-10">
                            <div className="py-3">
                                <label>City</label>
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="py-3">
                                <label>State*</label>
                                <input type="text" placeholder="State" />
                            </div>
                        </div>
                        <div className="flex flex-col py-3">
                            <label>Pin Code</label>
                            <input type="text" placeholder="Pin Code" />
                        </div>
                        <div className="flex flex-col py-3 mt-2">
                            <label>Message (Optional)</label>
                            <textarea placeholder="Message"></textarea>
                        </div>
                    </form>
                    <div className="selected_day flex justify-between items-center mx-[100px] my-4">
                        <div className=" flex gap-7">
                            <p> Virtual Appointment: </p>
                            <p>12PM | Tuesday, 21 June 2022</p>
                        </div>
                        <a className="px-[50px] py-[10px]" onClick={() => setShowModel(true)}>Book an Appointment</a>
                        {showModal && <Completed closeModal={closeModal} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Final