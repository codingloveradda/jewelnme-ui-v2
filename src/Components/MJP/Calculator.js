import React from 'react'
import Image from 'next/image'
import D from '../../../public/Images/Buy_With_MJP/D.png'

const Calculator = () => {
    return (
        <div className="px-[140px] py-[150px] grid grid-cols-2 text-[#192537]">
            <div className="w-[630px] h-[750px] px-[70px] py-5 Benefit_Calculator_wrapper ">
                <div className="pt-[5px] check_amount">
                    <h1>Benefit Calculator</h1>
                    <div className="benifit_calculator_form mt-[60px]">
                        <label>Enter an Amount</label>
                        <div className='flex justify-center items-center'>
                            <input type="text" placeholder="10,000" className="w-full p-2.5 placeholder:text-lg" />
                            <a className="check_btn py-2 px-[55px]">Check</a>
                        </div>
                        <span>Minimum ₹ 3000 (show only when value is less than 3000)</span>
                        <h3 className="text-base mt-[30px]">Customers Usually Prefer</h3>
                        <div className="mb-[30px] mt-4 flex gap-4 justify-center items-center">
                            <a className="py-3.5 px-[40px]">₹ 10,000</a>
                            <a className="py-3.5 px-[40px]">₹ 15,000</a>
                            <a className="py-3.5 px-[40px]">₹ 20,000</a>
                        </div>
                    </div>
                </div>
                <div className="mjp_table w-full mt-[60px]">
                        <div className="mt-4">
                            <table>
                                <thead>
                                    <tr>
                                        <th>You Pay for 11 Months <span>(A)</span></th>
                                        <th>₹ 1,10,000.00</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>We Pay for 12th Month<span>(B1)</span> </td>
                                        <td>₹ 10,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Sign-up Bonus <span>(B2)</span> </td>
                                        <td>₹ 1,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Diamond Bonus <span>(B3)</span> </td>
                                        <td>₹ 5000.00</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr id='total'>
                                        <td>Total Benefit <span>(B)</span> </td>
                                        <td>₹ 16,000.00</td>
                                    </tr>
                                    <tr>
                                        <td>Buying Capacity <span>(A+B)</span> </td>
                                        <td>₹ 1,26,000.00</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
            </div>
            <div className=" flex flex-col justify-center items-center relative">
                <div className="absolute top-[119px] left-[35px] w-[180px]">
                    <Image src={D} alt="ring" className='w-[234px] h-[234px]'/>
                </div>
                <div className='watermark_print opacity-10'>
                    <h1 className="text-[124px]">T  <span className='pl-6'>tal</span> Benefit</h1>
                    <h1 className="text-[172px]">₹ 16,000</h1>
                </div>
            </div>
        </div>
    )
}

export default Calculator