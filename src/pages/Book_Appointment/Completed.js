import React from 'react'
import Image from 'next/image';
// import Cancle from "../../../public/Images/Profile_Services/Cancle.png";
import Virtual_Appointments from "../../../public/Images/Book_Appointment/virtual-appointments.jpg";
import { RxCross2 } from "react-icons/rx";

const Completed = ({closeModal}) => {
    return (
        <>
        <div className='modal-wrapper' onClick={closeModal}></div>
            <div className="modal-container flex justify-center items-center">
                <div className="box w-[1136px] relative h-[710px]" >
                    <div className="h-[382px] w-[1136px]" style={{ backgroundImage: `url(${Virtual_Appointments.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className="flex justify-end py-10 pr-10">
                            <RxCross2 onClick={closeModal} />
                        </div>
                    </div>

                    <div className="booked_title flex items-center flex-col pt-9 px-[227px]" >
                        <h2>Appointment Booked!</h2>
                        <p className="mt-7 px-10">We can't wait to meet you. You will receive an email shortly with more details on your virtual appointment.</p>

                        <div className="action_btn mt-[53px] flex justify-center gap-20">
                            <a className="px-12 py-3">Add To Outlook Calender</a>
                            <a className="px-12 py-3">Add To Google Calender</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Completed