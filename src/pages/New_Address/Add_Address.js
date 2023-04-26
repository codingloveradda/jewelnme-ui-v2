import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Add_Address = ({closeModel}) => {

    // const [showModal, setShowModel] = useState(false);

    return (
        <>
        
        <div className='modal-wrapper' onClick={closeModel}></div>
        <div className="model flex justify-center items-center">
            <div className="box">
                <div className="flex justify-end py-10 pr-10">
                    <Image src={Cancle} className="w-4" />
                </div>

                <div className='title flex items-center flex-col px-[140px]'>
                    <h1 className="text-2xl">Add New Address</h1>
                </div>
                <form className="h-[400px] w-[920px] mx-auto mt-11 overflow-y-auto">
                    <div className='information'>
                        <div className="flex gap-10">
                            <div className="py-3">
                                <label>First Name*</label>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div className="py-3">
                                <label>Last Name*</label>
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="flex flex-col py-3">
                            <label>Mobile Number*</label>
                            <input type="text" placeholder="Mobile Number" />
                        </div>

                        <div className="flex flex-col py-3 mt-2">
                            <label>Address*</label>
                            <textarea placeholder="Flat no./Building Name/Society/Landmark/Locality/Area"></textarea>
                        </div>

                        <div className="flex gap-10">
                            <div className="py-3">
                                <label>City*</label>
                                <input type="text" placeholder="City" />
                            </div>
                            <div className="py-3">
                                <label>State*</label>
                                <input type="text" placeholder="State" />
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="py-3">
                                <label>Pin Code*</label>
                                <input type="text" placeholder="Pin Code" />
                            </div>
                            <div className="py-3">
                                <label>Country*</label><br />
                                <input type="text" placeholder="Country" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[#192537] text-base mb-5 mt-3">Type of Address*</h2>
                        <div className='flex gap-40'>
                            <div>
                                <input type="radio" className="mr-2" /><label>Home</label>
                            </div>
                            <div>
                                <input type="radio" className="mr-2" /><label>Work</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[#192537] text-base mb-4 mt-10">Is your office open on weekends?*</h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <input type="radio" className="mr-2" /><label>Open on Saturday</label>
                            </div>
                            <div>
                                <input type="radio" className="mr-2" /><label>Open on Sunday</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <input type="radio" className="mr-2" /><label>Make this as my default address</label>
                    </div>
                </form>
                <div className="information flex gap-5 justify-end items-center mx-[100px] my-10">
                    <button><i className="fa-solid fa-location-dot pr-4"></i> Use My Current Location</button>
                   <div className="action_btn">
                     <a className="px-[102px] py-3.5">Save Address</a>
                   </div>
                </div>
            </div>
        </div>
    </>    
    )
}

export default Add_Address