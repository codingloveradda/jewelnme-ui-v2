import React from 'react'
import Link from 'next/link'
import Header4 from '@/Components/Header_Form/Header-4'
import Form_Heading from '@/Components/MJP_Enrollment_form/Form_Heading'
import Footer2 from '@/Components/Footer-2/Footer2'

const Form_3 = () => {
    return (
        <div className="flex flex-col">
            < Header4 />
            <Form_Heading />
            <div className='mjp_payment px-[460px]'>
                <div className="mt-[93px]">
                    <input type="radio" />
                    <label className='ml-2'>Automate Monthly Payment</label>
                </div>
                <div className="acknowledge mt-3">
                    <p>By agreeing to this you understand, acknowledge and agree that Jewelnme may engage third party
                        payment processors or gateway service providers to automate recurring payments every month. You
                        may also change to manual payments at any point.</p>
                </div>
                <div className=" py-28">
                    <div className="term text-sm text-center ">
                        <p>By continuing with payment, you agree with our <span>Term &
                            Conditions</span></p>
                    </div>

                    <div className="action_btn mt-5 flex justify-center">
                        <Link href={"./Form_4"} className="py-2.5 px-12">Make Payment</Link>
                    </div>
                </div>
                <div className="contact_us text-center">
                    <h2>Contact us</h2>
                    <div className="py-6">
                        <p>Monday- Friday: 9:30 AM to 6:30 PM (IST)</p>
                        <p>Saturday: 9:30 AM to 4:30 PM (IST) except 3rd Saturady</p>
                    </div>
                    <div className="flex justify-center gap-9">
                        <div className="rounded-full px-3 py-2 bg-[#192537]">
                            <i className="fa-solid fa-phone text-white"></i>
                        </div>
                        <div className="rounded-full p-2.5 bg-[#00D95F] text-sm">
                            <i className="fa-brands fa-whatsapp fa-xl text-white"></i>
                        </div>
                    </div>
                    <div className="flex justify-center text-sm pt-3 mb-[82px]">
                        <p className="px-8">Call</p>
                        <p>Whatsapp</p>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default Form_3