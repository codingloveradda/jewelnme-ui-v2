import React from 'react';
import Image from 'next/image';
import { BsWhatsapp } from "react-icons/bs";
import Cancle from "../../../public/Images/Profile_Services/Cancle.png";


const Whatsapp = ({ closeModal }) => {
    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className="modal-container flex justify-center items-center">
                <div className="box w-[400px] h-[340px]">
                    <div className="flex justify-end pt-6 pr-6">
                        <Image src={Cancle} className="w-4" onClick={closeModal}/>
                    </div>
                    <div className="whatsapp flex flex-col items-center mt-6">
                        <div className="rounded-full bg-[#00D95F] p-2">
                        <BsWhatsapp className='text-white' />
                        </div>
                        <p className="mt-5">Chat with our experts at</p>
                        <div className="number flex mt-5">
                            <div>
                                <p>+91 788 882 6136 &nbsp;</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <img src="/images/QR.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Whatsapp;