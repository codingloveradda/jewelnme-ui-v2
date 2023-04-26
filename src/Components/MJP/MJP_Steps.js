import React from 'react'
import Image from 'next/image'
import Get_Enrollled from '../../../public/Images/MJP_Plan/Get Enrolled.png'
import Pay_Monthly from '../../../public/Images/MJP_Plan/Pay Monthly.png'
import Gift from "../../../public/Images/MJP_Plan/Our Gift To You.png"
import Purchase from '../../../public/Images/MJP_Plan/Purchase.png'
const MJP_Steps = () => {
    return (
        <div className="mjp_steps m-[120px]">
            <h1>Let's Get Started in 4 Simple Steps</h1>
            <div className="mjp_cards">
                <div className="step_cards text-center">
                    <div className="absolute top-[-45px] left-[90px] w-[103px] h-[100px] mx-auto">
                        <Image src={Get_Enrollled} alt="Get Enrolled" />
                    </div>
                    <h2 className="pt-[90px]">Get Enrolled</h2>
                    <p>Register for MJP at our website or by
                        contacting our sales representatives</p>
                    <p className="text-center">01</p>
                </div>
                <div className="step_cards text-center">
                    <div className="absolute top-[-45px] left-[90px] w-[103px] h-[100px] mx-auto">
                        <Image src={Pay_Monthly} alt=" Pay Monthly" />
                    </div>
                    <h2 className="pt-[90px]">Pay Monthly</h2>
                    <p className="px-4">11 month installments with easy payment options</p>
                    <p className="text-center">02</p>
                </div>
                <div className="step_cards text-center">
                    <div className="absolute top-[-45px] left-[90px] w-[103px] h-[100px] mx-auto">
                        <Image src={Gift} alt='Gift' />
                    </div>
                    <h2 className="pt-[90px]">Our Gift To You</h2>
                    <p>Get 1 month installment for FREE in the 12th
                        month & Special bonuses</p>
                    <p className="text-center">03</p>
                </div>
                <div className="step_cards text-center">
                    <div className="free_shipping absolute top-[-45px] left-[90px] w-[103px] h-[100px] mx-auto">
                        <Image src={Purchase} alt='Purchase' />
                    </div>
                    <h2 className="pt-[90px]">Purchase</h2>
                    <p className="px-2">Own your favourite Jewelnme with the total
                        redemption value</p>
                    <p className="text-center">04</p>
                </div>

            </div>
        </div>
    )
}

export default MJP_Steps