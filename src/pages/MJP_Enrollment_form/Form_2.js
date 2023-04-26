import React from 'react'
import Link from 'next/link';
import Header4 from '@/Components/Header_Form/Header-4';
import Footer2 from '@/Components/Footer-2/Footer2';
import Socialmedia from "../../Components/Socialmedia/Socialmedia";

const Form_2 = () => {
    return (
        <>
            <Header4 />
            <div className=" flex justify-center mt-[127px] login">
                <div className="border h-[948px] w-[793px] Login-form">
                    <div className="mb-[69px] flex justify-center logIn-before">
                        <p className="text-base text-[#777D85] ">Log in using</p>
                    </div>
                    <Socialmedia />

                    <div className="mb-[80px] flex justify-center AFTR">
                        <p className="text-base text-[#777D85]"> Log in with</p>
                    </div>

                    <div className="mobile_email">
                        <a className="text-base mr-50 mobile_btn">Mobile</a>
                        <a className=" text-base  email_btn">Email</a>
                    </div>

                    <div className=" mt-8 ml-[150px]">
                        <form className="flex justify-center flex-col">
                            <label className="text-[#192537] text-base">Mobile Number</label>
                            <input type="text" placeholder="+91 Enter Mobile" className="w-[500px] mt-[10px]  p-2 mobile_number" />
                        </form>
                    </div>
                    <div className='hoverable'>
                        <div className="flex justify-start mx-[150px] mb-[30px] mt-8">
                            <div className="mr-[100px]">
                                <input type="radio" className="mr-[11px]" />
                                <label className="font-family text-base text-[#192537] ">Using OTP</label>
                            </div>
                            <div>
                                <input type="radio" className="mr-[11px]" />
                                <label className="font-family text-base text-[#192537] ">Using Password</label>
                            </div>
                        </div>

                        <div className="my-8 ml-[150px] input_hover">
                            <input type="password" placeholder="Enter Password" className="w-[500px] input_pass p-2" />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <a className="btn_login_main">Log In</a>
                    </div>
                    <div className="mx-[150px] mt-[28px]">
                        <p className="text-base text-[#192537]">Forgot password?</p>
                    </div>
                    <div className="text-center flex justify-center gap-2 mt-[71px]">
                        <p className="text-lg font-semibold"> Don't have an account?</p>
                        <Link href={"./Form_6"} className="regsiter_btn text-lg font-semibold text-[#A18A66] "> Register</Link>
                    </div>
                </div>
            </div>
            <Footer2 />
        </>
    )
}

export default Form_2