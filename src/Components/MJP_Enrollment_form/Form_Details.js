import Link from 'next/link'
import React, { useState } from 'react';
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Mobile from '../Help_Service/Mobile';
import Whatsapp from '../Help_Service/Whatsapp';
import Alert from '../Help_Service/Alert';

const Form_Details = () => {

    const [showMobile, setShowMobile] = useState(false)
    const [showWhatsapp, setShowWhatsapp] = useState(false)
    const [showAlert, setShowAlert] = useState(false)


    return (
        <div className=' flex flex-col justify-center items-center px-[440px]'>
            <div>
                <form className="form_data grid grid-cols-2 gap-[50px]">
                    <div>
                        <label>Plan</label>
                        <select className="w-full mt-[10px] px-2 py-2.5 ">
                            <option>Select</option>
                            <option>My Jewel Plan (MJP)</option>
                            <option>My Solitarie Plan (MSP)</option>
                            <option>My Gold Plan (MGP)</option>
                            <option>My Digital Gold Plan (MDGP)</option>
                        </select>
                    </div>
                    <div>
                        <label>Choose an Amount</label>
                        <input type="text" placeholder="10,000"
                            className="w-full mt-[10px] p-2" onClick={() => setShowAlert(true)} />
                        <p className='text-[11px] text-[#FF0000] mt-2'>Minimum ₹ 3000 (show only when value is less than 3000)</p>
                        {showAlert && <Alert closeModal = {() => setShowAlert(false)} />}
                    </div>
                    <div>
                        <label>Number of Months & Payments</label>
                        <input type="text" placeholder="Enter months & payments"
                            className="w-full mt-[10px] p-2 " />

                    </div>
                    <div>
                        <label>Payment Cycle</label>
                        <input type="text" placeholder="11th to 20th of every month"
                            className="w-full mt-[10px] p-2" />
                    </div>
                    <div className='date_option'>
                        <label>Next payment starts from</label>
                        <div className="py-5">
                            <input type="radio" />11<small className='align-super'>th</small> to 20<small className='align-super'>th</small>Dec, 2022
                            <input type="radio" className="ml-11" />11<small className='align-super'>th</small> to 20<small className='align-super'>th</small> Dec, 2022
                        </div>
                    </div>
                    <div className="date_option">
                        <label>Last payment ends at</label>
                        <div className="py-5 ">
                            <input type="radio" />11<small className='align-super'>th</small> to 20<small className='align-super'>th</small> Sep, 2023
                            <input type="radio" className="ml-11" />11<small className='align-super'>th</small> to 20 <small className='align-super'>th</small> Oct, 2023
                        </div>
                    </div>
                </form>
            </div>
            <div className="action_btn mt-[100px]">
                <Link href={"./Form_2"} legacyBehavior>
                    <a className="py-3.5 px-12">Next</a>
                </Link>
            </div>

            <div className="contact_us text-center mt-[75px]">
                <h2>Contact us</h2>
                <div className="py-6">
                    <p>Monday- Friday: 9:30 AM to 6:30 PM (IST)</p>
                    <p>Saturday: 9:30 AM to 4:30 PM (IST) except 3rd Saturady</p>
                </div>
                <div className="flex justify-center gap-9 mt-8">
                    <div className="rounded-full p-2 bg-[#192537]" onClick={() => setShowMobile(true)}>
                        <FiPhone  className='text-white'/>
                    </div>
                    {showMobile && <Mobile closeModal = {() => setShowMobile(false)} />}
                    <div className="rounded-full bg-[#00D95F] p-2 pb-1" onClick={() => setShowWhatsapp(true)}>
                        <BsWhatsapp className='text-white' />
                    </div>
                    {showWhatsapp && <Whatsapp closeModal = {() => setShowWhatsapp(false)} />}
                </div>
                <div className="flex justify-center text-sm pt-3 mb-[228px]">
                    <span className="px-5">Call</span>
                    <span>Whatsapp</span>
                </div>
            </div>
        </div>
    )
}

export default Form_Details