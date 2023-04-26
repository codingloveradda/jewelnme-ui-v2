import React from 'react';
import Image from 'next/image';
import { FiPhone } from "react-icons/fi";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";

const Mobile = ({closeModal}) => {
    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className="modal-container flex justify-center items-center">
                <div className="box w-[400px] h-[250px]">
                    <div className="flex justify-end pt-6 pr-6">
                        <Image src={Cancle} className="w-4" onClick={closeModal}/>
                    </div>
                    <div className="flex flex-col items-center mt-6">
                        <div className="rounded-full p-2 bg-[#192537]">
                        <FiPhone  className='text-white'/>
                        </div>
                        <p className="mt-5">Talk to our experts at</p>
                        <div className="number flex mt-5">
                            <div className="">
                                <p>+91 172 4089888 &nbsp;</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mobile;