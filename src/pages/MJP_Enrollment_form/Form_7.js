import React from 'react'
import Image from 'next/image';
import Ring from "../../../public/Images/Profile_Services/ring.png";
import Form_Heading from '../../Components/MJP_Enrollment_form/Form_Heading'
import Form_Details from '../../Components/MJP_Enrollment_form/Form_Details'

const Form_7 = () => {
    return (
        <div className="flex items-center flex-col">
            < Form_Heading />
            <div className="grid my-11 pt-6">
                <div className="row-start-1 row-end-3">
                    <Image src={Ring} className="w-[127px]" alt="ring" />
                </div>
                <div className="flex gap-96 text-lg px-14">
                    <p>
                        Arcana Fresh Diamond Studs -
                        <span className="text-[#777D85]">URX1GX15</span>
                    </p>
                    <p>₹ 12,000</p>
                </div>
                <div>
                    <p className="text-[#777D85] text-lg px-14"><span>Size: 05</span><span className="ml-9">Qty: 01</span></p>
                </div>
                <div className="col-start-1 col-end-3 px-9 ">
                    <div className="customs">
                        <p className="text-end">
                            Customization
                            <span className="mx-5"><i className="fa-solid fa-angle-left"></i></span>
                        </p>
                        <div className="custom-menu bg-white hover:transition-duration: 500ms;">
                            <div className="flex gap-48 py-6 border-y px-5">
                                <div className="form_data flex items-center">
                                    <label>Size</label>
                                    <button className="border border-none rounded-full ml-5 px-1 pt-1 bg-[#00000008]">
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <input type="text" placeholder='13' className="w-[35px] h-[35px] rounded mx-4 text-center" />
                                    <button className="border border-none rounded-full px-1 pt-1 bg-[#00000008]">
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div className="form_data flex items-center">
                                    <label className="mx-5">Quantity</label>
                                    <button className="border border-none rounded-full px-1 pt-1 bg-[#00000008]">
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                    <input type="text" placeholder='13' className="w-[35px] h-[35px] rounded mx-4 text-center" />
                                    <button className="border border-none rounded-full px-1 pt-1 bg-[#00000008]">
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="py-6 mx-5">
                                <p>Metal n Purity:</p>
                                <div className="item-left_wrapper flex gap-[20px] mt-3">
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-1.5 text-xs text-center rounded">
                                            Gold 22k
                                        </p>
                                        <p className="text-[8px] mt-2">On Order</p>
                                    </div>
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-1.5 text-xs text-center rounded">
                                            Gold 18k
                                        </p>
                                        <p className="text-[8px] mt-2">On Order</p>
                                    </div>
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-1.5 text-xs text-center rounded">
                                            Gold 14k
                                        </p>
                                        <p className="text-[8px] mt-2">In Stock</p>
                                    </div>
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-1.5 text-xs text-center rounded">
                                            Pt. 995
                                        </p>
                                        <p className="text-[8px] mt-2">Only 1 Left</p>
                                    </div>
                                </div>
                            </div>

                            <div className="py-6 border-y mx-5">
                                <p>Tone:</p>
                                <div className="item-left_wrapper flex gap-[20px] mt-3">
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-3 text-xs text-center rounded">
                                            Y
                                        </p>
                                        <p className="text-[8px] mt-2">On Order</p>
                                    </div>
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-3 text-xs text-center rounded">
                                            W
                                        </p>
                                        <p className="text-[8px] mt-2">On Order</p>
                                    </div>
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-3 text-xs text-center rounded">
                                            R
                                        </p>
                                        <p className="text-[8px] mt-2">In Stock</p>
                                    </div>
                                    <div className="left-items">
                                        <p className="border w-[40px] h-[40px] p-3 text-xs text-center rounded">
                                            W
                                        </p>
                                        <p className="text-[8px] mt-2">Only 1 Left</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 mx-5">
                                <p>Diamond:</p>
                                <div className="flex gap-[305px] text-xs mt-5">
                                    <p>Colour:</p>
                                    <p>Clarity:</p>
                                </div>
                                <div className="flex gap-[120px]">
                                    <div className="item-left_wrapper flex gap-[20px] mt-3">
                                        <div className="left-items">
                                            <p className="border w-[40px] h-[40px] py-3 text-xs text-center rounded">
                                                D-E
                                            </p>
                                            <p className="text-[8px] mt-2">On Order</p>
                                        </div>
                                        <div className="left-items">
                                            <p className="border w-[40px] h-[40px] py-3 text-xs text-center rounded">
                                                E-F
                                            </p>
                                            <p className="text-[8px] mt-2">On Order</p>
                                        </div>
                                        <div className="left-items">
                                            <p className="border w-[40px] h-[40px] py-3 text-xs text-center rounded">
                                                G-H
                                            </p>
                                            <p className="text-[8px] mt-2">In Stock</p>
                                        </div>
                                        <div className="left-items">
                                            <p className="border w-[40px] h-[40px] py-3 text-xs text-center rounded">
                                                I-J
                                            </p>
                                            <p className="text-[8px] mt-2">Only 1 Left</p>
                                        </div>
                                    </div>
                                    <div className="item-left_wrapper flex gap-[20px] mt-3">
                                        <div className="left-items">
                                            <p
                                                className="border w-[40px] h-[40px] px-2 py-1 leading-none text-xs text-center rounded">
                                                FL - VVS
                                            </p>
                                            <p className="text-[8px] mt-2">On Order</p>
                                        </div>
                                        <div className="left-items">
                                            <p
                                                className="border w-[40px] h-[40px] px-2 py-1 leading-none text-xs text-center rounded">
                                                VVS - VS
                                            </p>
                                            <p className="text-[8px] mt-2">On Order</p>
                                        </div>
                                        <div className="left-items">
                                            <p
                                                className="border w-[40px] h-[40px] px-2.5 py-1 leading-none text-xs text-center rounded">
                                                VS - SI
                                            </p>
                                            <p className="text-[8px] mt-2">In Stock</p>
                                        </div>
                                        <div className="left-items">
                                            <p
                                                className="border w-[40px] h-[40px] px-3.5 py-1 leading-none text-xs text-center rounded">
                                                SI - I
                                            </p>
                                            <p className="text-[8px] mt-2">Only 1 Left</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Form_Details />

        </div>
    )
}

export default Form_7